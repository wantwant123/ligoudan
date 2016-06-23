/**
 * Created by Administrator on 2016/6/22.
 */
var koaBody = require("koa-body"),
    mongoConn = require(rootPath + "/lib/common/mongoConn");
//mongodb = require("mongodb");
//Student = require(rootPath + "/lib/schema/Student");

module.exports = function(router) {

    //���ﳵ
    router.post("/addShopCar", koaBody(), function *() {
        var num = this.request.body.num,
            size = this.request.body.size,
            img = this.request.body.img;
        if(this.session.shopCar == undefined) this.session.shopCar = [];
        this.session.shopCar.push({
            num:num,
            size:size,
            img:img
        });
        //if (users.length != 0) {
        //    this.body = {
        //        tips: users.length === 0 ? false : true,
        //        users};
        //}else{
        console.info(this.session.shopCar);
        this.body = null;
        //}

        //this.body = {
        //    tips: users.length === 0 ? false : true
        //    //code:this.session.authCode,
        //};
    });
    //页面刷新
    router.get("/getChangeInfo", function *() {
        var choose = this.query.classify;


        var stu = yield mongoConn.get(this).collection("gewala").find().toArray();
        console.info(stu);
        this.body = null;
    });
    router.get("/getChangePrice", function *() {
        var price = this.query.price;


        var stu = yield mongoConn.get(this).collection("gewala").find().toArray();
        console.info(stu);
        this.body = null;
    });
    router.get("/getChangeColor", function *() {
        var color = this.query.color;


        var stu = yield mongoConn.get(this).collection("gewala").find().toArray();
        console.info(stu);
        this.body = null;
    });
    router.get("/getChangeSex", function *() {
        var sex = this.query.sex;


        var stu = yield mongoConn.get(this).collection("gewala").find().toArray();
        console.info(stu);
        this.body = null;
    });
};