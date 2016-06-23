/**
 * Created by Administrator on 2016/6/21.
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
                <div className="content">
                    <div className="contentTop">
                        <div className="contentTop-1">
                        </div>
                        <div className="contentTop-2">
                            <a href="#">YOUHUO!有货首页{">"}</a>
                            <a href="#">个人中心{">"}</a>
                            <a href="#" style={{fontWeight: 600}}>我的收藏</a>
                        </div>
                    </div>
                    <div className="contentLeft">
                        <div className="contentLeft-1"></div>
                        <div className="contentLeft-2">
                            <div className="contentLeft-2-1"></div>
                        </div>
                        <div className="contentLeft-3">
                            <div className="contentLeft-3-1">
                                <div className="contentLeft3-1-xb"></div>
                                <span>交易管理</span>
                            </div>
                            <ul>
                                <Link to="/changeOrder"><li>我的订单</li></Link>
                                <Link to="/changeCollect"><li>我的收藏</li></Link>
                                <li>我的YOHO币</li>
                                <li>我的红包</li>
                                <li>我的优惠卷</li>
                                <li style={{borderBottom :1 + "px" +"solid"+"#dcdcdc" }}>我的SVIP</li>
                            </ul>
                        </div>

                        <div className="contentLeft-3">
                            <div className="contentLeft-3-1">
                                <div className="contentLeft3-1-xb"></div>
                                <span>服务中心</span>
                            </div>
                            <ul>
                                <li>我的退货/换货</li>
                                <li>我的咨询</li>
                                <li>我的评论</li>
                                <li>我的投诉</li>
                                <li>我的信息</li>
                                <li style={{borderBottom:1 +"px"+ "solid"+"#dcdcdc" }}>在线客服</li>
                            </ul>
                        </div>

                        <div className="contentLeft-3">
                            <div className="contentLeft-3-1">
                                <div className="contentLeft3-1-xb"></div>
                                <span>个人信息管理</span>
                            </div>
                            <ul>
                                <li>编辑个人资料</li>
                                <li>账号安全</li>
                                <li>地址管理</li>
                                <li>兑换礼品卡</li>
                            </ul>
                        </div>
                    </div>
                    {this.props.children}
                </div>
        );
    },
    //��¼����
    Login: function() {
        FavorAction.Login(this.refs.username.value, this.refs.password.value);
    },
    /**ί�и�store�Ļص�*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = LoginCpn;