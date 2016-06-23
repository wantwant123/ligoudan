/**
 * Created by Administrator on 2016/6/21.
 */
/**
 * Created by Administrator on 2016/6/21.
 */
/**
 * Created by Administrator on 2016/5/29.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/FavorConst"),
    EventEmitter = require("events").EventEmitter,
    assign = require("object-assign"),
    $ = require("jquery"),
    CHANGE_EVENT = "change",
    store = {};

/**����״̬*/
var manageDeal = {
    //��ʼ��
    initial: function() {
        store.students = 1;
    },
    //��¼
    LOGIN: function() {
        console.info(1);
        $.ajax({
            type: "post",
            url: "/Login",
            data:{
                username:username,
                password:password
            },
            success: function(data) {
                if (data.tips){
                    console.info("登录成功");
                    location.href = "/html/manage/manageMain.html";
                }else{
                    alert("登录失败");
                }
            }
        });
    },
    //收藏类型选择
    goodCollect: function() {
        $.ajax({
            type: "post",
            url: "/goodCollect",
            success: function(data) {
                console.info("收藏信息获取成功");
                StorePublic.emitChange();
            }
        });
    },
    //收藏类型选择
    nameCollect: function() {

        $.ajax({
            type: "post",
            url: "/nameCollect",
            success: function(data) {
                console.info("品牌信息获取成功");
                StorePublic.emitChange();
            }
        });
    },
    //订单类型选择
    orderType: function(data) {
        console.info(11)
        $.ajax({
            type: "post",
            url: "/orderType",
            data:{
                data:data
            },
            success: function(data) {
                console.info("订单类型获取成功");
                StorePublic.emitChange();
            }
        });
    }
};

/**״̬��*/
var StorePublic = assign({}, EventEmitter.prototype, {
    /**��ȡ��ʼ��״̬*/
    getInitStore: function() {
        manageDeal.initial();
        return store;
    },
    /**��ȡ״̬*/
    getStore: function() {
        return store;
    },
    /**ִ���¼�*/
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    /**ע���¼�������*/
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    /**�Ƴ��¼�������*/
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

/**Ϊdispatcherע��ص�*/
CentralDispatcher.register(function(action) {
    switch (action.actionType) {
        case Const.GOOD_COLLECT:
            manageDeal.goodCollect();
            break;
    }
    switch (action.actionType) {
        case Const.NAME_COLLECT:
            manageDeal.nameCollect();
            break;
    }
    switch (action.actionType) {
        case Const.ORDER_TYPE:
            manageDeal.orderType(action.data);
            break;
    }
});

module.exports = StorePublic;