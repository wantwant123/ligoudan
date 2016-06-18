/**
 * Created by Administrator on 2016/5/29.
 */
var CentralDispatcher = require("scripts/manage/dispatcher/CentralDispatcher"),
    Const = require("scripts/manage/const/ManageMainConst"),
    EventEmitter = require("events").EventEmitter,
    assign = require("object-assign"),
    $ = require("jquery"),
    CHANGE_EVENT = "change",
    New = require("scripts/common/newAjax"),//手机端必要fetch
    store = {};


/**����״̬*/
var manageDeal = {
    initial: function() {
        store.students = 1;
    },
    yy: function() {
        $.ajax({
            url:"/test",
            type:"get",
            success:function(data){
                console.info("success");
                console.info(data);
                store.test = data[0].username;
                StorePublic.emitChange();
            }
        });

        //如果你是手机端，请用这个fetch发Ajax请求
        //New.Ajax({
        //    type: "get",
        //    url: "/stu",
        //    success: function(data) {
        //        if(data == null){
        //            store.stu = 2;
        //        }else{
        //            var str ="";
        //            for(var i = 0,len = data.length;i<len;i++){
        //                str += data[i].val;
        //            }
        //            store.stu = str;
        //        }
        //        location.href = "http://localhost:3000/html/HAHA.html";
        //        console.info(store.stu);
        //        StorePublic.emitChange();
        //    }
        //})

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
        case Const.FIND_TEST:
            manageDeal.yy();
            break;
    }
});

module.exports = StorePublic;