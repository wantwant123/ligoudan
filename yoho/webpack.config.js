var webpack = require("webpack");
//var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    /**source map*/
    devtool: "eval-source-map",
    /**入口文件*/
    entry: {
        entry: __dirname + "/src/js/entry.js",
        common: [__dirname + "/src/js/common.js"]
    },
    /**入口文件输出配置*/
    output: {
        path: __dirname + "/build",
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
        }),
        new webpack.optimize.UglifyJsPlugin({//压缩js代码
            compress: {
                warnings: false
            }
        })
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
            rootPath: __dirname
        }
    }
};