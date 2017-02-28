/**
 * Created by zhouwanli on 24/02/2017.
 */

'use strict';
var Order = require('../domain/order');

var fnCreateOrder = async (ctx, next) =>{
    var requestData = ctx.request.body;
    console.log(requestData);
    await Order.create({
        name: requestData.name,
        street: requestData.street,
        city: requestData.city,
        state: requestData.state,
        zip: requestData.zip,
        country: requestData.country,
        giftwrap: requestData.giftwrap ,
        products: requestData.products
    }).then(function (p) {
        console.log('created.' + JSON.stringify(p));
        ctx.response.status = 200;
    }).catch(function (err) {
        console.log('failed: ' + err);
        ctx.response.status = 500;
    });

    next();

};

var fnGetAllOrders = async (ctx, next) =>{
    ctx.response.type = 'application/json';
    var orders = await Order.findAll();
    console.log(`find ${orders.length} products ${orders}:`);
    ctx.body = orders;
    next();

};

module.exports = {
    'POST /resources/orders': fnCreateOrder,
    'GET /resources/orders': fnGetAllOrders
};