/**
 * Created by zhouwanli on 24/02/2017.
 */
const Sequelize = require('sequelize');
const config = require('./dbConf');

var sequelize = new Sequelize('shop', 'root', null);

module.exports = sequelize;