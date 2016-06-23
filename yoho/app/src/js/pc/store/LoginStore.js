/**
 * Created by Administrator on 2016/6/21.
 */
/**
 * Created by Administrator on 2016/5/29.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/LoginConst"),
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
    Login: function(username,password) {
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
        case Const.LOGIN_USER:
            manageDeal.Login(action.username, action.password);
            break;
    }
});

module.exports = StorePublic;