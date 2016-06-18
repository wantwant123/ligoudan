/**
 * Created by Administrator on 2016/6/16.
 */
/**
 * Created by Administrator on 2016/5/29.
 */
var CentralDispatcher = require("scripts/manage/dispatcher/CentralDispatcher"),
    Const = require("scripts/manage/const/ManageMainConst");

var ManageAction = {
    yy: function() {
        CentralDispatcher.dispatch({
            actionType: Const.FIND_TEST
        });
    }
};

module.exports = ManageAction;