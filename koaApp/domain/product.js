/**
 * Created by zhouwanli on 24/02/2017.
 */
const entityManager = require('../dao/entityManager');
const Sequelize = require('sequelize');

var Product = entityManager.define('products', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        name: Sequelize.STRING(100),
        description: Sequelize.STRING(500),
        category: Sequelize.STRING(100),
        price: Sequelize.DECIMAL(10, 2)
    }, {
        timestamps: false
    }

);

module.exports = Product;