/**
 * Created by Administrator on 2016/6/21.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/LoginConst");

var LoginAction = {
    Login: function(username,password) {
        CentralDispatcher.dispatch({
            actionType: Const.LOGIN_USER,
            username:username,
            password:password
        });
    }
};

module.exports = LoginAction;