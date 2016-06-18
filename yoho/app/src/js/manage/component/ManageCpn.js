/**
 * Created by Administrator on 2016/6/7.
 */
var React = require("react");
var ManageAction = require("scripts/manage/action/ManageAction");
var Store = require("scripts/manage/store/ManageStore");

var ManageMainCpn = React.createClass({
    /**初始化state*/
    getInitialState: function() {
        return Store.getInitStore();
    },
    /**装上DOM完成回调*/
    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },
    /**卸载DOM之前回调*/
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    /**渲染*/
    render: function() {
        return (
            <div>
                <div className="trCon">
                    <div>
                        <input ref="username" type="text" placeholder="姓名" className="name"/>
                    </div>
                    <div>
                        <input ref="password" type="password" placeholder="密码（不少于6位）" className="pass"/>
                    </div>
                    <div className="forGet">
                        <p className="pOne"><input type="checkbox" checked/>记住密码</p>
                        <p className="pTwo"><a href="#">忘记密码？</a></p>
                    </div>
                    <div>
                        <button  onClick={this.findAdmin} id="btn" className="btn">登&nbsp;&nbsp;录</button>
                    </div>
                </div>
            </div>
        );
    },
    //登录方法
    findAdmin: function() {
        ManageAction.findAdmin(this.refs.username.value, this.refs.password.value);
    },
    /**委托给store的回调*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = ManageMainCpn;