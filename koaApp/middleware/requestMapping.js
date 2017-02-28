/**
 * Created by zhouwanli on 24/02/2017.
 */
'use strict';
const fs = require('fs');
function addMapping(router, mapping) {
    for (var url in mapping) {
        var fun = mapping[url];

        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, fun);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, fun);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('DELETE ')){
            var path = url.substring(7);
            router.delete(path, fun);
            console.log(`register URL mapping: DELETE ${path}`);
        } else if (url.startsWith('PUT ')){
            var path = url.substring(4);
            router.put(path, fun);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, dir) {
    var files = fs.readdirSync(dir);
    var js_files = files.filter((f) => {
         return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        var mapping = require('../' + dir + '/' + f);
        addMapping(router, mapping);
    }
}

module.exports = function(dir){
    var router = require('koa-router')();
    var dir = dir || './controller'
    addControllers(router, dir);
    return router.routes();
}
