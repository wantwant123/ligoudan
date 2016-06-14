/**
 * Created by Administrator on 2016/6/13.
 */
var gulp = require("gulp");
var sass = require("gulp-sass");//编译sass
var minifycss = require("gulp-minify-css");//css压缩
var webpack = require("webpack");//webpack
var webpackConfig = require(__dirname + "/webpack.config.js");//引入webpack配置
var rev = require("gulp-rev");

//js任务
gulp.task("webpack", function(callback) {
    webpack(webpackConfig, function(err, stats) {
        callback();
    });
});
//css任务
gulp.task("sass", function() {
    gulp.src("src/sass/**/*.scss")
        .pipe(sass())//编译sass
        .pipe(minifycss())//压缩css
        .pipe(rev())
        .pipe(gulp.dest("build"));
});

//默认任务
gulp.task("default", ["sass", "webpack"], function() {
    //监听sass变化
    gulp.watch("src/sass/**/*.scss", ["sass"]);
    //监听js变化
    gulp.watch("src/js/**/*.js", ["webpack"]);
});