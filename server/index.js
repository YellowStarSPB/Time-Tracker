const express = require('express');
const cors = require('cors');
const db = require('./models');
const { createUser, loginUser, getMe } = require('./controllers/usersControllers');
const { checkAuth } = require('./utils/checkAuth');

const PORT = 4444;

const app = express();
//синхронизация или создание таблиц
db.sequelize.sync();

const corsOptions = {
    origin: `http://localhost:${PORT}`,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Welcome to my api server');
});
app.get('/api/auth', checkAuth, getMe);
app.post('/api/registration', createUser);
app.get('/api/login', loginUser);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started at http://localhost:${PORT}`);
});
