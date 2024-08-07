const jwt = require('jsonwebtoken');
//Создаем мидлвейр для проверки авторизации

exports.checkAuthorization = async (req, res, next) => {
    //парсим токен, полученный при запросе и отрезаем слово Bearer, чтобы передать чистый токен
    const token = await (req.headers.authorization || '').replace(/Bearer\s?/, '');
    // если токен есть
    if (token) {
        try {
            //расшифровываем токен по секрутному ключу
            const decoded = jwt.verify(token, '@MoneY_api_v1_VerYSecreT@');
            if (decoded.exp < Date.now() / 1000) {
                return res.status(403).json({
                    message: 'Invalid token',
                });
            }
            console.log(decoded);
            //добавляем в реквест доп ключ userId с айди юзера
            req.userID = decoded.id;
            res.status(200).json({
                token,
            });
            next();
        } catch (error) {
            return res.status(404).json({
                status: 'error',
                message: 'Нет доступа 1',
            });
        }
    } else {
        return res.status(400).json({
            message: 'Нет доступа 2',
        });
    }
};
