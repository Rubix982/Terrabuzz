const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const indexRouter = require('./routes/index.js');
const middleware = require('./middleware/index.js');
const sqlScripts = require('./db/mysql/sqlScript');
const neo4jScript = require('./db/neo4j/neoScript.js');
const MONGOOSE_CONNECTOR = require('./db/mongo/connection.js');

const app = express();
require('dotenv').config();

sqlScripts.createAndInsert();
MONGOOSE_CONNECTOR.connect();
neo4jScript.runNeo4jScript();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors({ origin: "false", credentials: true }));
app.use('/', indexRouter);
app.use(middleware.notFound);
app.use(middleware.onError);

module.exports = app;
