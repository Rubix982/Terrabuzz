const bcrypt = require('bcrypt');
const mysql = require('../db/mysql/connection.js');

const changePasswordForUser = async (__password, __handle) => {
  const salt = await bcrypt.genSalt(10);
  const newhashedPassword = await bcrypt.hash(__password, salt);

  if (!__handle) {
    throw new Error('Required fields cannot be empty!');
  }

  const __query = `UPDATE TERRABUZZ.UserInformation SET Password='${newhashedPassword}' WHERE Handle='${__handle}';`;

  try {
    await mysql.connection.query(__query);
    console.log('Successfully ran MySQL query');
  } catch (error) {
    console.log(`Error while running MySQL query, in changePasswordForUser, error ${error.message}`);
    throw new Error(error.message);
  }
};

module.exports.changePasswordForUser = changePasswordForUser;
