const db = require('../models');
const ShoppingList = db.ShoppingList;
const Users = db.Users;
//create purchase

exports.createPurchase = async (req, res) => {
    try {
        const { id, item } = req.body;

        if (id && item) {
            // Проверяем, существует ли пользователь с указанным userId
            const user = await Users.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Пользователь не найден',
                });
            }

            const shoppingItem = await ShoppingList.create({
                userID: id,
                ...item,
            });

            return res.status(200).json(shoppingItem);
        }
    } catch (error) {
        console.log(error, 'error');
        return res.status(500).json({
            status: 'error',
            message: 'Что-то пошло не так',
            errorMessage: error,
        });
    }
};

exports.getPurchase = async (req, res) => {
    try {
        const { userID } = req.body;

        const user = await Users.findByPk(userID);

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'Пользователь не найден',
            });
        }

        const allItems = await ShoppingList.findAll({
            where: {
                userID: userID,
            },
        });

        return res.status(200).json(allItems);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            message: 'Что-то пошло не так',
            errorMessage: error,
        });
    }
};
