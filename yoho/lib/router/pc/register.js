/**
 * Created by Administrator on 2016/6/21.
 */
/**
 * Created by Administrator on 2016/6/21.
 */
var koaBody = require("koa-body"),
    mongoConn = require(rootPath + "/lib/common/mongoConn");
//mongodb = require("mongodb");
//Student = require(rootPath + "/lib/schema/Student");

module.exports = function(router) {
    router.post("/RegUser", koaBody(), function *() {
        var username = this.request.body.username,
            password = this.request.body.password;
        yield mongoConn.get(this).collection("user").insert({
            username:username,
            password:password
        });
        this.body = null;

        //???
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