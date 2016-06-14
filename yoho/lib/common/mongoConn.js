/**
 * Created by Administrator on 2016/5/19.
 */
module.exports = {
    get: function(ctx) {
        return ctx.mongo.db(mongoConfig.db);
    }
}