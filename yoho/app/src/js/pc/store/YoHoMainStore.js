/**
 * Created by Administrator on 2016/6/23.
 */
/**
 * Created by Administrator on 2016/5/29.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/YoHoMainConst"),
    EventEmitter = require("events").EventEmitter,
    assign = require("object-assign"),
    $ = require("jquery"),
    CHANGE_EVENT = "change",
    store = {};

/**处理状态*/
var manageDeal = {
    //初始化
    initial: function() {
        store.students = 1;
    },
    //注册
    RegUser: function(username,password) {
        console.info(1);
        $.ajax({
            type: "post",
            url: "/RegUser",
            data:{
                username:username,
                password:password
            },
            success: function(){
                alert("注册成功");
            }
        });
    }
};

/**状态机*/
var StorePublic = assign({}, EventEmitter.prototype, {
    /**获取初始化状态*/
    getInitStore: function() {
        manageDeal.initial();
        return store;
    },
    /**获取状态*/
    getStore: function() {
        return store;
    },
    /**执行事件*/
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    /**注册事件监听器*/
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    /**移除事件监听器*/
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

/**为dispatcher注册回调*/
CentralDispatcher.register(function(action) {
    switch (action.actionType) {
        case Const.REGISTER_USER:
            manageDeal.RegUser(action.username, action.password);
            break;
    }
});

module.exports = StorePublic;