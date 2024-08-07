const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'ShoppingList',
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                // allowNull: false,
            },
            isPurchased: {
                type: DataTypes.BOOLEAN,
            },
            important: {
                type: DataTypes.BOOLEAN,
            },
            userID: {
                type: DataTypes.SMALLINT,
            },
        },
        {
            timestamps: false,
        },
    );
};
