const dbConfig = require('../config/db.config.js');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    },
    { freezeTableName: true },
);

const Users = require('./userModel.js')(sequelize)


module.exports = {
    sequelize,
    Users
};

