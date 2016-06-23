/**
 * Created by Administrator on 2016/6/23.
 */
/**
 * Created by Administrator on 2016/6/23.
 */
var React = require("react");
var FavorAction = require("scripts/pc/action/FavorAction");
var Store = require("scripts/pc/store/FavorStore");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var LoginCpn = React.createClass({
    /**?????state*/
    getInitialState: function() {
        return Store.getInitStore();
    },
    /**???DOM?????*/
    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },
    /**��??DOM?????*/
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    /**???*/
    render: function() {
        return (
            <div>
                <div className="contentRight">
                    <div className="contentRight-11">
                        <p>VIP金额累计需要订单成功且无退换货</p>
                    </div>
                    <div className="contentRight-2">
                        <div style={{marginLeft: 15+"px"}} onClick={this.orderType} id="order">
                            <span className="on" name="order" >现有订单</span>
                            <span name="order">成功订单</span>
                            <span name="order">已取消订单</span>
                            <span name="order">历史订单</span>
                        </div>
                    </div>
                    <div className="contentRight-31">
                        <span style={{marginLeft: 10+"px"}}>商品信息</span>
                        <span style={{marginLeft: 275+"px"}}>单价（元）</span>
                        <span style={{marginLeft: 16+"px"}}>数量</span>
                        <span style={{marginLeft: 30+"px"}}>实付款（元）</span>
                        <span style={{marginLeft: 25+"px"}}>订单状态</span>
                        <span style={{marginLeft: 58+"px"}}>操作</span>
                    </div>
                    <div className="contentRight-41">
                        <div className="contentRight-41-1">
                <span>
                    订单编号 ：1605323134
                </span>
                <span style={{float: "right",marginRight: 10+"px"}}>
                    下单时间 ： 2016-06-17 10:53:11
                </span>
                        </div>
                        <div className="contentRight-41-2">
                            <div className="contentRight-41-2-img">
                                <img src="../imgs/02fc8ff033a659a830f63f8a97f84b38d0.jpg" alt=""/>
                            </div>
                            <div className="contentRight-41-2-a">
                                <p>
                                    <span><a href="#" style={{color:"#6E9DC1",textDecoration: "none"}}>热血FEVER UNLIMITED 拼接短袖T恤</a></span>
                                    <span style={{marginLeft: 75+"px"}}>329.00</span>
                                    <span style={{marginLeft: 45+"px"}}>1</span>
                                </p>
                                <p style={{color: "#7b7b7b",marginTop: 5+"px"}}>颜色 :黑色 尺码:L</p>
                            </div>

                        </div>
                        <div className="contentRight-41-3">
                            <p style={{fontWeight: 900,marginTop: 26+"px"}}>329.00</p>
                            <p style={{color: "#7b7b7b"}}>(含快递:0.00元)</p>
                        </div>
                        <div className="contentRight-41-4">
                            <p>订单已成功，等待付款</p>
                        </div>
                        <div className="contentRight-41-5">
                            <p><a href="#"  className="on">立即付款</a></p>
                            <p><a href="#">查看订单</a></p>
                            <p><a href="#">取消订单</a></p>
                        </div>
                    </div>
                    <div className="contentRight-51">
                        <p>共1条结果 , 1/1页</p>
                    </div>
                </div>
                <div className="serbice1">
                    <div className="serbiceImgs1"></div>
                    <span>客服电话 : 400-889-9646 08:00-22:30(周一至周日)</span>
                </div>
            </div>

        );
    },

    orderType: function(event) {
        event.stopPropagation();
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var divEle =document.getElementById("order");
        var span = divEle.getElementsByTagName("span");
        if (target.nodeName.toLocaleLowerCase() == "span") { //委托对象
            for(var i= 0,len = span.length;i<len;i++){
                span[i].setAttribute("class","off");
            }
            target.setAttribute("class","on");
            FavorAction.orderType(target.innerHTML);
            console.info(target.innerHTML); //输出
        }
    },
    /**??��?store????*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = LoginCpn;