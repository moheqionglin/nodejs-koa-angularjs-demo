/**
 * Created by zhouwanli on 24/02/2017.
 */
'use strict';

var fnIndex = async (ctx, next) => {
    ctx.render('index.html',{});
    next();
}

module.exports = {
    'GET /' : fnIndex,

}