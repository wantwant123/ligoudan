/**
 * Created by Administrator on 2016/5/17.
 */
global.rootPath = __dirname;
var koa = require("koa");
var serve = require("koa-static");
var router = require("koa-router")();
var favicon = require("koa-favicon");
var render = require("koa-ejs");
var session = require("koa-session");
var mongo = require("koa-mongo");
var mongoConn = require(__dirname + "/lib/common/mongoConn");
var readFile = require(__dirname + "/lib/common/readFile");
var app = koa();

/**为服务器开启监听*/
app.listen(3000);
console.log("web服务器在3000端口开启！");

/**配置全局变量*/
global.mongoConfig = readFile.getConfigJson(__dirname + "/doc/config/mongoDB.config");

/**加中间件【插件】*/
app.keys = ["this_is_my_key"];//设置cookie加密用的key
app.use(session({//设置session
    maxAge: 60 * 1000 * 5,
    key: "sessionid"
}, app));
app.use(serve(__dirname + "/app/build"));//设置静态目录
app.use(favicon(__dirname + "/app/build/imgs/favicon/robot4.ico"));//设置favicon
render(app, {//设置视图
    root: __dirname + "/app/views",//视图的目录
    layout: false,//是否使用默认布局视图
    viewExt: "ejs"//默认追加的扩展名
});
app.use(mongo({//设置数据库
    host: mongoConfig.host,
    port: mongoConfig.port,
    max: mongoConfig.max,//线程池中的最大连接数
    min: mongoConfig.min,//线程池中的最小连接数
    timeout: mongoConfig.timeout
}));
app.use(router.routes());//设置路由

/**路由*/