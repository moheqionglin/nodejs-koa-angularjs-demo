/**
 * Created by zhouwanli on 24/02/2017.
 */
const entityManager = require('../dao/entityManager');
const Sequelize = require('sequelize');

var Order = entityManager.define('orders', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        name: Sequelize.STRING(100),
        street: Sequelize.STRING(500),
        city: Sequelize.STRING(100),
        state: Sequelize.STRING(100),
        zip: Sequelize.STRING(100),
        country: Sequelize.STRING(100),
        giftwrap: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false} ,
        products: Sequelize.JSON
    }, {
        timestamps: false
    }

);

module.exports = Order;