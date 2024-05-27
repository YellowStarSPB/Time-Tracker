const jwt = require('jsonwebtoken');
//Создаем мидлвейр для проверки авторизации

exports.checkAuth = (req, res, next) => {
    //парсим токен, полученный при запросе и отрезаем слово Bearer, чтобы передать чистый токен
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    console.log(token, "TOKEN")
    //если токен есть
    if (token) {
        try {
            console.log(jwt.verify(token, '@MoneY_api_v1_VerYSecreT@'))
            //расшифровываем токен по секрутному ключу
            const decoded = jwt.verify(token, '@MoneY_api_v1_VerYSecreT@');
            //добавляем в реквест доп ключ userId с айди юзера
            req.userID = decoded.id;
            next();
        } catch (error) {
            return res.status(404).json({
                message: 'Нет доступа',
            });
        }
    } else {
        return res.status(400).json({
            message: 'Нет доступа',
        });
    }
};
