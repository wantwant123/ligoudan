/**
 * Created by Administrator on 2016/6/17.
 */
var React = require("react");
var Store = require("scripts/manage/store/ManageMainStore");   /*只要有局部刷新，这块必要*/
var Shop = React.createClass({
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
            <div className="shop">
                <table>
                    {this.state.test}
                </table>
            </div>
        );
    },
    _onChange: function() {
        this.setState(Store.getStore());
    }
});

module.exports = Shop;