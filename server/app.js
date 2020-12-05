const express = require('express');
const indexRouter = require('./routes/index.js');
const middleware = require('./middleware/index.js');
const MySQLConnection = require("./MySQL-Connection.js");
require('dotenv').config();

MySQLConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use(middleware.notFound);
app.use(middleware.onError);

module.exports = app;
