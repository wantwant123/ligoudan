/**
 * Created by Administrator on 2016/6/21.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/FavorConst");

var FavorAction = {
    goodCollect: function() {
        CentralDispatcher.dispatch({
            actionType: Const.GOOD_COLLECT,
        });
    },
    nameCollect: function() {
        CentralDispatcher.dispatch({
            actionType: Const.NAME_COLLECT,
        });
    },
    orderType: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.ORDER_TYPE,
            data:data
        });
    }
};

module.exports = FavorAction;