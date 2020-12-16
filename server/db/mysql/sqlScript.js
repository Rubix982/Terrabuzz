const path = require('path');
const fs = require('fs');
const MYSQL_CONNECTOR = (require('./connection.js'));

const createAndInsert = async () => {
  let script = fs.readFileSync(path.join(__dirname, './ddl.sql')).toString();
  try {
    const result = await MYSQL_CONNECTOR.connection.query(script);
    console.log('DDL Created Successfully for MySQL');
    console.log(result);
  } catch (error) {
    console.log(`DDL Creation query Not Executed Successfully For MySQL Because --> ${error.message}`);
  }

  script = fs.readFileSync(path.join(__dirname, './insertSql.sql')).toString();
  try {
    const result = await MYSQL_CONNECTOR.connection.query(script);
    console.log('Insertions Done Successfully for MYSQL');
    console.log(result);
  } catch (error) {
    console.log(`Insertion query Not Executed Successfully For MySQL Because --> ${error.message}`);
  }
};

module.exports.createAndInsert = createAndInsert;
