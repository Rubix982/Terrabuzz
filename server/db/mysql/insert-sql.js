const path = require('path');
const fs = require('fs');
const MYSQL_CONNECTOR = (require('./connection.js'));

const insert = () => {
  const script = fs.readFileSync(path.join(__dirname, './insertSql.sql')).toString();
  MYSQL_CONNECTOR.connection.query(script, (err, result) => {
    if (err) {
      console.log(`Query Not Executed Successfully Because --> ${err}`);
    } else {
      console.log('Insertions Done Successfully');
      console.log(result);
    }
  });
};

module.exports.insert = insert;