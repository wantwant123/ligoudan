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

var BuycarCpn = require("scripts/pc/component/ShopCar");



//组件

ReactDOM.render(
    <div>
        <BuycarCpn />
    </div>
    ,
    document.getElementById("bodys")
);