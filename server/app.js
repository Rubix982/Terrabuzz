const express = require('express');
// const { Console } = require('console');
const indexRouter = require('./routes/index.js');
const middleware = require('./middleware/index.js');
const MYSQL_CONNECTOR = (require('./db/mysql/connection.js'));
const CreateSQL = (require('./db/mysql/create-sql.js'));
const InsertSQL = (require('./db/mysql/insert-sql.js'));
const MONGOOSE_CONNECTOR = require('./db/mongo/connection.js');
require('dotenv').config();

MYSQL_CONNECTOR.connect();
CreateSQL.create();
InsertSQL.insert();
MONGOOSE_CONNECTOR.connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use(middleware.notFound);
app.use(middleware.onError);

module.exports = app;
