const path = require('path');
const fs = require('fs');
const MYSQL_CONNECTOR = (require('./connection.js'));

const create = () => {
  const script = fs.readFileSync(path.join(__dirname, './ddl.sql')).toString();
  MYSQL_CONNECTOR.connection.query(script, (err, result) => {
    if (err) {
      console.log(`Query Not Executed Successfully Because --> ${err}`);
    } else {
      console.log('Database Created Successfully');
      console.log(result);
    }
    // console.log(query);
  });
};

module.exports.create = create;
