/**
 * Created by Administrator on 2016/5/29.
 */
var CentralDispatcher = require("scripts/manage/dispatcher/CentralDispatcher"),
    Const = require("scripts/manage/const/ManageConst");

/**��̨��¼ action*/
var ManageAction = {
    //������findAdmin
    findAdmin: function(username, password) {
        CentralDispatcher.dispatch({
            actionType: Const.FIND_ADMIN,
            username: username,
            password: password
        });
    },
};

module.exports = ManageAction;