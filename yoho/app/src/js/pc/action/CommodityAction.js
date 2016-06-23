/**
 * Created by Administrator on 2016/6/21.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/CommodityConst");

var CommodityAction = {
    change: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.CHANGE_IMG,
            data:data
        });
    },
    size: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.SIZE_CHOOSE,
            data:data
        });
    },
    plus: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.PLUS_NUM,
            data:data
        });
    },
    reduce: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.REDUCE_NUM,
            data:data
        });
    },
    addToShopcar: function(){
        CentralDispatcher.dispatch({
            actionType: Const.ADD_SHOPCAR
            //data:data
        });
    },
    addToCollect: function(){
        CentralDispatcher.dispatch({
            actionType: Const.ADD_COLLECT
            //data:data
        });
    }
};

module.exports = CommodityAction;