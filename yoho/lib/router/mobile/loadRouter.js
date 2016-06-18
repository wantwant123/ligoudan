/**
 * Created by Administrator on 2016/6/16.
 */
var koaBody = require("koa-body"),
    mongoConn = require(rootPath + "/lib/common/mongoConn");
//mongodb = require("mongodb");
//Student = require(rootPath + "/lib/schema/Student");

module.exports = function(router) {
    router.get("/admin", function *() {
        if(this.session.users !== undefined){
            if(this.session.users[0].securityCode == 123321){
                this.body = 1;
            }
        }else{
            this.body = 2;
        }
        //this.body = null;
    });

    ////查看所有用户
    //router.get("/admin", function *() {
    //    var students = yield mongoConn.get(this).collection("contents").find().toArray();
    //    this.body = students;
    //});
};
