/**
 * Created by Administrator on 2016/6/21.
 */
var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;


var Main = require("scripts/pc/component/FavorCpn");
var Change= require("scripts/pc/component/FavorChild");
var ChangeOne= require("scripts/pc/component/FavorChildOne");

//ReactDOM.render(
//    <FavorCpn/>,
//    document.getElementById("main")
//);
ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                    <Route path="/changeOrder" component={Change}/>
                    <Route path="/changeCollect" component={ChangeOne}/>
            </Route>
        </Router>),
    document.getElementById("main")
);