var React = require("react");
var LoginAction = require("scripts/pc/action/LoginAction");
var Store = require("scripts/pc/store/LoginStore");

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
                <header>
                    <div className="header-center">
                        <div className="header-center-left">
                            <img src="../imgs/logo_e.png" alt=""/>
                        </div>
                        <div className="header-center-right">
                            <ul>
                                <li>Hi~ <a href="#">[请登录]</a><a href="#"> [免费注册]</a></li>
                                <li>MY有货<a href="#">▼</a></li>
                                <li>订单中心</li>
                                <li>帮助中心</li>
                                <li><img src="../imgs/订单1_03.gif" alt=""/>400-8899-646</li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-border">
                    </div>
                </header>

                <div className="contentBox">
                    <div className="content">
                        <div className="contentLeft">
                        </div>
                        <div className="contentRight">
                            <p style={{fontSize: 18+"px"}}>会员登录 <a href="#">中国 +86</a></p>
                            <div className="contentRightjiao"></div>
                            <div className="loginBar">
                                <input type="text" placeholder="邮箱/手机号" ref="username"/>
                            </div>
                            <div className="passwordBar">
                                <input type="password" placeholder="密码" ref="password"/>
                            </div>
                            <div className="loginBut">
                                <button onClick={this.Login}>登 录</button>
                            </div>
                            <div className="checkBox">
                                <input type="checkbox"/><span> 记住登录状态</span>
                                <a href="#" style={{marginLeft: 40+"px",color: "#B9B9B9"}}>忘记密码? | </a><a href="#" style={{color: "red"}}>快速注册</a>
                            </div>
                            <div className="xb">
                                <div className="xbA">

                                </div>
                                <div className="xbB">

                                </div>
                                <div className="xbC">

                                </div>
                                <div className="xbD">

                                </div>
                                <div className="xbE">

                                </div>
                                <div className="xbF">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="footerContent">
                        <div className="top">
                            <div className="left">
                                <img src="../imgs/YoHoFooterImg/footer-imgs_03.gif" alt=""/>
                                <span className="red">100%</span>
                                <span className="rgbf">品牌正品</span>
                            </div>
                            <div className="left">
                                <img src="../imgs/YoHoFooterImg/footer-imgs_05.gif" alt=""/>
                                <span className="red">7天</span>
                                <span className="rgbf">无理由退换货</span>
                            </div>
                            <div className="left">
                                <a href="#">
                                    <img src="../imgs/YoHoFooterImg/footer-imgs_07.gif" alt=""/>
                                    <span className="red">便捷</span>
                                    <span className="rgbf">在线服务</span>
                                </a>
                            </div>
                            <div className="right">
                                <input type="text" placeholder="订阅我们的邮件" value=""/>
                                <a href="#"><img src="../imgs/YoHoFooterImg/footer-letter.gif" alt=""/></a>
                            </div>
                        </div>
                        <div className="center">
                            <ul>
                                <li>新手指南</li>
                                <li><a href="#">注册登录</a></li>
                                <li><a href="#">选购商品</a></li>
                                <li><a href="#">订单支付</a></li>
                                <li><a href="#">收货退款</a></li>
                            </ul>
                            <ul>
                                <li>会员中心</li>
                                <li><a href="#">YOHO币</a></li>
                                <li><a href="#">会员制度</a></li>
                                <li><a href="#">账户管理</a></li>
                                <li><a href="#">密码管理</a></li>
                            </ul>
                            <ul>
                                <li>购物指南</li>
                                <li><a href="#">全球购专区</a></li>
                                <li><a href="#">尺码选择</a></li>
                                <li><a href="#">发票</a></li>
                                <li><a href="#">商品咨询</a></li>
                            </ul>
                            <ul>
                                <li>支付方式</li>
                                <li><a href="#">在线支付</a></li>
                                <li><a href="#">货到付款</a></li>
                                <li><a href="#">优惠券</a></li>
                                <li><a href="#">YOHO币支付</a></li>
                            </ul>
                            <ul>
                                <li>配送方式</li>
                                <li><a href="#">配送时间</a></li>
                                <li><a href="#">配送范围</a></li>
                                <li><a href="#">顺丰速运</a></li>
                                <li><a href="#">商品验收与签收</a></li>
                            </ul>
                            <ul>
                                <li>售后服务</li>
                                <li><a href="#">退换货政策</a></li>
                                <li><a href="#">退换货流程</a></li>
                                <li><a href="#">退款方式与时效</a></li>
                                <li><a href="#">投诉与建议</a></li>
                            </ul>
                            <ul>
                                <li>APP常见问题</li>
                                <li><a href="#">IPhone版</a></li>
                                <li><a href="#">Android版</a></li>
                                <li><a href="#">wap版</a></li>
                                <li><a href="#">IPAD版</a></li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <div className="isc">
                                <img src="../imgs/YoHoFooterImg/credit-flag3.png" alt=""/>
                                <img src="../imgs/YoHoFooterImg/isc2.png" alt=""/>
                            </div>
                            <div className="bottomRight">
                                <div className="nav">
                                    <a href="#">返回首页</a><span>|</span>
                                    <a href="#">YOHO!有货</a><span>|</span>
                                    <a href="#">新力传媒</a><span>|</span>
                                    <a href="#">联系我们</a><span>|</span>
                                    <a href="#">商家入驻</a><span>|</span>
                                    <a href="#">隐私条款</a><span>|</span>
                                    <a href="#">友情链接</a>
                                </div>
                                <p>CopyRight © 2007-2016 南京新与力文化传播有限公司
                                    <a href="#">苏ICP备09011225号</a>
                                    NewPower Co. 版权所有 经营许可证编号：苏B2-20120395</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    //��¼����
    Login: function() {
        LoginAction.Login(this.refs.username.value, this.refs.password.value);
    },
    /**ί�и�store�Ļص�*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = LoginCpn;