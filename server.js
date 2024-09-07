//<!--===============================================================================================-->
const express = require('express');
const http = require('http');
const cors = require('cors');
const PORT = 3000;
//<!--===============================================================================================-->
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//<!--===============================================================================================-->
app.use('/user', require('./routes/userRoutes'));
//<!--===============================================================================================-->
const db = require('./models');
db.sequelize.authenticate()
    .then(() => {
        console.log('DB CONNECTED')
        app.listen(PORT, () => {
            console.log(`YOUR PORT IS: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log('DB NOT CONNECTED')
        console.log(err)
    })
    // npm start: to start server.js w/ nodemon
    // npm run migration: to run migrations
    // npm run remove-migration: to remove recent migration
    // npm run remove-migrations: to remove all migrations
//<!--===============================================================================================-->
