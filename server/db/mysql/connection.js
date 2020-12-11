const MYSQL = require('mysql2/promise');
require('dotenv').config();

const connection = MYSQL.createPool({
  host: 'mysql',
  user: 'root',
  password: `${process.env.PASSWORD}`,
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

module.exports.connection = connection;
