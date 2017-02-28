/**
 * Created by zhouwanli on 24/02/2017.
 */
'use strict';
var User = require('../domain/user');

var auth = async (ctx, next) =>{
    ctx.response.type = 'application/json';
    var name = ctx.request.body.username;
    var password = ctx.request.body.password;
    console.log('Login name : ' + name + ', password : ' + password);
    await User.findAll({
        where: {
            username: name,
            password: password
        }
    }).then(function(data){
        if(data.length > 0){
            ctx.response.status = 200;
        }else{
            ctx.response.status = 404;
        }
    });


    next();

};

module.exports = {
    'POST /resources/login': auth
};