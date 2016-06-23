/**
 * Created by Administrator on 2016/6/22.
 */
var React = require("react");
var Store = require("scripts/pc/store/IndexStore");   /*ֻҪ�оֲ�ˢ�£�����Ҫ*/
var IndexAction = require("scripts/pc/action/IndexAction");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var $ = require("jquery");
var IndexContent = React.createClass({
    getInitialState: function() {
        return Store.getInitStore();
    },
    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <div className="content">
                <div className="content_left">
                    <div className="content_left_top">
                        <ul >
                            <li>全部品类</li>
                            <li onClick={this.choose}>
                                <div></div>上衣
                                    <span onClick={this.chooseChild} className="haha">
                                        <Link to="/change"><p className="firc" style={{display:"none"}}>全部上衣</p></Link>
                                        <Link to="/change"><p className="firc" style={{display:"none"}}>衬衫</p></Link>
                                    </span>
                            </li>
                            <li onClick={this.choose2}>
                                <div></div>裤装
                                     <span className="haha2" onClick={this.chooseChild}>
                                        <Link to="/change"><p className="secc" style={{display:"none"}}>全部裤子</p></Link>
                                        <Link to="/change"><p className="secc" style={{display:"none"}}>三角裤</p></Link>
                                    </span>
                            </li>
                            <li onClick={this.choose3}><div></div>裙装
                                     <span className="haha3" onClick={this.chooseChild}>
                                        <Link to="/change"><p className="thic" style={{display:"none"}}>全部裙子</p></Link>
                                        <Link to="/change"><p className="thic" style={{display:"none"}}>bikini</p></Link>
                                    </span>
                            </li>
                            <li onClick={this.choose4}><div></div>包类/装备
                                    <span className="haha4" onClick={this.chooseChild}>
                                        <Link to="/change"><p className="fouc" style={{display:"none"}}>全部裙子</p></Link>
                                        <Link to="/change"><p className="fouc" style={{display:"none"}}>bikini</p></Link>
                                    </span>
                            </li>
                            <li onClick={this.choose5}><div></div>服配
                                    <span className="haha5" onClick={this.chooseChild}>
                                        <Link to="/change"><p className="fifc" style={{display:"none"}}>全部裙子</p></Link>
                                        <Link to="/change"><p className="fifc" style={{display:"none"}}>bikini</p></Link>
                                    </span>
                            </li>
                            <li onClick={this.choose6}><div></div>创意生活
                                <span className="haha6" onClick={this.chooseChild}>
                                        <Link to="/change"><p className="sixc" style={{display:"none"}}>全部裙子</p></Link>
                                        <Link to="/change"><p className="sixc" style={{display:"none"}}>bikini</p></Link>
                                    </span></li>
                        </ul>
                    </div>
                    <div className="content_left_a">
                        <p>经典系列</p>
                    </div>
                    <div className="fever">
                        <div><img src="../imgs/indeximg/012dc890482158812567f85e1fbbbefb11.jpg" alt=""/></div>
                        <div><img src="../imgs/indeximg/02060cc6c73734335c138b74639cb0e00e.jpg" alt=""/></div>
                        <div><img src="../imgs/indeximg/02f8597ba9fb398a82fe78ef510f8a6f4d.jpg" alt=""/></div>
                    </div>
                    <div className="content_left_c"><img src="../imgs/indeximg/02afcb2bee7ba4603e7459e29d91236797.jpg" alt=""/></div>
                    <div className="content_left_b"><img src="../imgs/indeximg/02afcb2bee7ba4603e7459e29d91236797.jpg" alt=""/></div>
                    <div className="content_left_b"><img src="../imgs/indeximg/02afcb2bee7ba4603e7459e29d91236797.jpg" alt=""/></div>
                    <div className="content_left_b"><img src="../imgs/indeximg/02afcb2bee7ba4603e7459e29d91236797.jpg" alt=""/></div>
                    <div className="content_left_b"><img src="../imgs/indeximg/02afcb2bee7ba4603e7459e29d91236797.jpg" alt=""/></div>
                    <div className="content_left_b"><img src="../imgs/indeximg/02afcb2bee7ba4603e7459e29d91236797.jpg" alt=""/></div>
                    <div className="content_left_b"><img src="../imgs/indeximg/02afcb2bee7ba4603e7459e29d91236797.jpg" alt=""/></div>
                </div>
                <div className="content_right">
                    <div className="content_right_top">
                        <div className="content_nav">
                            <p className="add">已选条件 ：</p>
                            <div className="addInfo" onClick={this.deleteChoose}>
                                <p style={{display:this.state.display}} data-choose="chooseChild">{this.state.changeClassify1} ×</p>
                                <p style={{display:this.state.display1}} data-choose="choosePrice">{this.state.changePrice1} ×</p>
                                <p style={{display:this.state.display2}} data-choose="chooseColor">{this.state.changeColor1} ×</p>
                                <p style={{display:this.state.display3}} data-choose="chooseSex">{this.state.changeSex1} ×</p>
                            </div>
                            <p className="delete">清空筛选条件</p>
                        </div>
                        <div className="center_one" onClick={this.chooseSex}>
                            <p className="gender">性别 ：</p>
                            <p className="boys">BOYS</p>
                            <p className="girls">GIRLS</p>
                        </div>
                        <div className="center_price" onClick={this.choosePrice}>
                            <p className="price">价格 ：</p>
                            <Link to="/change"><p className="price_one" data-price="239">￥0-239</p></Link>
                            <Link to="/change"><p className="price_one" data-price="319">￥240-319</p></Link>
                            <Link to="/change"><p className="price_one" data-price="469">￥320-469</p></Link>
                            <Link to="/change"><p className="price_one" data-price="470">￥469以上</p></Link>
                            <p className="price_one">￥<input type="text"/>&nbsp;-&nbsp;<input type="text"/></p>

                        </div>
                        <div className="center_colour" onClick={this.chooseColor}>
                            <p className="colour">颜色 ：</p>
                            <Link to="/change"><div className="colour_one" ><p className="colour_ones" style={{background: "black"}} data-color="黑色"></p><p className="colour_list">黑色</p></div></Link>
                            <Link to="/change"><div className="colour_one" ><p className="colour_ones" style={{background: "white"}} data-color="白色"></p><p className="colour_list">白色</p></div></Link>
                            <Link to="/change"><div className="colour_one" ><p className="colour_ones" style={{background: "#47ba17"}} data-color="绿色"></p><p className="colour_list">绿色</p></div></Link>
                            <Link to="/change"><div className="colour_one" ><p className="colour_ones" style={{background: "#0000fe"}} data-color="蓝色"></p><p className="colour_list">蓝色</p></div></Link>
                            <Link to="/change"><div className="colour_one" ><p className="colour_ones" style={{background: "#ee0000"}} data-color="红色"></p><p className="colour_list">红色</p></div></Link>
                            <Link to="/change"><div className="colour_one" ><p className="colour_ones" style={{background: "#dadada"}} data-color="银色"></p><p className="colour_list">银色</p></div></Link>
                            <Link to="/change"><div className="colour_one" ><p className="colour_ones" style={{background: "#b9b7af"}} data-color="灰色"></p><p className="colour_list">灰色</p></div></Link>

                        </div>
                        <div className="center_option">
                            <p className="option">高级选项 ：</p>
                            <p className="option_one">袖长</p>
                            <p className="option_one">版型</p>
                            <p className="option_one">经典款型</p>

                        </div>
                    </div>
                    <div className="paging">
                        <p className="paging_j">默认</p>
                        <p className="paging_a">最新 <span className="paging_span"></span></p>
                        <p className="paging_a">价格 <span className="paging_span_top"></span> <span className="paging_spans"></span></p>
                        <p className="paging_a">折扣 <span className="paging_span_top"></span><span className="paging_spans"></span></p>
                        <p className="paging_b"><input type="checkbox"/>新品</p>
                    </div>
                    <div id="change">
                        {this.props.children}
                    </div>

                </div>
                <div className="content_btn">
                    <p>1-56/共56件商品</p>
                </div>
            </div>
        );
    },
    jump: function() {
        event.stopPropagation();
        var $target = $(event.target);
        if ($target.is('.img_a')) { //委托对象
            IndexAction.jump($target.attr("id"));
            console.info($target.attr("id")); //输出
        }
    },
    //菜单展开
    choose: function() {
        IndexAction.choose();
    },
    choose3: function() {
        IndexAction.choose3();
    },
    choose2: function() {
        IndexAction.choose2();
    },
    choose4: function() {
        IndexAction.choose4();
    },
    choose5: function() {
        IndexAction.choose5();
    },
    choose6: function() {
        IndexAction.choose6();
    },
    //菜单选择
    chooseChild: function(event) {
        event.stopPropagation();
        //var $target = $(event.target);
        var e = event || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName.toLocaleLowerCase() == "p") { //委托对象
            IndexAction.chooseChild(target.innerHTML);
            console.info(target.innerHTML); //输出
        }
    },

    //价格选择
    choosePrice:function(event){
        event.stopPropagation();
        var e = event || window.event;
        var target = e.target || e.srcElement;
        if (target.className == "price_one" ){ //委托对象
            IndexAction.choosePrice(target.getAttribute("data-price"),target.innerHTML);
            console.info(target.getAttribute("data-price")); //输出
        }
    },

    //颜色选择
    chooseColor:function(event){
        event.stopPropagation();
        var e = event || window.event;
        var target = e.target || e.srcElement;
        if (target.className == "colour_ones") { //委托对象
            IndexAction.chooseColor(target.getAttribute("data-color"));
            console.info(target.getAttribute("data-color")); //输出
        }
    },
    //性别选择
    chooseSex:function(event){
        event.stopPropagation();
        var e = event || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName.toLocaleLowerCase() == "p") { //委托对象
            IndexAction.chooseSex(target.innerHTML);
            console.info(target.innerHTML); //输出
        }
    },

    //选项删除
    deleteChoose:function(event){
        event.stopPropagation();
        var e = event || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName.toLocaleLowerCase() == "p") { //委托对象
            IndexAction.deleteChoose(target.getAttribute("data-choose"));
            console.info(target.getAttribute("data-choose")); //输出
        }
    },
    /**ί�и�store�Ļص�*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = IndexContent;