const mysql = require('../db/mysql/connection.js');

const getSettingsFromDatabase = async (__userHandle) => {
  try {
    const _query = `select Username, Email,
        Handle from TERRABUZZ.UserInformation where Handle='${__userHandle}';`;
    const output = await mysql.connection.query(_query);
    return output;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getSettingsFromDatabase = getSettingsFromDatabase;
