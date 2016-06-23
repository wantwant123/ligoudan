/**
 * Created by Administrator on 2016/6/22.
 */
var React = require("react");
var Store = require("scripts/pc/store/IndexStore");   /*ֻҪ�оֲ�ˢ�£�����Ҫ*/
var IndexAction = require("scripts/pc/action/IndexAction");
var $ = require("jquery");

var IndexChild = React.createClass({
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
            <div onClick={this.jump}>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a" id="aa">
                        <a href="/html/commodity.html#/?aa" name="11" className="a" target="_Blank">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1" target="_Blank">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html#/?ab" name="12" className="a" target="_Blank">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1" target="_Blank">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>


                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>

                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
                </div>
                <div className="dress_a">
                    <div className="img">
                        <img src="../imgs/indeximg/0124c73c771c5158a944938e197e4e00ce.jpg" alt=""/>
                    </div>
                    <div className="img_a">
                        <a href="/html/commodity.html" className="a">热血FEVER SB SKATE SURFING短袖T恤</a>
                        <p className="brand">
                            <a href="/html/commodity.html" className="a1">热血FEVER</a>
                        </p>
                        <p className="price">
                    <span className="sale">
                     ¥276
                    </span>
                        </p>
                    </div>
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
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = IndexChild;