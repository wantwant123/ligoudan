/**
 * Created by Administrator on 2016/6/22.
 */
{/**这一块是头，不用管，拷过去*/}
var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var $ = require("jquery");
var OrderFirstAction = require("scripts/pc/action/OrderFirstAction");


var OrderFirstCpn = React.createClass({
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
                        </div>
                        <div className="order-title">
                            <div className="order-title-left">
                                <img src="../imgs/order/订单2_03.gif" alt=""/>
                                <img src="../imgs/order/订单3_06.gif" alt=""/>
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
                        <div className="order-edit">
                            <p className="title">&nbsp;&nbsp;&nbsp;&nbsp; 请填写并核对以下信息
                            </p>
                            <div className="order-content">
                                <div className="order-selection">
                                    <h5>收货地址：<span expand="expand">[不保存并关闭]</span></h5>
                                    <div className="address-list-inner">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input className="radio" type="radio" name="address"checked="checked"/>
                                            <label>使用新地址</label>
                                        </div>
                                        <ul>
                                            <li>
                                                <span className="address-legend"><i>*</i>收货人姓名：</span>
                                                <input type="text" name="name" className="name text-input"/>
                                                    <span>请填写您的真实姓名，最多5个汉字</span>
                                                </li>
                                                <li>
                                                    <span className="address-legend"><i>*</i>省市：</span>
                                                    <select name="province" className="text-inputs">
                                                        <option value="0">请选择省份</option>
                                                        <option value="11">*北京市</option>
                                                        <option value="12">*天津市</option>
                                                        <option value="13">*河北省</option>
                                                        <option value="14">*山西省</option>
                                                        <option value="15">*内蒙古自治区</option>
                                                        <option value="21">*辽宁省</option>
                                                        <option value="22">*吉林省</option>
                                                        <option value="23">*黑龙江省</option>
                                                        <option value="31">*上海市</option>
                                                        <option value="32">江苏省</option>
                                                        <option value="33">*浙江省</option>
                                                        <option value="34">*安徽省</option>
                                                        <option value="35">福建省</option>
                                                        <option value="36">江西省</option>
                                                        <option value="37">山东省</option>
                                                        <option value="41">河南省</option>
                                                        <option value="42">湖北省</option>
                                                        <option value="43">*湖南省</option>
                                                        <option value="44">*广东省</option>
                                                        <option value="45">*广西壮族自治区</option>
                                                        <option value="46">*海南省</option>
                                                        <option value="50">*重庆市</option>
                                                        <option value="51">*四川省</option><
                                                        option value="52">*贵州省</option>
                                                        <option value="53">云南省</option>
                                                        <option value="54">*西藏自治区</option>
                                                        <option value="61">*陕西省</option>
                                                        <option value="62">*甘肃省</option>
                                                        <option value="63">*青海省</option>
                                                        <option value="64">*宁夏回族自治区</option>
                                                        <option value="65">新疆维吾尔自治区</option>
                                                    </select>
                                                    <select name="city" className="text-inputs">
                                                        <option value="0">请选择城市</option>
                                                    </select>
                                                    <select name="county" className="text-inputs">
                                                        <option value="0">请选择区县</option>
                                                    </select>
                                                    <input type="text" name="address" className="text-input"/>
                                                        <span>标'*'的为支持加急送的地区，请输入收货的详细地址</span>
                                                    </li>
                                                    <li>
                                                        <span className="address-legend"><i>*</i>手机号码：</span>
                                                        <input type="text" name="phone" className="text-input"/>
                                                            <span>填写正确手机号便于接收发货和收货通知</span>
                                                        </li>
                                                        <li>
                                                            <span className="address-legend">固定电话：</span>
                                                            <div className="address-tel-input">
                                                                <input type="text" name="tel-code" className="tel-lengend text-input" style={{marginRight:0 + "px"}}/>—
                                                                    <input type="text" name="tel" className="text-input1"/>
                                                                    </div>
                                                                    <span>如：010-12345678，固话和手机号至少填一项</span>
                                                                </li>
                                                                <li>
                                                                    <span className="address-legend">电子邮件：</span>
                                                                    <input type="text" name="mail" className="text-input"/>
                                                                        <span>用来接收订单提醒邮件，便于您及时了解订单状态</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="address-legend">邮编：</span>
                                                                        <input type="text" name="code" className="text-input"/>
                                                                            <span>请填写准确的邮编，以确保商品尽快送达</span>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="new-user-btn">
                                                                        <a href="#" className="save-btn">下一步：选择支付及送货时间</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pay-time">
                                                                <p>支付及送货时间：<span className="switch-pay-modify"></span></p>
                                                                <ul className="modity-pay-info">
                                                                    <li>付款方式：<span>在线支付</span></li>
                                                                    <li>送货时间：<span>只工作日送货（双休日、节假日不送）</span></li>
                                                                    <li>送货前联系我：<span>否</span></li>
                                                                </ul>
                                                            </div>
                                                            <div className="pay-time select-express">
                                                                <p>选择快递：</p>
                                                                <div className="express-list">
                                                                    <input  className="radio" type="radio" name="carriagegroup" id="common-1" value="1"/>
                                                                        <label>普通快递：&nbsp;&nbsp;运费 ￥10.00  </label>
                                                                    </div>
                                                                    <div className="express-list">
                                                                        <input className="radio" type="radio" name="carriagegroup" id="common-2" value="2"/>
                                                                            <label>顺丰速运：&nbsp;&nbsp;运费 ￥15.00  (仅支持顺丰可配送的地区)</label>
                                                                        </div>
                                                                        <div className="express-list express-tips">注：配送会由于天气，交通等不可抗拒的客观因素造成您收货时间延迟，请您知悉。
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="order-pay">
                                                                    <div className="pay-wapper">
                                                                        <table>
                                                                            <thead>
                                                                            <tr>
                                                                                <th style={{width:"40%"}}>
                                                                                    商品信息
                                                                                </th>
                                                                                <th style={{width:"10%"}}>单价（元）</th>
                                                                                <th style={{width:"10%"}}>返YOHO币</th>
                                                                                <th style={{width:"10%"}}>数量</th>
                                                                                <th style={{width:"10%"}}>小计（元）</th>
                                                                                <th style={{width:"20%"}}>商品金额（元）</th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="pay-pro">
                                                                                        <a className="pay-pro-icon" href="#">
                                                                                            <img src="../imgs/order/02fc8ff033a659a830f63f8a97f84b38d0.jpg"/>
                                                                                            </a>
                                                                                            <p className="pay-pro-info">
                                                                                                <a href="#">Life·After Life 趣味字母印花短袖T恤</a>
                                                                                                <br/>
                                                                                                <span>颜色：黑色 尺码：S</span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>￥
                                                                                        99.00
                                                                                    </td>
                                                                                    <td>0个</td>
                                                                                    <td>1</td>
                                                                                    <td className="cart-sub-total ">￥99.00</td>
                                                                                    <td className="cart-sub-total-all" rowspan="1"><strong style={{fontSize:20 + "px"}}>￥99.00</strong></td>
                                                                                </tr>
                                                                            </tbody>
                                                                            </table>
                                                                            <div className="remarks">
                                                                                <div className="remark">
                                                                                    <p><button>索要发票</button></p>
                                                                                    <p><button>添加备注信息</button></p>
                                                                                </div>
                                                                                <div className="calculate">
                                                                                    <p>共返YOHO币：<span></span>0<span>个</span></p>
                                                                                    <p>商品总价：<span>&nbsp; +￥</span>99.00<span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <br/>
                                                                                        <b>运费：<span>&nbsp; +￥</span><span>10.00</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p className="gross">您需要实际支付金额：<span>109.00</span>元</p>
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
module.exports = OrderFirstCpn;