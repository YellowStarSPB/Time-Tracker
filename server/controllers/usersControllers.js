const db = require('../models');
const Users = db.Users;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create user
exports.createUser = async (req, res) => {
    try {
        //достаем данные
        const { login, password } = await req.body;

        if (login && password) {
            //шифруем пароль
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            //ищем юзера
            const findUser = await Users.findOne({ where: { login: login } });

            if (findUser) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Пользователь с таким логином уже существует',
                });
            } else if (!findUser) {
                //создаем юзера
                const user = await Users.create({
                    login: login,
                    password: hash,
                });
                //создаем токен
                const token = jwt.sign(
                    {
                        id: user.id,
                    },
                    '@MoneY_api_v1_VerYSecreT@',
                    {
                        expiresIn: '30d',
                    },
                );

                //отправляем данные на клиент
                res.status(200).json({
                    status: 'success',
                    message: 'Регистрация прошла успешно',
                    userData: { id: user.id, login: user.login, token },
                });
            }
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Укажите логин или пароль',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error,
        });
    }
};

//Login user
exports.loginUser = async (req, res) => {
    const { login, password } = await req.body;
    console.log(req.body, login)
    try {
        if (login && password) {
            const user = await Users.findOne({ where: { login: req.body.login } });

            if (!user) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Не удалось найти пользователя',
                });
            }

            //проверяем сходятся ли пароли присланные по запросу и тот, который есть в базе
            const isValidPass = await bcrypt.compare(req.body.password, user.password);

            //проверяем сходятся ли логины присланные по запросу и тот, который есть в базе
            const isValidLogin = user.login === req.body.login;

            //Если пароль или логин неверный, возвращем 400 с сообщением
            if (!isValidPass || !isValidLogin) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Неверный логин или пароль',
                });
            }

            //создаем новый токен
            const token = jwt.sign(
                {
                    id: user.id,
                },
                '@MoneY_api_v1_VerYSecreT@',
                {
                    expiresIn: '30d',
                },
            );

            res.status(200).json({
                status: 'success',
                message: 'Пользователь найден, доступ разрешен',
                userData: { id: user.id, login: user.login, token },
            });
        } else {
            return res.status(400).json({
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

//get auth user
exports.getMe = async (req, res) => {
    try {
        const user = await Users.findOne({ where: { id: req.userId } });

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'Пользователь не найден',
            });
        }
        //Если пользователь нашелся:
        //при помощи деструктуризации вытаскиваем пароль, чтобы отправить данные о пользователе без пароля
        const { password, ...userData } = user.dataValues;
        //отправляем ответ сервера с данными о пользователе
        res.status(200).json({
            status: 'success',
            userData,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'error',
            message: 'Нет доступа',
        });
    }
};
