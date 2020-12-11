const path = require('path');
const fs = require('fs');
const MYSQL_CONNECTOR = (require('./connection.js'));

const insert = async () => {
  const script = fs.readFileSync(path.join(__dirname, './insertSql.sql')).toString();
  try {
    const result = await MYSQL_CONNECTOR.connection.query(script);
    console.log('Insertions Done Successfully');
    console.log(result);
  } catch (error) {
    console.log(`Query Not Executed Successfully Because --> ${error.message}`);
  }
};

module.exports.insert = insert;
