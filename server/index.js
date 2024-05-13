const express = require('express');
const cors = require('cors');
const db = require('./models');
const { createUser } = require('./controllers/usersControllers');

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

app.post('/api/registration', createUser);


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started at http://localhost:${PORT}`);
});
