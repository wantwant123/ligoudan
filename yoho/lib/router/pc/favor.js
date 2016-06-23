/**
 * Created by Administrator on 2016/6/23.
 */

var koaBody = require("koa-body"),
    mongoConn = require(rootPath + "/lib/common/mongoConn");
//mongodb = require("mongodb");
//Student = require(rootPath + "/lib/schema/Student");

module.exports = function(router) {
    router.post("/goodCollect", koaBody(), function *() {
        var users = yield mongoConn.get(this).collection("user").find().toArray();
        //if (users.length != 0) {
        //    this.body = {
        //        tips: users.length === 0 ? false : true,
        //        users};
        //}else{
            this.body = null;
        //}

        //this.body = {
        //    tips: users.length === 0 ? false : true
        //    //code:this.session.authCode,
        //};
    });
    router.post("/nameCollect", koaBody(), function *() {
        var users = yield mongoConn.get(this).collection("user").find().toArray();
        //if (users.length != 0) {
        //    this.body = {
        //        tips: users.length === 0 ? false : true,
        //        users};
        //}else{
            this.body = null;
        //}

        //this.body = {
        //    tips: users.length === 0 ? false : true
        //    //code:this.session.authCode,
        //};
    });
    //订单类型选择
    router.post("/orderType", koaBody(), function *() {
        var users = yield mongoConn.get(this).collection("user").find().toArray();
        //if (users.length != 0) {
        //    this.body = {
        //        tips: users.length === 0 ? false : true,
        //        users};
        //}else{
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