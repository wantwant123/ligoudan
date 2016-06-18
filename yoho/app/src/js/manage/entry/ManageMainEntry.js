/**
 * Created by Administrator on 2016/6/3.
 */
/*这一块是头，不用管，拷过去*/
var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;


/*这一部分是你所有的组件*/
var Main = require("scripts/manage/component/ManageMainCpn");
var Admin = require("scripts/manage/component/MangeMainAdmin");
var Admin1 = require("scripts/manage/component/MangeMainAdmin1");
var Shop = require("scripts/manage/component/MangeMainShop");




/*这一部分是你组件的父子集关系，一定别错*/
ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <Route path="/1" component={Admin} >
                    <Route path="/11" component={Shop} />
                </Route>
                <Route path="/2" component={Admin1}/>
            </Route>
        </Router>),
    document.getElementById("load")
);
