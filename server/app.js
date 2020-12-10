const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const indexRouter = require('./routes/index.js');
const middleware = require('./middleware/index.js');
const MYSQL_CONNECTOR = (require('./db/mysql/connection.js'));
const CreateSQL = (require('./db/mysql/create-sql.js'));
const InitializeSQL = (require('./db/mysql/insert-sql.js'));
const MONGOOSE_CONNECTOR = require('./db/mongo/connection.js');
require('dotenv').config();

MYSQL_CONNECTOR.connect();
CreateSQL.create();
InitializeSQL.insert();
MONGOOSE_CONNECTOR.connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use('/', indexRouter);
app.use(middleware.notFound);
app.use(middleware.onError);

module.exports = app;
