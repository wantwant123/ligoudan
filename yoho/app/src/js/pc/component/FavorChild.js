/**
 * Created by Administrator on 2016/6/23.
 */
var React = require("react");
var FavorAction = require("scripts/pc/action/FavorAction");
var Store = require("scripts/pc/store/FavorStore");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var LoginCpn = React.createClass({
    /**��ʼ��state*/
    getInitialState: function() {
        return Store.getInitStore();
    },
    /**װ��DOM��ɻص�*/
    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },
    /**ж��DOM֮ǰ�ص�*/
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    /**��Ⱦ*/
    render: function() {
        return (
            <div>
                <div className="contentRight">
                    <div className="contentRight-1">
                    </div>
                    <div className="contentRight-2">
                        <div style={{marginLeft: 15+"px"}}>
                            <span className="on" onClick={this.goodCollect} id="goodCollect">商品收藏</span>
                            <span onClick={this.nameCollect} id="nameCollect">品牌收藏</span>
                            <span>文章收藏</span>
                        </div>
                    </div>
                    <div className="contentRight-3"></div>
                    <div className="contentRight-4">
                        <div className="contentRight-4-1">
                <span>
                    我订阅的降价通知(0/5)
                </span>
                <span style={{float:"right"}}>
                    <input type="checkbox"/>
                        降价商品
                        <input type="checkbox"/>
                            参加活动的商品
                        </span>
                        </div>
                        <div className="contentRight-4-2">
                            <span style={{marginLeft: 50+"px"}}>商品信息</span>
                            <span style={{marginLeft: 340+"px"}}>单价（元）</span>
                            <span style={{marginLeft: 195+"px"}}>操作</span>
                        </div>
                        <p style={{textAlign: "center",lineHeight: 410+"px",fontSize: 12+"px"}}>你没有收藏商品!</p>
                    </div>
                    <div className="contentRight-5">
                        <div className="contentRigh5-1">
                            <input type="checkbox" style={{verticalAlign: "middle"}}/>
                <span>
                    <a href="#">全选</a>
                    <a href="#">删除</a>
                </span>
                        </div>
                        <p>共0条结果 , 0/0页</p>
                    </div>
                </div>
                <div className="serbice">
                    <div className="serbiceImgs"></div>
                    <span>客服电话 : 400-889-9646 08:00-22:30(周一至周日)</span>
                </div>
            </div>

        );
    },
    //��¼����
    goodCollect: function() {
        document.getElementById("nameCollect").setAttribute("class","off");
        document.getElementById("goodCollect").setAttribute("class","on");
        FavorAction.goodCollect();
    },
    nameCollect: function() {
        document.getElementById("nameCollect").setAttribute("class","on");
        document.getElementById("goodCollect").setAttribute("class","off");
        FavorAction.nameCollect();
    },
    /**ί�и�store�Ļص�*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = LoginCpn;