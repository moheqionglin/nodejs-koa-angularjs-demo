/**
 * Created by zhouwanli on 23/02/2017.
 */
'use strict';

var fnDemoIndex = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/demo/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fnDemoSignin = async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

var fnDemoHello = async (ctx, next) =>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${ctx.params.name}! (${ctx.request.wanli})</h1>`;
};

module.exports = {
    'GET /demo': fnDemoIndex,
    'POST /demo/signin': fnDemoSignin,
    'GET /demo/hello/:name': fnDemoHello

};