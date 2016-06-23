/**
 * Created by Administrator on 2016/6/21.
 */
var koaBody = require("koa-body"),
    mongoConn = require(rootPath + "/lib/common/mongoConn");
//mongodb = require("mongodb");
//Student = require(rootPath + "/lib/schema/Student");

module.exports = function(router) {
    router.post("/Login", koaBody(), function *() {
        var username = this.request.body.username,
            password = this.request.body.password;
        var users = yield mongoConn.get(this).collection("user").find({$and: [{username: username}, {password: password}]}).toArray();
        //if (users.length != 0) {
        //    this.body = {
        //        tips: users.length === 0 ? false : true,
        //        users};
        //}else{
        //    this.body = null;
        //}

        this.body = {
            tips: users.length === 0 ? false : true
            //code:this.session.authCode,
        };
    });

    router.get("/test", function *() {
        var stu = yield mongoConn.get(this).collection("gewala").find().toArray();
        console.info(stu);
        this.body = stu;
    });
};