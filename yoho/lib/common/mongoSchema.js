/**
 * 该模块是用来验证对象属性值的数据类型
 *
 * make by edison
 */
var mongodb = require("mongodb");

module.exports = {
    /**检查对象*/
    checkObject: function(schema, datum) {
        //非空判断
        if (schema == null) throw new Error("不能没有schema模板！");
        if (datum == null) throw new Error("不能没有传入数据！");

        //剔除多余属性
        for (var key in datum) {
            var schemaVal = schema[key];
            //验证
            if (schemaVal === undefined) throw Error(key + "属性在schema中没有定义，不能拥有额外的属性！");
        }

        //必须拥有的属性
        for (key in schema) {
            var schemaVal = schema[key][0];
            var datumVal = datum[key];
            //验证
            var must = schemaVal.split("_")[1];
            if (must === "must") {
                if (datumVal == null) throw Error(key + "属性为must，不能没有属性值！");
            }
        }

        //匹配必须属性
        for (key in schema) {
            var schemaVal = schema[key][0];
            var datumVal = datum[key];
            //所有属性必须有
            if (datumVal === undefined) throw Error("不能没有" + key + "属性！");
            //验证数据类型
            var dataType = schemaVal.split("_")[0];
            switch (dataType) {
                case "number":
                    if (typeof datumVal !== dataType) throw Error(key + "数据类型必须匹配！");
                    break;
                case "string":
                    if (typeof datumVal !== dataType) throw Error(key + "数据类型必须匹配！");
                    break;
                case "boolean":
                    if (typeof datumVal !== dataType) throw Error(key + "数据类型必须匹配！");
                    break;
                case "dateString":
                    if (typeof datumVal !== "string") throw Error(key + "是dateString，值必须是string类型！");
                    if (!/^\d{4}-\d{2}-\d{2}$/.test(datumVal)) throw Error(key + "是dateString，值必须匹配类似2005-05-05的样子！");
                    break;
                case "datetimeNumber":
                    if (typeof datumVal !== "number") throw Error(key + "是datetimeNumber，值必须是number类型！");
                    break;
                case "fkString":
                    if (typeof datumVal !== "string") throw Error(key + "是外键fkString，值必须是string类型！");
                    break;
                case "object":
                    if (typeof datumVal !== "object") throw Error(key + "是对象object，值必须是object类型！");
                    this.checkObject(schema[key][1], datum[key]);//再验证
                    break;
                case "fkStringMany":
                    if (!(datumVal instanceof Array)) throw Error(key + "是对象外键数组，值必须是Array类型！");
                    for (var i = 0, len = datumVal.length; i < len; ++i) {
                        var theType = typeof datumVal[i];
                        if (!(theType === "string" || theType === "object")) throw Error(key + "是对象外键集合，数组中的值不符合要求！");
                    }
                    break;
                case "objectMany":
                    if (!(datumVal instanceof Array)) throw Error(key + "是对象数组，值必须是Array类型！");
                    for (var i = 0, len = datumVal.length; i < len; ++i) {
                        this.checkObject(schema[key][1], datum[key][i]);//再验证
                    }
                    break;
            }
        }
    },
    /**检查模型*/
    checkSchema: function(schema) {
        //非空判断
        if (schema == null) throw new Error("不能没有schema模板！");
        //属性验证
        for (var key in schema) {
            //属性值非空判断
            if (schema[key] == null) throw new Error(key + "属性不能为空！");
            //属性值类型判断
            if (typeof schema[key][0] !== "string") throw new Error(key + "属性的类型定义必须是字符串！");
            //获取属性类型和必须拥有
            var dataType = schema[key][0].split("_")[0];
            var must = schema[key][0].split("_")[1];
            //属性值格式判断
            if (!/^[A-z]+_[A-z]+$/.test(schema[key][0])) throw new Error(key + "的格式必须为string_must！");
            if (!/^(string|number|boolean|dateString|datetimeNumber|fkString|object|fkStringMany|objectMany)$/.test(dataType)) throw new Error(key + "的数据类型只能是string|number|boolean|dateString|datetimeNumber|fkString|object|fkStringMany|objectMany！");
            if (!/^(must|not)$/.test(must)) throw new Error(key + "的非空限制只能是must|not！");
            //子对象判断
            if (dataType === "object" || dataType === "objectMany_not") {
                this.checkSchema(schema[key][1]);
            }
        }
    }
};