/**
 * Created by Administrator on 2016/6/22.
 */
{/**这一块是头，不用管，拷过去*/}
var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var $ = require("jquery");
var ShopCarAction = require("scripts/pc/action/ShopCarAction");


var ShopCarCpn = React.createClass({
    render:function(){
        return(
            <div>
                <div className=" header">
                    <div className="header-center">
                        <div className="header-center-left">
                            <img src="../imgs/buycarimg/logo_e.png" alt=""/>
                        </div>
                        <div className="header-center-right">
                            <ul>
                                <li>Hi~186****2389<a href="#">[退出]</a></li>
                                <li>MY有货</li>
                                <li>订单中心</li>
                                <li>帮助中心</li>
                                <li><img src="../imgs/buycarimg/订单1_03.gif" style={{verticalAlign: "middle"}} alt=""/>400-8899-646</li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-border">
                    </div>
                </div>
                <div className="container">
                    <div className="order-title">
                        <div className="order-title-left">
                            <img src="../imgs/buycarimg/购物车1_03.gif" alt=""/>
                            <img src="../imgs/buycarimg/购物车2_03.gif" alt=""/>
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
                    <div className="container-middle">
                        <p className="container-middle-p">
                            <span style={{fontWeight: 600}}> &nbsp;温馨提示：</span>
                            <span style={{color: "#666666"}}>1.选购单中的商品不保留库存，请及时结算。2.商品的价格、相关活动信息及库存以订单提交时为准。&nbsp;&nbsp;</span>
                            <a href="#"><img src="../imgs/buycarimg/购物车3_03.gif" style={{verticalAlign: "middle",marginTop: -2 + "px"}} alt=""/></a>
                        </p>
                        <div className="middle-first">
                            <div className="middle-first-top">
                                <p className="middle-first-top-p1">商品信息</p>
                                <p className="middle-first-top-p2">单价（元）</p>
                                <p className="middle-first-top-p3">返YOHO币</p>
                                <p className="middle-first-top-p4">数量</p>
                                <p className="middle-first-top-p5">小计（元）</p>
                                <p className="middle-first-top-p6">操作</p>
                            </div>
                            <div className="middle-first-mid">
                                <input type="checkbox" style={{verticalAlign: "middle",marginTop: -2 + "px"}}/>普通商品（4）
                            </div>
                            <div className="middle-first-foot">
                                <div className="middle-first-foot-d1">
                                    <div className="middle-first-foot-pl">
                                        <input type="checkbox" style={{verticalAlign:"middle"}}/>
                                        <a className="pay-pro-icon" href="#">
                                            <img src="../imgs/buycarimg/02fc8ff033a659a830f63f8a97f84b38d0.jpg" style={{verticalAlign: "middle"}}/>
                                        </a>
                                    </div>
                                    <div className="middle-first-foot-pr">
                                        <a href="#"style={{color: "skyblue",textDecoration: "none"}}>Life·After Life 趣味字母印花短袖T恤</a>
                                        <br/>
                                        颜色：黑色 尺码：S
                                    </div>
                                </div>
                                <div className="middle-first-foot-d2">
                                    ￥329.00
                                </div>
                                <div className="middle-first-foot-d3">
                                    0个
                                </div>
                                <div className="middle-first-foot-d4">
                                    <div className="delete"><a href="#" style={{textDecoration: "none"}}>-</a></div>
                                    <div className="data"><span>1</span></div>
                                    <div className="add"><a href="#" style={{textDecoration: "none"}}>+</a></div>
                                </div>
                                <div className="middle-first-foot-d5">
                                    ￥329.00
                                </div>
                                <div className="middle-first-foot-d6">
                                    <button style={{marginTop: 30 + "px"}}>删除</button>
                                    <button>移入收藏</button>
                                </div>
                            </div>
                            <div className="middle-first-foot">
                                <div className="middle-first-foot-d1">
                                    <div className="middle-first-foot-pl">
                                        <input type="checkbox" style={{verticalAlign:"middle"}}/>
                                        <a className="pay-pro-icon" href="#">
                                            <img src="../imgs/buycarimg/02fc8ff033a659a830f63f8a97f84b38d0.jpg" style={{verticalAlign: "middle"}}/>
                                        </a>
                                    </div>
                                    <div className="middle-first-foot-pr">
                                        <a href="#"style={{color: "skyblue",textDecoration: "none"}}>Life·After Life 趣味字母印花短袖T恤</a>
                                        <br/>
                                        颜色：黑色 尺码：S
                                    </div>
                                </div>
                                <div className="middle-first-foot-d2">
                                    ￥329.00
                                </div>
                                <div className="middle-first-foot-d3">
                                    0个
                                </div>
                                <div className="middle-first-foot-d4">
                                    <div className="delete"><a href="#" style={{textDecoration: "none"}}>-</a></div>
                                    <div className="data"><span>1</span></div>
                                    <div className="add"><a href="#" style={{textDecoration: "none"}}>+</a></div>
                                </div>
                                <div className="middle-first-foot-d5">
                                    ￥329.00
                                </div>
                                <div className="middle-first-foot-d6">
                                    <button style={{marginTop: 30 + "px"}}>删除</button>
                                    <button>移入收藏</button>
                                </div>
                            </div>
                            <div className="middle-first-foot">
                                <div className="middle-first-foot-d1">
                                    <div className="middle-first-foot-pl">
                                        <input type="checkbox" style={{verticalAlign:"middle"}}/>
                                        <a className="pay-pro-icon" href="#">
                                            <img src="../imgs/buycarimg/02fc8ff033a659a830f63f8a97f84b38d0.jpg" style={{verticalAlign: "middle"}}/>
                                        </a>
                                    </div>
                                    <div className="middle-first-foot-pr">
                                        <a href="#"style={{color: "skyblue",textDecoration: "none"}}>Life·After Life 趣味字母印花短袖T恤</a>
                                        <br/>
                                        颜色：黑色 尺码：S
                                    </div>
                                </div>
                                <div className="middle-first-foot-d2">
                                    ￥329.00
                                </div>
                                <div className="middle-first-foot-d3">
                                    0个
                                </div>
                                <div className="middle-first-foot-d4">
                                    <div className="delete"><a href="#" style={{textDecoration: "none"}}>-</a></div>
                                    <div className="data"><span>1</span></div>
                                    <div className="add"><a href="#" style={{textDecoration: "none"}}>+</a></div>
                                </div>
                                <div className="middle-first-foot-d5">
                                    ￥329.00
                                </div>
                                <div className="middle-first-foot-d6">
                                    <button style={{marginTop: 30 + "px"}}>删除</button>
                                    <button>移入收藏</button>
                                </div>
                            </div>
                            <div className="middle-first-foot">
                                <div className="middle-first-foot-d1">
                                    <div className="middle-first-foot-pl">
                                        <input type="checkbox" style={{verticalAlign:"middle"}}/>
                                        <a className="pay-pro-icon" href="#">
                                            <img src="../imgs/buycarimg/02fc8ff033a659a830f63f8a97f84b38d0.jpg" style={{verticalAlign: "middle"}}/>
                                        </a>
                                    </div>
                                    <div className="middle-first-foot-pr">
                                        <a href="#"style={{color: "skyblue",textDecoration: "none"}}>Life·After Life 趣味字母印花短袖T恤</a>
                                        <br/>
                                        颜色：黑色 尺码：S
                                    </div>
                                </div>
                                <div className="middle-first-foot-d2">
                                    ￥329.00
                                </div>
                                <div className="middle-first-foot-d3">
                                    0个
                                </div>
                                <div className="middle-first-foot-d4">
                                    <div className="delete"><a href="#" style={{textDecoration: "none"}}>-</a></div>
                                    <div className="data"><span>1</span></div>
                                    <div className="add"><a href="#" style={{textDecoration: "none"}}>+</a></div>
                                    <p className="foot-p"><a href="#" style={{textDecoration:"none",color: "white",lineHeight: 20 + "px"}}>余量有限</a></p>
                                </div>
                                <div className="middle-first-foot-d5">
                                    ￥329.00
                                </div>
                                <div className="middle-first-foot-d6">
                                    <button style={{marginTop: 30 + "px"}}>删除</button>
                                    <button>移入收藏</button>
                                </div>
                            </div>
                        </div>
                        <div className="middle-second">
                            <div className="middle-second-l">
                                <input type="checkbox" style={{verticalAlign: "middle"}}/> 全选&nbsp;批量删除&nbsp;批量移入收藏夹
                            </div>
                            <div className="middle-second-r">
                                <p>商品总价（￥329.00）_活动（￥0.00）= 商品金额总计（￥329.00）</p>
                                <p>&nbsp;&nbsp;<img src="../imgs/buycarimg/订单7_03.gif" alt="" style={{verticalAlign: "middle"}}/>
                                    共返YOHO币：0个 商品总价（不含运费）：<span style={{color: "red",fontSize: 20 + "px",fontWeight: 600}}>￥329.00</span></p>
                            </div>
                        </div>
                        <p className="middle-third-l">◀再逛逛</p>
                        <p className="middle-third-r">去结算 ▶</p>
                        <div className="middle-lost">
                            <div className="middle-lost-top">
                                <div className="middle-lost-top-l">
                                    <img src="../imgs/buycarimg/购物车5_17.gif" style={{verticalAlign: "middle"}} alt=""/>凑单商品
                                </div>
                                <div className="middle-lost-top-r">
                                    <button style={{marginTop: 6 + "px"}}>◀</button>
                                    <button>▶</button>
                                </div>
                            </div>
                            <div className="middle-lost-mid">
                                <div className="middle-lost-mid-d1">
                                    <div className="middle-lost-car">
                                    <div className="car-one"><img src="../imgs/buycarimg/02a1adf8742f4d21a98cb14319efd9bb5c.jpg" alt=""/></div>
                                    <div className="name">
                                    <a href="#" style={{color:"#333"}}>
                                        <h3>MACROPUS 尼龙简约单肩挎包</h3>
                                    </a>
                                    </div>
                                    <div className="name-one">
                                    <span style={{textDecoration: "line-through",color:"#9999a5"}}>￥99.00</span>
                                    <span>￥59.00</span>
                                    </div>
                                    </div>
                                    <div className="middle-lost-car">
                                        <div className="car-one"><img src="../imgs/buycarimg/02a1adf8742f4d21a98cb14319efd9bb5c.jpg" alt=""/></div>
                                        <div className="name">
                                            <a href="#" style={{color:"#333"}}>
                                                <h3>MACROPUS 尼龙简约单肩挎包</h3>
                                            </a>
                                        </div>
                                        <div className="name-one">
                                            <span style={{textDecoration: "line-through",color:"#9999a5"}}>￥99.00</span>
                                            <span>￥59.00</span>
                                        </div>
                                    </div>
                                    <div className="middle-lost-car">
                                        <div className="car-one"><img src="../imgs/buycarimg/02a1adf8742f4d21a98cb14319efd9bb5c.jpg" alt=""/></div>
                                        <div className="name">
                                            <a href="#" style={{color:"#333"}}>
                                                <h3>MACROPUS 尼龙简约单肩挎包</h3>
                                            </a>
                                        </div>
                                        <div className="name-one">
                                            <span style={{textDecoration: "line-through",color:"#9999a5"}}>￥99.00</span>
                                            <span>￥59.00</span>
                                        </div>
                                    </div>
                                    <div className="middle-lost-car">
                                        <div className="car-one"><img src="../imgs/buycarimg/02a1adf8742f4d21a98cb14319efd9bb5c.jpg" alt=""/></div>
                                        <div className="name">
                                            <a href="#" style={{color:"#333"}}>
                                                <h3>MACROPUS 尼龙简约单肩挎包</h3>
                                            </a>
                                        </div>
                                        <div className="name-one">
                                            <span style={{textDecoration: "line-through",color:"#9999a5"}}>￥99.00</span>
                                            <span>￥59.00</span>
                                        </div>
                                    </div>
                                </div>
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
    }
});
module.exports = ShopCarCpn;