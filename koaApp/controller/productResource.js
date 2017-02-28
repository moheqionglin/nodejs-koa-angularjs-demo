/**
 * Created by zhouwanli on 24/02/2017.
 */

'use strict';
var Product = require('../domain/product');

var fnGetAllProducts = async (ctx, next) =>{
    ctx.response.type = 'application/json';
    var products = await Product.findAll();
    console.log(`find ${products.length} products ${products}:`);
    ctx.body = products;
    next();

};

var updateProduct = async (ctx, next) =>{
    var requestData = ctx.request.body
    var ps = await Product.findAll({
        where: {
            id: ctx.params.id,
        }
    });
    var p = ps[0]
    p.category = requestData.category;
    p.description = requestData.description;
    p.name = requestData.name;
    p.price = requestData.price;
    await p.save().then(function(){
        ctx.response.type = 'application/json';
        ctx.body = p;
        ctx.response.status = 200;
    });

    next();
};

var deleteProduct = async (ctx, next) =>{
    console.log(ctx.params.id)
    var ps = await Product.findAll({
        where: {
            id: ctx.params.id,
        }
    });
    var p = ps[0];
    await p.destroy().then(function(){
        ctx.response.status = 200;
    });
    next();
}

var createProduct =  async (ctx, next) =>{
    var requestData = ctx.request.body;
    console.log(requestData);
    await Product.create({
        name: requestData.name,
        description: requestData.description,
        category: requestData.category,
        price: requestData.price,
    }).then(function (p) {
        ctx.response.status = 200;
    }).catch(function (err) {
        console.log('failed: ' + err);
        ctx.response.status = 500;
    });

    next();

};


module.exports = {
    'GET /resources/products': fnGetAllProducts,
    'POST /resources/products/:id' :  updateProduct,
    'DELETE /resources/products/:id' : deleteProduct,
    'POST /resources/products' :  createProduct,
};