/**
 * Created by Administrator on 2016/6/16.
 */

/*这一块是头，不用管，拷过去*/
var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;


/*这一部分是你所有的组件*/
//var ManageMainAction = require("scripts/manage/action/ManageMainAction");
var Store = require("scripts/manage/store/ManageMainStore");

var ManageMain1Cpn = React.createClass({
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
        console.info(123);
        return (
                <div className="wrap">
                    <div className="header">

                    </div>
                    <div className="container">
                        <div id="left" className="left">
                            <ul>
                                {/*to后面地址对应entry的地址，这一块就是控制局部改变的*/}
                                <li><Link className="btn" to="/1"><span href="#">所有用户</span></Link></li>
                                <li><Link className="btn" to="/2"><span href="#">卖家</span></Link></li>
                                <li><Link className="btn" to="/"><span href="#">买家</span></Link></li>
                                <li><Link className="btn" to="/"><span href="#">所有商品</span></Link></li>
                                <li><Link className="btn" to="/"> <span href="#">品牌</span></Link></li>
                                <li><Link className="btn" to="/"><span href="#">评价</span></Link></li>
                                <li><Link className="btn" to="/"><span href="#">所有订单</span></Link></li>
                                <li><Link className="btn" to="/"><span href="#">未处理</span></Link></li>
                                <li><Link className="btn" to="/"><span href="#">已处理</span></Link></li>
                            </ul>
                        </div>
                        <div className="right">
                            <div className="rTop">
                                <img src="../../imgs/manage/icon1_03.png" alt=""/>
                                <label>所有用户</label>
                            </div>
                            {/*局部刷新结果输出部分，格式由css控制*/}
                            <div className="rCont">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
        );
    },
    //登陆方法
    //findAdmin: function() {
    //    ManageAction.findAdmin(this.refs.username.value, this.refs.password.value);
    //},
    /**委托给store的回调*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = ManageMain1Cpn;