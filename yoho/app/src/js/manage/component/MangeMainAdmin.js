/**
 * Created by Administrator on 2016/6/17.
 */


/*这一块是头，不用管，拷过去*/
var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

/*有功能和事件就拷这两个*/
var ManageMainAction = require("scripts/manage/action/ManageMainAction");
var Store = require("scripts/manage/store/ManageMainStore");   /*只要有局部刷新，这块必要*/

var Admin = React.createClass({
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
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>这是啥</td>
                            <td>这是啥</td>
                            <td>这是啥</td>
                            <td>这是啥</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>这是啥</td>
                            <td>这是啥</td>
                            <td>这是啥</td>

                            <td>
                                {/*to后面地址对应entry的地址，这一块就是控制局部改变的*/}
                                <Link className="btn" to="/11"><button onClick={this.yy}>这是啥</button></Link>
                                <button>这是啥</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    {/*局部刷新结果输出部分，格式由css控制*/}
                    {this.props.children}
                </div>
            </div>
        );
    },
    //��½����
    yy: function() {
        ManageMainAction.yy();
    },
    /**ί�и�store�Ļص�*/
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = Admin;