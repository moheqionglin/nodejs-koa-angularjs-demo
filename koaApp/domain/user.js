/**
 * Created by zhouwanli on 24/02/2017.
 */
const entityManager = require('../dao/entityManager');
const Sequelize = require('sequelize');

var User = entityManager.define('users', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        username: Sequelize.STRING(100),
        password: Sequelize.STRING(500)
    }, {
        timestamps: false
    }

);

module.exports = User;