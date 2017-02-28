/**
 * Created by zhouwanli on 22/02/2017.
 */
'use strict'
var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');