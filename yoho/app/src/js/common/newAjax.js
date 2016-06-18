/**
 * Created by Administrator on 2016/6/17.
 */
var React = require("react");
var ReactRouter = require("react-router");



    //上传数据

    //封装后fetch叫New.Ajax
var New = {
    Ajax:function (text){
        function change(text){
            var jsonLength = 0;
            var str = "";
            for(var key in text){
                jsonLength++;
                str = str + key + "="+ text[key]+"&"
            }
            var pushData = str.slice(0,str.length-1);
            return pushData;
        }
        if(text.type == "post"){
            window.fetch(text.url, {
                method: text.type,
                headers: {"Content-Type" : "application/x-www-form-urlencoded"},//使用post请求的时候需要
                credentials: "include",//默认请求不带cookie，此设置可带cookie
                body: change(text.data)
            }).then(function(res) {
                res.json().then(function(json) {
                    text.success(json);
                });
            });
        }else if(text.type == "get"){
            window.fetch(text.url+"?"+ change(text.data), {
                method: text.type,
                credentials: "include"//默认请求不带cookie，此设置可带cookie
            }).then(function(res) {
                res.json().then(function(json) {
                    text.success(json);
                });
            });
        }
    }
};



module.exports = New;