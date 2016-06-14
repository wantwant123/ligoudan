/**
 * Created by Administrator on 2016/5/19.
 */
var fs = require("fs");

module.exports = {
    getConfigJson: function(filePath) {
        return JSON.parse(fs.readFileSync(filePath, "utf8"));
    }
};