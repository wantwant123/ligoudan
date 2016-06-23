/**
 * Created by Administrator on 2016/6/22.
 */
var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;


/*��һ�����������е����*/
var Main = require("scripts/pc/component/IndexCpn");
var Change= require("scripts/pc/component/IndexChild");
var Content= require("scripts/pc/component/IndexContent");




/*��һ������������ĸ��Ӽ���ϵ��һ�����*/
ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <Route path="/content" component={Content}>
                    <Route path="/change" component={Change}/>
                </Route>
            </Route>
        </Router>),
    document.getElementById("load")
);
