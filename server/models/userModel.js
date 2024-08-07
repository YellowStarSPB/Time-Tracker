const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Users',
        {
            login: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
            },
            token: {
                type: Sequelize.STRING,
            },
        },
        {
            timestamps: false,
        },
    );
};
