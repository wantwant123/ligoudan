/**
 * Created by Administrator on 2016/6/21.
 */
var koaBody = require("koa-body"),
    mongoConn = require(rootPath + "/lib/common/mongoConn");
//mongodb = require("mongodb");
//Student = require(rootPath + "/lib/schema/Student");

module.exports = function(router) {

    //π∫ŒÔ≥µ
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
    // ’≤ÿ
    router.post("/addCollect", koaBody(), function *() {
        var num = this.request.body.num,
            size = this.request.body.size,
            img = this.request.body.img;
        yield this.mongo.db("gawa").collection("cinema").insert({
            num:num,
            img:img,
            size:size
        });
        this.body = null;

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

    router.get("/test", function *() {
        var stu = yield mongoConn.get(this).collection("gewala").find().toArray();
        console.info(stu);
        this.body = stu;
    });
};