var webpack = require("webpack");

module.exports = {
    /**source map*/
    devtool: "eval-source-map",
    /**入口文件*/
    entry: {
        common: ["react", "react-dom"],
        manage: __dirname + "/app/src/js/manage/entry/ManageEntry.js",
        manageEntry: __dirname + "/app/src/js/manage/entry/ManageMainEntry.js"
        //common: [__dirname + "/app/src/js/rem.js"]
    },
    /**入口文件输出配置*/
    output: {
        path: __dirname + "/app/build/js",
        publicPath: "/yoho/app/build/js/",
        filename: "[name].bunlde.js"
    },
    /**模块引入*/
    module: {
        loaders: [//加载器
            {test: /\.js$/, loader: "jsx-loader"}
        ]
    },
    /**插件*/
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({//踢出公共js部分
            name: "common",
            minChunks: Infinity
        })
        //new webpack.optimize.UglifyJsPlugin({//压缩js代码
        //    compress: {
        //        warnings: false
        //    }
        //})
        //new HtmlWebpackPlugin({
        //    template: "",
        //    filename: "",
        //    inject: "body",//注入到body中
        //    chunks: ["common", "entry"]
        //})
    ],
    /**其他解决配置*/
    resolve: {
        alias: {//别名
            rootPath: __dirname,
            scripts: __dirname + "/app/src/js",
            script: __dirname + "/app/build"
        },
        extensions: ["", ".js", ".jsx"]
    }
};