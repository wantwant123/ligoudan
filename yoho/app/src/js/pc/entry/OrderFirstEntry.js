/**
 * Created by Administrator on 2016/6/22.
 */
//必带引用头
var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;

var OrderFirstCpn = require("scripts/pc/component/OrderFirst");



//组件

ReactDOM.render(
    <div>
        <OrderFirstCpn />
    </div>
    ,
    document.getElementById("bodys")
);