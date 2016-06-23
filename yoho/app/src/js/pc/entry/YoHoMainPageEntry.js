/**
 * Created by Administrator on 2016/6/23.
 */
//必带引用头
var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;

var YoHoPageCpn = require("scripts/pc/component/YoHoMainPage");



//组件

ReactDOM.render(
    <div>
        <YoHoPageCpn />
    </div>
    ,
    document.getElementById("bodys")
);