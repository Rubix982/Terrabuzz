const mysql = require('../db/mysql/connection.js');

const changePasswordForUser = async (__hashedPassword, __handle) => {
  if (!__hashedPassword || !__handle) {
    throw new Error('Required fields cannot be empty!');
  }

  const __query = `UPDATE TERRABUZZ.UserInformation SET Password='${__hashedPassword}' WHERE Handle='${__handle}';`;

  try {
    await mysql.connection.query(__query);
    console.log('Successfully ran MySQL query');
  } catch (error) {
    console.log(`Error while running MySQL query, in changePasswordForUser, error ${error.message}`);
    throw new Error(error.message);
  }
};

module.exports.changePasswordForUser = changePasswordForUser;
