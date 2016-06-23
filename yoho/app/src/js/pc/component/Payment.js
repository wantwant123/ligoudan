/**
 * Created by Administrator on 2016/6/22.
 */
{/**这一块是头，不用管，拷过去*/}
var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var $ = require("jquery");
var PaymentAction = require("scripts/pc/action/PaymentAction");


var PaymentCpn = React.createClass({
    render:function(){
        return(
            <div>
                <div className="simple-header">
                    <div className="header-inner">
                        <h1 className="logo">
                            <a href="#">
                                <img src="../imgs/order/logo_e.png" alt=""/>
                                </a>
                            </h1>
                            <ul className="header-tool">
                                <li><span>Hi~</span><a href="#">151****4171</a>&nbsp;<a href="#">[退出]</a></li>
                                <li className="tool-options">
                                    <span><a href="#">MY有货</a></span>
                                    <div className="tool-select">
                                        <a href="#">我的收藏</a>
                                        <br/>
                                        <a href="#">优惠券</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">订单中心</a>
                                </li>
                                <li>
                                    <a href="#">帮助中心</a>
                                </li>
                                <li>
                                    <span><strong>400-8899-646</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-ensure-page">
                        <div className="order-title">
                            <div className="order-title-left">
                                <img src="../imgs/order/订单3_03.png" alt=""/>
                                <img src="../imgs/order/订单3_05.png" alt=""/>
                            </div>
                            <div className="order-title-right">
                                <div className="act"></div>
                                <div className="act-circle1">
                                    <div className="border-l"></div>
                                    <span>查看购物车</span>
                                </div>
                                <div className="act-circle2">
                                    <div className="border-m"></div>
                                    <span>填写订单</span>
                                </div>
                                <div className="act-circle3">
                                    <div className="border-r"></div>
                                    <span>付款，完成购买</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main">
                        <div className="main-explain">
                            <p className="first">您的订单已成功，现在就去付款吧~</p>
                            <p className="main-affirm">您的订单号：<span><strong>1605323134</strong></span>应付金额：<span><strong>329.00</strong></span>
                                元&nbsp;支付方式：<i>在线支付</i>&nbsp;&nbsp;送货时间:<i>只工作日送（双休日，节假日不用送)</i></p>
                            <br/>
                            <p className="explain">186****2389,如果2小时内宁无法完成付款，系统会将您的订单取消。</p>
                        </div>
                        <div className="payment-method">
                            <div className="payment-method-span">使用：</div>
                            <div className="payment-images"><img src="../imgs/order/zhifubao.png" alt="#"/></div>
                            <div className="tab-box">
                                <ul className="tabs">
                                    <li className="thistab"><a href="#" tab="tab1">支付宝等平台</a></li>
                                    <li className="thistab-money"><a href="#" tab="tab2">使用银行卡</a></li>
                                </ul>
                                <ul className="tab-conbox">
                                    <li className="tab-con1">
                                        <div className="count">
                                            <div className="mode">
                                                <div className="choosed-tag"></div>
                                                <img src="../imgs/order/zhifubao.png" alt="支付宝" id="2_platform"/>
                                                </div>
                                                <div className="mode">
                                                    <div className="choosed-tag"></div>
                                                    <img src="../imgs/order/caifutong.png" alt="支付宝" />
                                                    </div>
                                                    <div className="mode">
                                                        <div className="choosed-tag"></div>
                                                        <img src="../imgs/order/shengfutong.png" alt="支付宝" />
                                                        </div>
                                                        <div className="mode choose-type">
                                                            <div  className="choosed-tag"></div>
                                                            <img src="../imgs/order/tonglianzhifu.png" alt="支付宝"/>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="tab-con1">
                                                        <div className="count">
                                                            <div className="mode">
                                                                <div className="choosed-tag"></div>
                                                                <img src="../imgs/order/wangyinzaixian.png" alt="支付宝"/>
                                                                </div>
                                                                <div className="mode">
                                                                    <div className="choosed-tag"></div>
                                                                    <img src="../imgs/order/weixinzhifu.png" alt="支付宝" />
                                                                    </div>
                                                                    <div className="mode">
                                                                        <div className="choosed-tag"></div>
                                                                        <img src="../imgs/order/zhifubao.png" alt="支付宝" />
                                                                        </div>
                                                                        <div className="mode choose-type">
                                                                            <div  className="choosed-tag"></div>
                                                                            <img src="../imgs/order/zhifubao.png" alt="支付宝" />
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="tab-con" style={{display:"none"}}>
                                                                        <div className="count">
                                                                            <div className="mode">
                                                                                <div className="choosed-tag"></div>
                                                                                <img src="../imgs/order/ABC.gif" alt="支付宝" />
                                                                                </div>
                                                                                <div className="mode">
                                                                                    <div className="choosed-tag"></div>
                                                                                    <img src="../imgs/order/BJRCB.gif" alt="支付宝" />
                                                                                    </div>
                                                                                    <div className="mode">
                                                                                        <div className="choosed-tag"></div>
                                                                                        <img src="../imgs/order/BOC.gif" alt="支付宝"/>
                                                                                        </div>
                                                                                        <div className="mode choose-type">
                                                                                            <div  className="choosed-tag"></div>
                                                                                            <img src="../imgs/order/CCB.gif" alt="支付宝" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="tab-con" style={{display:"none"}}>
                                                                                        <div className="count">
                                                                                            <div className="mode">
                                                                                                <div className="choosed-tag"></div>
                                                                                                <img src="../imgs/order/CEB.gif" alt="支付宝" />
                                                                                                </div>
                                                                                                <div className="mode">
                                                                                                    <div className="choosed-tag"></div>
                                                                                                    <img src="../imgs/order/CIB.gif" alt="支付宝" />
                                                                                                    </div>
                                                                                                    <div className="mode">
                                                                                                        <div className="choosed-tag"></div>
                                                                                                        <img src="../imgs/order/CITIC.gif" alt="支付宝" />
                                                                                                        </div>
                                                                                                        <div className="mode choose-type">
                                                                                                            <div  className="choosed-tag"></div>
                                                                                                            <img src="../imgs/order/CMB.gif" alt="支付宝" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                    <li className="tab-con" style={{display:"none"}}>
                                                                                                        <div className="count">
                                                                                                            <div className="mode">
                                                                                                                <div className="choosed-tag"></div>
                                                                                                                <img src="../imgs/order/CMBC.gif" alt="支付宝" />
                                                                                                                </div>
                                                                                                                <div className="mode">
                                                                                                                    <div className="choosed-tag"></div>
                                                                                                                    <img src="../imgs/order/COMM.gif" alt="支付宝" />
                                                                                                                    </div>
                                                                                                                    <div className="mode">
                                                                                                                        <div className="choosed-tag"></div>
                                                                                                                        <img src="../imgs/order/FDB.gif" alt="支付宝" />
                                                                                                                        </div>
                                                                                                                        <div className="mode choose-type">
                                                                                                                            <div  className="choosed-tag"></div>
                                                                                                                            <img src="../imgs/order/HZCBB2C.gif" alt="支付宝" />
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </li>
                                                                                                                    <li className="tab-con" style={{display:"none"}}>
                                                                                                                        <div className="count">
                                                                                                                            <div className="mode">
                                                                                                                                <div className="choosed-tag"></div>
                                                                                                                                <img src="../imgs/order/ICBC.gif" alt="支付宝" />
                                                                                                                                </div>
                                                                                                                                <div className="mode">
                                                                                                                                    <div className="choosed-tag"></div>
                                                                                                                                    <img src="../imgs/order/isc2.png" alt="支付宝" />
                                                                                                                                    </div>
                                                                                                                                    <div className="mode">
                                                                                                                                        <div className="choosed-tag"></div>
                                                                                                                                        <img src="../imgs/order/NBBANK.gif" alt="支付宝" />
                                                                                                                                        </div>
                                                                                                                                        <div className="mode choose-type">
                                                                                                                                            <div  className="choosed-tag"></div>
                                                                                                                                            <img src="../imgs/order/PSBC.gif" alt="支付宝" />
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                    <li className="tab-con" style={{display:"none"}}>
                                                                                                                                        <div className="count">
                                                                                                                                            <div className="mode">
                                                                                                                                                <div className="choosed-tag"></div>
                                                                                                                                                <img src="../imgs/order/SDB.gif" alt="支付宝" />
                                                                                                                                                </div>
                                                                                                                                                <div className="mode">
                                                                                                                                                    <div className="choosed-tag"></div>
                                                                                                                                                    <img src="../imgs/order/SHBANK.gif" alt="支付宝" />
                                                                                                                                                    </div>
                                                                                                                                                    <div className="mode">
                                                                                                                                                        <div className="choosed-tag"></div>
                                                                                                                                                        <img src="../imgs/order/zhifubao.png" alt="支付宝" />
                                                                                                                                                        </div>
                                                                                                                                                        <div className="mode choose-type">
                                                                                                                                                            <div  className="choosed-tag"></div>
                                                                                                                                                            <img src="../imgs/order/zhifubao.png" alt="支付宝" />
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </li>
                                                                                                                                                    <li className="tab-con" style={{display:"none"}}>
                                                                                                                                                        <div className="count">
                                                                                                                                                            <div className="mode">
                                                                                                                                                                <div className="choosed-tag"></div>
                                                                                                                                                                <img src="../imgs/order/FDB.gif" alt="支付宝" />
                                                                                                                                                                </div>
                                                                                                                                                                <div className="mode">
                                                                                                                                                                    <div className="choosed-tag"></div>
                                                                                                                                                                    <img src="../imgs/order/HZCBB2C.gif" alt="支付宝" />
                                                                                                                                                                    </div>
                                                                                                                                                                    <div className="mode">
                                                                                                                                                                        <div className="choosed-tag"></div>
                                                                                                                                                                        <img src="../imgs/order/isc2.png" alt="支付宝"/>
                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="mode choose-type">
                                                                                                                                                                            <div  className="choosed-tag"></div>
                                                                                                                                                                            <img src="../imgs/order/ICBC.gif" alt="支付宝" />
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </li>

                                                                                                                                                                    <div className="tab-bottom"></div>
                                                                                                                                                                </ul>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                        <div className="new-user-btn">
                                                                                                                                                            <a href="#" className="save-btn">前往支付宝</a>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                    <div className="footer">

                                                                                                                                                        <div className="footerContent">

                                                                                                                                                            <div className="top">
                                                                                                                                                                <div className="left"  style={{marginRight: 45 + "px"}}>
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
                                                                                                                                                                <ul style={{marginRight: 0 + "PX", float: "right"}}>
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
    }
});
module.exports = PaymentCpn;