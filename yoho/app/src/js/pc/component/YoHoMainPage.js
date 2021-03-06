/**
 * Created by Administrator on 2016/6/23.
 */
var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var $ = require("jquery");
var YoHoMainAction = require("scripts/pc/action/YoHoMainAction");
var index = 1;
var timer;

var YoHoPageCpn = React.createClass({
    render:function(){
        return(
            <div>

                <div className="header">

                    <div className="top">
                        <div className="on">

                            <div className="onLeft">
                                <img src="../imgs/YoHoPageImg/header-03.gif" alt=""/>
                                    <span>YOHO! 有货</span>
                                </div>

                                <div className="on_right">
                                    <ul>
                                        <li><p>Hi~</p><a href="#" style={{color: "black"}}>[请登录]</a></li>
                                        <li><a href="#" style={{color: "black", paddingTop: 0 + "px",paddingBottom:0 + "px",paddingLeft: 10 + "px",paddingRight:10 +"px"}}>[免费注册]</a><span>|</span></li>
                                        <li><a href="#">MY有货</a><span>|</span></li>
                                        <li><a href="#"><img src="../imgs/YoHoPageImg/header_05.gif" alt=""/><p>&nbsp;我的订单</p></a><span>|</span></li>
                                            <li><a href="#"><img src="../imgs/YoHoPageImg/header_07.gif" alt=""/><p>&nbsp;我的收藏</p></a><span>|</span></li>
                                                <li><a href="#"><img src="../imgs/YoHoPageImg/header_09.gif" alt=""/><p>&nbsp;消息</p></a><span>|</span></li>
                                                    <li><a href="#"><img src="../imgs/YoHoPageImg/header_11 (1).gif" alt=""/><p>&nbsp;手机版</p></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="nav">
                                            <div className="navBox">

                                                <div className="channel">
                                                    <div className="boys">
                                                        <p>男生</p>
                                                        <span>BOYS</span>
                                                    </div>
                                                    <div className="girls">
                                                        <p>女生</p>
                                                        <span>GIRLS</span>
                                                    </div>
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

                                            <div className="logo"><img src="../imgs/YoHoPageImg/logo_e.png" alt=""/></div>

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



                                    <div className="yohoContent">
                                        <div className="lunBo" id="father">
                                            <div className="photoBig" id="son"><img src="../imgs/YoHoPageImg/01e0b5fb9742ee804ba53484619ba621a4.jpg" alt=""/></div>
                                            <div className="photoSmall" id="buts">
                                                <div index="1"><img src="../imgs/YoHoPageImg/01e0b5fb9742ee804ba53484619ba621a4.jpg" alt=""/></div>
                                                <div index="2"><img src="../imgs/YoHoPageImg/01b5a1590c65716a4ba6977cccfe15cc04.jpg" alt=""/></div>
                                                <div index="3"><img src="../imgs/YoHoPageImg/01e57bf67bc79e19a060083a262b95788c.jpg" alt=""/></div>
                                                <div index="4"><img src="../imgs/YoHoPageImg/01e28966272ca7b25d30d82200614fad5f.jpg" alt=""/></div>
                                                <div index="5"><img src="../imgs/YoHoPageImg/018e23ad577c209e7648c1bda9b8d17df2.jpg" alt=""/></div>
                                                <div index="6"><img src="../imgs/YoHoPageImg/01c0c5df06debbd65a6bceac2cdd5db655.jpg" alt=""/></div>
                                                <div index="7"><img src="../imgs/YoHoPageImg/01144e91e589c4537c783f8981833ce3b7.jpg" alt=""/></div>
                                                <div index="8" style={{marginRight: -10 + "px"}}><img src="../imgs/YoHoPageImg/01609ef426aea2121342af63b835683a89.jpg" alt=""/></div>
                                            </div>
                                        </div>


                                        <div className="popularity">
                                            <div className="title">
                                                <p>人气单品</p>
                                            </div>
                                            <div className="photo">
                                                <div className="photoTop">
                                                    <div><img src="../imgs/YoHoPageImg/01b70cf9aba08f93be6499174e733792a6.jpg" alt=""/></div>
                                                    <div style={{width: 378 + "px", height: 248 + "px"}}><img src="../imgs/YoHoPageImg/014d0b866c59b4cab13f849185d98c4dbb.jpg" alt=""/></div>
                                                    <div><img src="../imgs/YoHoPageImg/01c93ca68263568913f103a8f4e8aa712f.jpg" alt=""/></div>
                                                    <div><img src="../imgs/YoHoPageImg/01d709f2b251fea326eccd3bf0b9769b05.jpg" alt=""/></div>
                                                    <div style={{marginRight: -8 + "px"}}><img src="../imgs/YoHoPageImg/01fd79c337d5bb614dfc939ecafacb796f.jpg" alt=""/></div>
                                                </div>
                                                <div className="photoTop">
                                                    <div><img src="../imgs/YoHoPageImg/018504a691e26461a265669b4b856becc6.jpg" alt=""/></div>
                                                    <div><img src="../imgs/YoHoPageImg/01540b0d2af83e7e0e31e45aa3c63d060b.jpg" alt=""/></div>
                                                    <div><img src="../imgs/YoHoPageImg/0172169889638e4dc015266dde93b77064.jpg" alt=""/></div>
                                                    <div><img src="../imgs/YoHoPageImg/01b70cf9aba08f93be6499174e733792a6.jpg" alt=""/></div>
                                                    <div style={{width: 378 + "px", height: 248 + "px", marginRight: -8 + "px"}}><img src="../imgs/YoHoPageImg/0101c349b786337edc13e28fb1dfdbf8be.jpg" alt=""/></div>
                                                </div>
                                                <div className="photoBottom"><img src="../imgs/YoHoPageImg/01dc282e974f7d8a0827e804f96a75c853.jpg" alt=""/></div>
                                            </div>
                                        </div>

                                        <div className="excellent">
                                            <div className="title">
                                                <p>优选品牌</p>
                                            </div>

                                            <div className="img-brand">
                                                <ul>
                                                    <li><img src="../imgs/YoHoPageImg/01d8cdc3405ce81b2027b3c80182c10b52.jpg" alt=""/></li>
                                                    <li><img src="../imgs/YoHoPageImg/01f949b92d430ce5ed2c61f8975c508045.jpg" alt=""/></li>
                                                    <li style={{marginRight: -10 + "px"}}><img src="../imgs/YoHoPageImg/0105a7b7a8e74b0f9d03f5842e9bbc4af4.jpg" alt=""/></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                            <div className="logos-20">
                                                9<a href="#"><img src="../imgs/YoHoPageImg/01da75df7afaa60303f8b72f246317845c.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/0155e5deb3f934e3386034d3a7d116612f.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/0102b16454be6c292ce374387b3ce46e71.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/01f0cf39c8c8d668516afe69e8465d9baf.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/01fc70e436d5eb092ff5606b94177ae689.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/010b8ccd9966cb11afdd60fab7e6fcd750.jpg" alt="" style={{marginRight: -8 + "px"}}/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/011cd6b9c9e976c4aff888f0c90b2cb391.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/0167f4d09c2781d8c8eccbd4e8d5d688af.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/01829e44ed24adbdb6865be709bfa06e21.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/01c19280bf3a442b2f3825778467b71e7d.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/0102b16454be6c292ce374387b3ce46e71.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/01f0cf39c8c8d668516afe69e8465d9baf.jpg" alt="" style={{marginRight: -8 + "px"}}/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/01fc70e436d5eb092ff5606b94177ae689.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/010b8ccd9966cb11afdd60fab7e6fcd750.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/011cd6b9c9e976c4aff888f0c90b2cb391.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/0167f4d09c2781d8c8eccbd4e8d5d688af.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/01829e44ed24adbdb6865be709bfa06e21.jpg" alt=""/></a>
                                                <a href="#"><img src="../imgs/YoHoPageImg/01c19280bf3a442b2f3825778467b71e7d.jpg" alt="" style={{marginRight: -8 + "px"}}/></a>
                                            </div>
                                        </div>

                                        <div className="new">
                                            <div className="title">
                                                <p>最新速报</p>
                                            </div>
                                            <div className="photo">
                                                <div className="top">
                                                    <div className="left">图片</div>
                                                    <div className="center">
                                                        <div className="one">
                                                            <div>图片</div>
                                                            <div style={{marginTop: 0 + "PX",marginBotom:0 + "px",marginLeft: 8 + "px",marginRight:8 + "px"}}>图片</div>
                                                            <div>图片</div>
                                                        </div>
                                                        <div className="two">
                                                            <div>图片</div>
                                                            <div  style={{marginTop: 0 + "PX",marginBotom:0 + "px",marginLeft: 8 + "px",marginRight:8 + "px"}}>图片</div>
                                                            <div>图片</div>
                                                        </div>
                                                    </div>
                                                    <div className="right">图片</div>
                                                </div>
                                                <div className="bottom">图片</div>
                                            </div>
                                        </div>
                                        <div className="damp">
                                            <div className="title">
                                                <p>潮流上装</p>
                                            </div>
                                            <div className="photo">
                                                <div className="top">
                                                    <div className="left">
                                                        <div className="one">图片</div>
                                                        <div className="two">图片</div>
                                                        <div className="three">
                                                            <p>
                                                                <a href="#">T恤</a>
                                                                <a href="#">衬衫</a><br/>
                                                                <a href="#">卫衣</a>
                                                                <a href="#">POLO</a><br/>
                                                                <a href="#">西装</a>
                                                                <a href="#">背心</a><br/>
                                                                <a href="#">简约有型</a>
                                                                <a href="#">运动先锋</a><br/>
                                                                <a href="#">街头原宿</a>
                                                                <a href="#">英伦学院</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="TP">
                                                            <div style={{width: 378 + "px"}}>图片</div>
                                                            <div>图片</div>
                                                            <div>图片</div>
                                                            <div style={{marginRight: -8 + "px"}}>图片</div>
                                                        </div>
                                                        <div className="TP" style={{marginTop: 8 + "px"}}>
                                                            <div style={{width: 378 + "px"}}>图片</div>
                                                            <div>图片</div>
                                                            <div>图片</div>
                                                            <div style={{marginRight: -8 + "px"}}>图片</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div>图片</div>
                                                    <div>图片</div>
                                                    <div>图片</div>
                                                    <div>图片</div>
                                                    <div style={{marginRight: -10 + "px"}}>图片</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="putaway">
                                            <div className="title">
                                                <p>最新上架</p>
                                            </div>

                                            <div className="photo">
                                                <div className="tag"></div>
                                                <div className="left">
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                                <div className="left">
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                                <div className="left">
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                                <div className="left">
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                                <div className="left" style={{marginRight: -10 + "px"}}>
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                            </div>
                                            <div className="photo">
                                                <div className="tag"></div>
                                                <div className="left">
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                                <div className="left">
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                                <div className="left">
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                                <div className="left">
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                                <div className="left" style={{marginRight: -10 + "px"}}>
                                                    <div>图片</div>
                                                    <p>IVYBOI×INTREPID 休闲洞洞鞋 宝蓝色</p>
                                                    <span>¥99.00</span>
                                                </div>
                                            </div>
                                            <div className="loading">
                                                <a href="#">Loading...</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="feedback">
                                        <div className="content">
                                            <div className="left">
                                                <div className="one">
                                                    <h2>有货SERVICES</h2>
                                                    <div>

                                                        <p>YOHO!有货</p>
                                                    </div>
                                                    <div>

                                                        <p>微信</p>
                                                    </div>
                                                    <div style={{marginRight: -10 + "px"}}>

                                                        <p>微博</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center">
                                                <div className="one">
                                                    <h2>意见反馈</h2>
                                                    <p>你喜欢有货的新版吗！</p>
                                                    <div>
                                                        <span><input type="checkbox"/> 非常喜欢</span>
                                                        <span><input type="checkbox"/> 喜欢</span>
                                                        <span><input type="checkbox"/> 一般般</span>
                                                        <span><input type="checkbox"/> 不喜欢</span>
                                                        <span><input type="checkbox"/> 非常不喜欢</span>
                                                    </div>
                                                    <a href="#">提交</a>
                                                </div>
                                            </div>
                                            <div className="right" style={{marginRight: -20 + "px"}}>
                                                <div className="one">
                                                    <h2>更多YOHO!产品</h2>
                                                    <div>图片</div>
                                                    <div>图片</div>
                                                    <div style={{marginRight: -12 + "px"}}>图片</div>
                                                </div>

                                            </div>
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
module.exports = YoHoPageCpn;