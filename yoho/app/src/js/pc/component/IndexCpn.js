/**
 * Created by Administrator on 2016/6/21.
 */
{/**这一块是头，不用管，拷过去*/}
var React = require("react");
var ReactRouter = require("react-router");
var Store = require("scripts/pc/store/IndexStore");
var Link = ReactRouter.Link;
var $ = require("jquery");
var IndexAction = require("scripts/pc/action/IndexAction");


var IndexCpn = React.createClass({
    getInitialState: function() {
        return Store.getInitStore();
    },
    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
        return Store.getInitStoreLunbo();  //轮播
    },
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    render:function(){
        return(
            <div>
                <div className="header">
                    <div className="top">
                        <div className="on">
                            <div className="onLeft">
                                <img src="../imgs/indeximg/品牌所有商品_03.gif" alt=""/>
                                    <span id="kaka">YOHO! 有货</span>
                            </div>
                            <div className="on_right">
                                <ul>
                                    <li><p>Hi~</p><a href="#" style={{color: "black"}}>[请登录]</a></li>
                                    <li><a href="#" style={{color: "black", paddingTop: 0 + "px" ,paddingBottom:0 + "px",paddingRight:10 + "px",paddingLeft:10 + "px"}}>[免费注册]</a><span>|</span></li>
                                    <li><a href="#">MY有货</a><span>|</span></li>
                                    <li><a href="#"><img src="../imgs/indeximg/品牌所有商品_05.gif" alt=""/><p>&nbsp;我的订单</p></a><span>|</span></li>
                                    <li><a href="#"><img src="../imgs/indeximg/品牌所有商品_07.gif" alt=""/><p>&nbsp;我的收藏</p></a><span>|</span></li>
                                    <li><a href="#"><img src="../imgs/indeximg/品牌所有商品_09.gif" alt=""/><p>&nbsp;消息</p></a><span>|</span></li>
                                    <li><a href="#"><img src="../imgs/indeximg/品牌所有商品_11.gif" alt=""/><p>&nbsp;手机版</p></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="navBox">
                            <div className="channel">
                                <Link to="/content"><div className="boys">
                                    <p>男生</p>
                                    <span>BOYS</span>
                                </div></Link>
                                <Link to="/content"><div className="girls">
                                    <p>女生</p>
                                    <span>GIRLS</span>
                                </div></Link>
                                <div className="girls">
                                    <p>潮童</p>
                                    <span>KIDS</span>
                                </div>
                                <div className="girls">
                                    <p>创意生活</p>
                                    <span>FILE STYLE</span>
                                </div>
                            </div>
                        </div>
                     
                        <div className="logo"><img src="../imgs/indeximg/logo_e.png" alt=""/></div>
                       
                        <div className="input">
                            <input type="text"/>
                            <span></span>
                            <div>图片</div>
                        </div>
                    </div>
                    <div className="navOne">
                        <div className="navigatorBars">
                            <ul>
                                <li><a href="#">新品到着</a></li>
                                <li><a href="#">品牌一览</a></li>
                                <li><a href="#">服饰</a></li>
                                <li><a href="#">鞋履</a></li>
                                <li><a href="#">包袋</a></li>
                                <li><a href="#">配饰·其他</a></li>
                                <li><a href="#">领卷中心</a></li>
                                <li><a href="#">逛</a></li>
                                <li><a href="#">SALE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    {this.props.children}
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
                            <ul style={{marginRight: 0 + "px", float: "right"}}>
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
    /**ί�и�store�Ļص�*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});
module.exports = IndexCpn;