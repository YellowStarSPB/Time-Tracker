const db = require('../models');
const ShoppingList = db.ShoppingList;
const Users = db.Users;
//create purchase

exports.createPurchase = async (req, res) => {
    try {
        const id = req.userID;
        const { item } = req.body;

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

        const { userID, ...data } = shoppingItem.dataValues;

        return res.status(200).json(data);
    } catch (error) {
        console.log(error, 'error');
        return res.status(500).json({
            status: 'error',
            errorMessage: 'Что-то пошло не так',
            mes: error,
        });
    }
};

exports.getPurchase = async (req, res) => {
    console.log(req.headers)
    try {
        const userID = req.userID;

        // const user = await Users.findByPk(userID);

        // if (!user) {
        //     return res.status(404).json({
        //         status: 'error',
        //         message: 'Пользователь не найден',
        //     });
        // }

        const allItems = await ShoppingList.findAll({
            where: {
                userID: userID,
            },
        });

        return res.status(200).json({
            items: allItems,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            items: [],
            errorMessage: 'Что-то пошло не так',
        });
    }
};
