const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Users',
        {
            id: {
                type: Sequelize.SMALLINT,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            login: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
            },
        },
        {
            timestamps: false,
        },
    );
};
