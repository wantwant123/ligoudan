var koaBody = require("koa-body"),
    mongoConn = require(rootPath + "/lib/common/mongoConn");
    //mongodb = require("mongodb");
    //Student = require(rootPath + "/lib/schema/Student");

module.exports = function(router) {
    router.post("/contents", koaBody(), function *() {
        //��ȡ����
        var username = this.request.body.username,
            password = this.request.body.password;

        //�������ݿ�
        var users = yield mongoConn.get(this).collection("users").find({$and: [{username: username}, {password: password}]}).toArray();


        //����session

        if (users.length != 0) {
            if(this.session.users === undefined) this.session.users = [];
            this.session.users.push({
                securityCode: 123321
            });
            this.body = {
                tips: users.length === 0 ? false : true,
                users};
        }else{
            this.body = null;
        }

        //��Ӧ
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