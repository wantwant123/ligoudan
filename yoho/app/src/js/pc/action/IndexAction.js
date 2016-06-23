/**
 * Created by Administrator on 2016/6/22.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/IndexConst");

var IndexAction = {
    choose: function() {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_CHOSSE
        });
    },
    choose2: function() {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_CHOSSE2
        });
    },
    choose3: function() {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_CHOSSE3
        });
    },
    choose4: function() {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_CHOSSE4
        });
    },
    choose5: function() {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_CHOSSE5
        });
    },
    choose6: function() {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_CHOSSE6
        });
    },
    chooseChild: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_CHILD,
            data:data
        });
    },
    choosePrice: function(data,data1) {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_PRICE,
            data:data,
            data1:data1,
        });
    } ,
    chooseColor: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_COLOR,
            data:data
        });
    },
    chooseSex: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.CHOOSE_SEX,
            data:data
        });
    },
    deleteChoose: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.DELETE_CHOOSE,
            data:data
        });
    },
    jump: function(data) {
        CentralDispatcher.dispatch({
            actionType: Const.PAGE_JUMP,
            data:data
        });
    }
};

module.exports = IndexAction;