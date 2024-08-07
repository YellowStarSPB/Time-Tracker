const express = require('express');
const cors = require('cors');
const db = require('./models');
const { createUser, loginUser, getMe } = require('./controllers/usersControllers');
const { checkAuthorization } = require('./utils/checkAuthorization');
const { createPurchase, getPurchase } = require('./controllers/shoppingListControllers');

const PORT = 4444;

const app = express();
//синхронизация или создание таблиц
// db.sequelize
//     .sync({ alter: true })
//     .then(() => console.log('Database & tables update!'))
//     .catch((error) => console.log('Filed update database:('));
db.sequelize.sync();
const corsOptions = {
    origin: `http://localhost:${PORT}`,
};

app.use(cors(corsOptions.origin));
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Welcome to my api server');
});

//auth methods
app.get('/api/authorization', checkAuthorization, /* getMe */);
app.post('/api/registration', createUser);
app.post('/api/login', loginUser);
//shoping list methods
app.post('/api/purchase-list', /* checkAuthorization, */ createPurchase);
app.get('/api/purchase-list', /* checkAuthorization, */ getPurchase);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started at http://localhost:${PORT}`);
});
