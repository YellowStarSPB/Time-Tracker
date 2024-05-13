const db = require('../models');
const Users = db.Users;

// Create user
exports.createUser = async (req, res) => {
    const { login, password } = req.body;
    try {
        if (login && password) {
            const user = await Users.create({
                login: login,
                password: password,
            });

            if (!user) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Не удалось зарегистрировать пользователя',
                });
            }
            res.status(200).json({
                status: 'success',
                message: 'Регистрация прошла успешно',
            });
        } else {
            return res.status(500).json({
                status: 'error',
                message: 'Укажите логин или пароль',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.errors[0].message,
        });
    }
};
