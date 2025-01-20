const express = require('express');
const path = require('path');
const cors = require('cors');

const debug = require('debug')('app:server');
const morgan = require('morgan');
const sequelize = require('./src/db');
const colors = require('colors');
const dotenv = require('dotenv');

const app = express();
const routes = require('./src/routes/index')
app.use(cors()); //allows for cross-origin resource sharing

sequelize
.authenticate()
.then((res) => debug(colors.rainbow('Database is connected')))
.catch((err) => {debug(colors.red.inverse('Error connecting to Database'), err);
    process.exit(1);
});

dotenv.config({path: path.join(__dirname, '..', 'env')});
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(express.json());

const PORT = process.env.PORT || 8000;
app.use('/', routes);

const server = app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`.green);
});