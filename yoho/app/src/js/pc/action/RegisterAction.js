/**
 * Created by Administrator on 2016/6/16.
 */
/**
 * Created by Administrator on 2016/5/29.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/RegisterConst");

var RegisterAction = {
    RegUser: function(username,password) {
        CentralDispatcher.dispatch({
            actionType: Const.REGISTER_USER,
            username:username,
            password:password
        });
    }
};

module.exports = RegisterAction;