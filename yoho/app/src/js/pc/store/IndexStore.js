/**
 * Created by Administrator on 2016/6/22.
 */
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
    Const = require("scripts/pc/const/IndexConst"),
    EventEmitter = require("events").EventEmitter,
    assign = require("object-assign"),
    $ = require("jquery"),
    CHANGE_EVENT = "change",
    store = {};
var flag= true;
var flag2= true;
var flag3= true;
var flag4= true;
var flag5= true;
var flag6= true;
var a=0;

/**??????*/
var manageDeal = {
    //?????
    initial: function() {
        store.students = 1;
        //store.changeClassify1 = "";
        //store.changePrice1 = "";
        //store.changeColor1 = "";
        //store.changeSex1 = "";
    },
    lunbo:function(){
        setInterval(function(){
            console.info(1);
            a ++;
            $("#kaka").html(a);
        },3000);
    },
    //???
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
                    console.info("成功回到");
                    location.href = "/html/manage/manageMain.html";
                }else{
                    alert("成功回到");
                }
            }
        });
    },


    //类型选择
    choose:function(){
        if(flag == true){
            $(".firc").show("slow");
        }else{
            $(".firc").hide("slow");
        }
        flag=!flag;
    },
    choose2:function(){
        if(flag2 == true){
            $(".secc").show("slow");
        }else{
            $(".secc").hide("slow");
        }
        flag2=!flag2;
    },
    choose3:function(){
        if(flag3 == true){
            $(".thic").show("slow");
        }else{
            $(".thic").hide("slow");
        }
        flag3=!flag3;
    },
    choose4:function(){
        if(flag4 == true){
            $(".fouc").show("slow");
        }else{
            $(".fouc").hide("slow");
        }
        flag4=!flag4;
    },
    choose5:function(){
        if(flag5 == true){
            $(".fifc").show("slow");
        }else{
            $(".fifc").hide("slow");
        }
        flag5=!flag5;
    },
    choose6:function(){
        if(flag6 == true){
            $(".sixc").show("slow");
        }else{
            $(".sixc").hide("slow");
        }
        flag6=!flag6;
    },

    //类型选择
    chooseChild:function(data){
        console.info(data);
        if(data != undefined){
            store.display = "block"
        }else{
            store.display = "none"
        }
        store.changeClassify1 = data;
        $.ajax({
            type:"get",
            url:"/getChangeInfo",
            data:{
                classify:data
            },
            success:function(data){
                console.info("成功回调");
                store.changeClassify = data;
                StorePublic.emitChange();
            }
        })
    },
    //价格选择
    choosePrice:function(data,data1){
        console.info(data);
        if(data != undefined){
            store.display1 = "block"
        }else{
            store.display1 = "none"
        }
            store.changePrice1 = data1;
        $.ajax({
            type:"get",
            url:"/getChangePrice",
            data:{
                price:data
            },
            success:function(data){
                console.info("成功回调");
                store.changePrice = data;
                StorePublic.emitChange();
            }
        })
    }   ,
    //颜色选择
    chooseColor:function(data){
        console.info(data);
        if(data != undefined){
            store.display2 = "block"
        }else{
            store.display2 = "none"
        }
        store.changeColor1 = data;
        $.ajax({
            type:"get",
            url:"/getChangeColor",
            data:{
                color:data
            },
            success:function(data){
                console.info("成功回调");
                    store.changeColor = data;
                StorePublic.emitChange();
            }
        })
    },
    //性别选择
    chooseSex:function(data){
        console.info(data);
        if(data != undefined){
            store.display3 = "block"
        }else{
            store.display3 = "none"
        }
        store.changeSex1 = data;
        $.ajax({
            type:"get",
            url:"/getChangeSex",
            data:{
                sex:data
            },
            success:function(data){
                console.info("成功回调");
                store.changeSex = data;
                StorePublic.emitChange();
            }
        })
    },
    aa:function(data){
        return data
    },
    //删除选择
    deleteChoose:function(data){
        var self =this;
        self[data]();
        StorePublic.emitChange();
    },
    jump:function(data){
        console.info(1);
        console.info(data);
        store.goodId = data;
    }
};

/**????*/
var StorePublic = assign({}, EventEmitter.prototype, {
    /**??????????*/
    getInitStore: function() {
        manageDeal.initial();
        return store;
    },
    getInitStoreLunbo: function() {
        manageDeal.lunbo();
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
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }
});

/**?dispatcher?????*/
CentralDispatcher.register(function(action) {
    switch (action.actionType) {
        case Const.CHOOSE_CHOSSE:
            manageDeal.choose();
            break;
        case Const.CHOOSE_CHOSSE2:
            manageDeal.choose2();
            break;
        case Const.CHOOSE_CHOSSE3:
            manageDeal.choose3();
            break;
        case Const.CHOOSE_CHOSSE4:
            manageDeal.choose4();
            break;
        case Const.CHOOSE_CHOSSE5:
            manageDeal.choose5();
            break;
        case Const.CHOOSE_CHOSSE6:
            manageDeal.choose6();
            break;
        case Const.CHOOSE_CHILD:
            manageDeal.chooseChild(action.data);
            break;
        case Const.CHOOSE_PRICE:
            manageDeal.choosePrice(action.data,action.data1);
            break;
        case Const.CHOOSE_COLOR:
            manageDeal.chooseColor(action.data);
            break;
        case Const.CHOOSE_SEX:
            manageDeal.chooseSex(action.data);
            break;
        case Const.DELETE_CHOOSE:
            manageDeal.deleteChoose(action.data);
            break;
        case Const.PAGE_JUMP:
            manageDeal.jump(action.data);
            break;
    }
});

module.exports = StorePublic;