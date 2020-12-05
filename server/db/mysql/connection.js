const MYSQL = require('mysql2');
require('dotenv').config();

const connection = MYSQL.createConnection({
  host: 'mysql',
  user: 'root',
  password: `${process.env.PASSWORD}`,
  database: `${process.env.MYSQL_DATABASE}`,
});

const connect = () => {
  connection.connect((error) => {
    if (!error) {
      return console.log('Connected to MYSQL Successfully!');
    }
    return console.log('MYSQL Not Connected');
  });
};

module.exports.connect = connect;
module.exports.connection = connection;
