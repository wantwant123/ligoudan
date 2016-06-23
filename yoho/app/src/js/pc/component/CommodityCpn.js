/**
 * Created by Administrator on 2016/6/21.
 */
/**
 * Created by Administrator on 2016/6/20.
 */
{/**这一块是头，不用管，拷过去*/}
var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var $ = require("jquery");
var Store = require("scripts/pc/store/CommodityStore");
var CommodityAction = require("scripts/pc/action/CommodityAction");


var IndexCpn = React.createClass({
    getInitialState: function() {
        return Store.getInitStore();
    },
    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    render:function(){
        return(
            <div>
                <div className="content_topone">
                    <p>BOYS首页{">"}</p>
                </div>
                <div className="content_centre">
                    <div className="content_cnt">
                        <div  className="content_left"><img id="content_left" className="img_show" src={this.state.img} alt=""/></div>
                        <div className="content_m" onClick={this.change}>
                            <span><img className="img_show" src="../imgs/commodityimg/1 (1).png" alt=""/></span>
                            <span><img className="img_show" src="../imgs/commodityimg/1 (2).png" alt=""/></span>
                            <span><img className="img_show" src="../imgs/commodityimg/1 (3).png" alt=""/></span>
                            <span><img className="img_show" src="../imgs/commodityimg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/></span>
                        </div>

                        <div className="content_right">
                            <p className="content_name">热血FEVER BACK TO FEVER TEE <span>热血FEVER</span></p>
                            <div className="content_one">
                                <p>
                                    <span className="price">市场价：</span>
                                    <span className="price_one">￥284.00</span>
                                    <p className="price_three">
                    <span className="vip">登录后即可查看vip价格
                    <a href="#" className="vip_one">立即登录</a>
                    </span>
                                    </p>
                                    <div className="price_two"><img src="../imgs/commodityimg/018a5c1c2eca922a0970083736d6aab032.png" alt=""/></div>
                                    <div className="price_icon">
                                        <p className="festival"><span>满减</span>【端午满减加持】￥满799减￥150</p>
                                        <p className="festival"><span>满减</span>【端午满减加持】￥满599减￥100</p>
                                        <p className="festival"><span>满减</span>【端午满减加持】￥满399减￥50</p>
                                    </div>
                                </p>
                            </div>
                            <div className="price_btn">
                                <div className="colour">
                                    <p>选颜色：</p>
                                    <span><img src={this.state.img} alt=""/></span>
                                </div>
                                <div className="size" onClick={this.size}>
                                    <p>选尺码：</p>
                                    <span className="size_one">S</span>
                                    <span className="size_one">M</span>
                                    <span className="size_one">L</span>
                                    <span className="size_one">XL</span>
                                    <span className="size_one">XXL</span>
                                    <span className="size_two">尺码帮助</span>
                                </div>
                                <div className="quantity">
                                    <p>选数量：
                                        <div className="num_minus">
                                            <span className="num" id="num">{this.state.buyNum}</span>
                            <span className="minus">
                                <i className="tops" onClick={this.plus}>
                                    <span></span>
                                </i>
                                <i className="buttons" onClick={this.reduce}>
                                    <span></span>
                                </i>

                            </span>
                                        </div>
                                    </p>
                                </div>
                                <div className="add">
                                    <span className="add_cart" onClick={this.addToShopcar}>添加到购物车</span>
                                    <span className="add_one"  onClick={this.addToCollect}>收藏商品</span>
                                </div>
                                <p className="share ">
                                    <span className="share_v">分享商品：</span>
                        <span className="share_s">
                            <i className="weibo"> </i>
                            <i className="weixin"> </i>
                            <i className="tweibo"> </i>
                            <i className="qzone"> </i>
                            <i className="qq"> </i>
                            <i className="renren"></i>
                            <i className="douban"></i>
                        </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="content_info">
                    <p className="info_title">
                        <span className="title_cur">商品信息DESCRIPTION</span>
                        <span className="sep">|</span>
                        <span className="title">材质洗涤MATERIALS</span>
                    </p>
                    <div className="info_a">
                        <ul className="info_b">
                            <li>编号：51221360</li>
                            <li>颜色：黑色</li>
                            <li>性别：男款</li>
                            <li>领型：圆领</li>
                            <li>衣长：适中</li>
                            <li>袖长：短袖</li>
                            <li>版型：正常</li>
                            <li>厚度：中</li>
                            <li>经典款型：图案T恤</li>
                        </ul>
                        <ul className="info_c">
                            <li className="info_left">
                                <span className="info_d">弹性：</span>
                                <span className="info_min">小</span>
                                <span className="info_e"></span>
                                <span className="info_e"></span>
                                <span className="info_e_cur"></span>
                                <span className="info_e"></span>
                                <span className="info_e"></span>
                                <span className="info_max">大</span>
                            </li>
                            <li className="info_left">
                                <span className="info_d">厚度：</span>
                                <span className="info_min">薄</span>
                                <span className="info_e"></span>
                                <span className="info_e_cur"></span>
                                <span className="info_e"></span>
                                <span className="info_e"></span>
                                <span className="info_e"></span>
                                <span className="info_max">厚</span>
                            </li>
                            <li className="info_left">
                                <span className="info_d">柔软度：</span>
                                <span className="info_min">软</span>
                                <span className="info_e"></span>
                                <span className="info_e_cur"></span>
                                <span className="info_e"></span>
                                <span className="info_e"></span>
                                <span className="info_e"></span>
                                <span className="info_max">硬</span>
                            </li>
                            <li className="info_left">
                                <span className="info_d">透气性：</span>
                                <span className="info_min">弱</span>
                                <span className="info_e"></span>
                                <span className="info_e_cur"></span>
                                <span className="info_e"></span>
                                <span className="info_e"></span>
                                <span className="info_e"></span>
                                <span className="info_max">强</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content_size">
                    <p className="center_title">
                        <span className="title_cur">尺码信息 SIZE INFO</span>
                    </p>
                    <table className="size_title">
                        <thead>
                        <tr>
                            <th>吊牌尺码</th>
                            <th>后衣长</th>
                            <th>前衣长</th>
                            <th>袖长</th>
                            <th>胸围</th>
                            <th>肩宽</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>S</td>
                            <td>69</td>
                            <td>69</td>
                            <td>20</td>
                            <td>94</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>71</td>
                            <td>71</td>
                            <td>21</td>
                            <td>98</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>73</td>
                            <td>73</td>
                            <td>23</td>
                            <td>104</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>75</td>
                            <td>75</td>
                            <td>24</td>
                            <td>110</td>
                            <td>46</td>
                        </tr>
                        </tbody>
                    </table>
                    <p className="size_tip">
                        以上尺寸为实物人工测量，因测量方式不同会员1-2CM误差，相关数据仅作参考，以收到实物为准。单位：CM
                    </p>
                    <p className="size_tip">
                        参考尺码因衣服版型、剪裁不同会有误差，仅供参考
                    </p>
                    <img src="../imgs/commodityimg/1.jpg" alt=""/>
                </div>
                <div className="content_message">
                    <p className="message_title">
                        <span className="title_cur">商品详情 DETAILS</span>
                    </p>
                    <div className="message_html">

                        把狭隘视野从萤幕框架转向辽阔的前方
                        我们的手除了滑手机，更应该用来实践热衷的事物
                        很多难题可以不费力气的『滑』出答案
                        但亲手克服困境后那种感动和振奋的成就感
                        是永远『滑』不出来的
                        藉此让更多人看见热血小手拥有的能量
                        绝对，超乎你的想像！

                        SKATE HAND挑战刺激衝浪
                        在浪花中隐隐看的见鲨鱼伴游
                        犹如人生中伴随的困难与危险
                        但追寻热爱，就要勇敢不怕阻碍
                        搭配热血宽版与鲜豔的蓝白配色
                        兼具活动舒适度与夏季气息
                        换上它，让我们一起SKATE TOGETHER！
                    </div>
                </div>
                <div className="content_comment">
                    <p className="comment_title">
                        <span className="title">顾客咨询(0)</span>
                        <span className="sep">|</span>
                        <span className="title_cur">购买评价(0)</span>
                    </p>
                    <div className="comment_content">
                        <h2>购买评价(0)</h2>
                        <p className="comment_btn">
                            <a href="#" className="btn">我要评论</a>
                        </p>
                    </div>
                    <div className="after_service">
                        <p className="after_service_switch">
                            <span className="iconfont"></span>
                            售后服务
                        </p>
                    </div>
                </div>

                <div className="content_btn">
                    <div className="browse">
                        <p className="browse_title">
                            <span className="title_cur">最近浏览 RECENT REVIEW</span>
                        </p>
                        <div className="in_good">
                            <div className="good">
                                <a href="#"><img src="../imgs/commodityimg/01790252e1464ef5684c1b5bd33f8ad69d.gif" alt=""/></a>
                                <a href="#" className="name">
                                    热血FEVER SB SKATE SURFING短袖T恤
                                </a>
                                <p className="price">￥276</p>
                            </div>
                            <div className="good">
                                <a href="#"><img src="../imgs/commodityimg/01790252e1464ef5684c1b5bd33f8ad69d.gif" alt=""/></a>
                                <a href="#" className="name">
                                    热血FEVER SB SKATE SURFING短袖T恤
                                </a>
                                <p className="price">￥199</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    //颜色选择（maybe）
    change:function(event){
        var $target = $(event.target);
        if ($target.is('.img_show')) { //委托对象
            CommodityAction.change($target.attr("src"));
            //console.info($target.attr("src")); //输出
        }
    },
    //尺寸选择
    size:function(event){
        var $target = $(event.target);
        if ($target.is('.size_one')) { //委托对象
            $(".size_one").css("background","white");
            $(".size_one").css("color","#999999");
            $target.css("background","black");
            $target.css("color","white");
            CommodityAction.size($target.html());
            //console.info($target.html()); //输出
        }
    },

    //数量选择
    plus:function(){
        CommodityAction.plus(document.getElementById("num").innerHTML);
    },
    reduce:function(){
        CommodityAction.reduce(document.getElementById("num").innerHTML);
        //console.info(document.getElementById("num").innerHTML)
    },

    //加入购物车
    addToShopcar:function(){
        CommodityAction.addToShopcar();
    },
    addToCollect:function(){
        CommodityAction.addToCollect();
    },



    _onChange: function() {
        this.setState(Store.getStore());
    }
});
module.exports = IndexCpn;

