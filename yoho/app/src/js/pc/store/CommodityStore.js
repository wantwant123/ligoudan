/**
 * Created by Administrator on 2016/6/21.
 */
/**
 * Created by Administrator on 2016/5/29.
 */
var CentralDispatcher = require("scripts/pc/dispatcher/CentralDispatcher"),
    Const = require("scripts/pc/const/CommodityConst"),
    EventEmitter = require("events").EventEmitter,
    assign = require("object-assign"),
    $ = require("jquery"),
    CHANGE_EVENT = "change",
    store = {};

/**??????*/
var manageDeal = {
    //?????
    initial: function() {
        store.img = "../imgs/commodityimg/0124c73c771c5158a944938e197e4e00ce.jpg";
        store.buyNum = 1;
    },
    //???
    change: function(data) {
        //console.info("更换");
        store.img = data;
        StorePublic.emitChange();
    },
    size: function(data) {
        store.buySize = data;
        //console.info("尺寸");
        StorePublic.emitChange();
    },
    plus: function(data) {
        store.buyNum = parseInt(data) + 1;
        //console.info("增加");
        StorePublic.emitChange();
    },
    reduce: function(data) {
        var goodsNum = parseInt(data)-1;
        if(goodsNum <= 1){
            goodsNum = 1;
        }
        store.buyNum = goodsNum;
        //console.info("减少");
        StorePublic.emitChange();
    },
    addToShopcar: function() {
       $.ajax({
            url:"/addShopCar",
            type:"post",
            data:{
                num:store.buyNum,
                img:store.img,
                size:store.buySize
           },
           success:function(){
               console.info("购物车添加完成");
               StorePublic.emitChange();
           }
        });
    } ,
    addToCollect: function() {
       $.ajax({
            url:"/addCollect",
            type:"post",
            data:{
                num:store.buyNum,
                img:store.img,
                size:store.buySize
           },
           success:function(){
               console.info("收藏添加完成");
               StorePublic.emitChange();
           }
        });
    }
};

/**????*/
var StorePublic = assign({}, EventEmitter.prototype, {
    /**??????????*/
    getInitStore: function() {
        manageDeal.initial();
        return store;
    },
    /**?????*/
    getStore: function() {
        return store;
    },
    /**??????*/
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    /**????????????*/
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    /**????????????*/
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

/**?dispatcher?????*/
CentralDispatcher.register(function(action) {
    switch (action.actionType) {
        case Const.CHANGE_IMG:
            manageDeal.change(action.data);
            break;
        case Const.SIZE_CHOOSE:
            manageDeal.size(action.data);
            break;
        case Const.PLUS_NUM:
            manageDeal.plus(action.data);
            break;
        case Const.REDUCE_NUM:
            manageDeal.reduce(action.data);
            break;
        case Const.ADD_SHOPCAR:
            manageDeal.addToShopcar();
            break;
        case Const.ADD_COLLECT:
            manageDeal.addToCollect();
            break;
    }
});

module.exports = StorePublic;