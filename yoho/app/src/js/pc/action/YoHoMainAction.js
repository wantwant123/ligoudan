/**
 * Created by Administrator on 2016/6/23.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/YoHoMainConst");

var YoHoMainAction = {
    Login: function(username,password) {
        CentralDispatcher.dispatch({
            actionType: Const.LOGIN_USER,
            username:username,
            password:password
        });
    }
};

module.exports = YoHoMainAction;