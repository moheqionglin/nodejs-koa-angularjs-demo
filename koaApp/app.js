/**
 * Created by zhouwanli on 22/02/2017.
 */
'use strict';
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:

const isProduction = process.env.NODE_ENV === 'production';
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const requestMapping = require('./middleware/requestMapping.js');
const app = new Koa();// 创建一个Koa对象表示web app本身:
const viewResolver = require('./middleware/viewResolver.js');
const staticFiles = require('./middleware/staticFile.js');
// const swagger = require('koa-swagger');
// const cors = require('koa-cors');
app.use(bodyParser());//解析post的body
// app.use(cors());
// app.use(swagger());
app.use(async (ctx, next) => {// 对于任何请求，app将调用该异步函数处理请求：过滤器
    console.log(`process ${ctx.request.method} ${ctx.request.url}...`);
    ctx.request.wanli = '万里-过滤器';
    await next();
});

// app.use(staticFiles('/static/', './view/static/'));
// app.use(staticFiles('/controllers/', './view/controllers/'));
// app.use(staticFiles('/filters/', './view/filters/'));
app.use(staticFiles('/view/', './view/'));
app.use(staticFiles('/p/', './view/'));


//暂时不用
app.use(viewResolver('view', {//视图解析器
    noCache: !isProduction,
    watch: !isProduction
}));



app.use(requestMapping('./controller'));// add router middleware:
app.listen(3000);// 在端口3000监听:
console.log('app started at port 3000...');