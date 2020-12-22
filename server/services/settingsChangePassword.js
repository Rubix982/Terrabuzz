const bcrypt = require('bcrypt');
const mysql = require('../db/mysql/connection.js');

const changePasswordInSettings = async (__userHandle, __oldPassword,
  __newPassword, __confirmPassword) => {
  if (__newPassword === __confirmPassword) {
    const passwordQuery = `SELECT Password FROM TERRABUZZ.UserInformation WHERE Handle='${__userHandle}';`;

    let queryPassword; let
      compare;
    try {
      [[queryPassword]] = await mysql.connection.query(passwordQuery);
    } catch (error) {
      throw new Error(`MySQL unable to run to fetch password, due to "${error.message}"`);
    }

    const databaseHashedPassword = queryPassword;

    try {
      compare = await bcrypt.compare(__oldPassword, databaseHashedPassword.Password);
    } catch (error) {
      throw new Error('Bad Request In Comparing');
    }

    if (compare) {
      const salt = await bcrypt.genSalt(10);
      const newhashedPassword = await bcrypt.hash(__newPassword, salt);
      const updateQuery = `UPDATE TERRABUZZ.UserInformation SET Password='${newhashedPassword}'
                  WHERE Handle='${__userHandle}';`;
      try {
        await mysql.connection.query(updateQuery);
      } catch (error) {
        throw new Error(`Unable to update password with MySQL query, ${error.message}`);
      }
    } else {
      throw new Error('Given password and database password do not match');
    }
  } else {
    throw new Error('Bad request because given passwords do not match');
  }
};

module.exports.changePasswordInSettings = changePasswordInSettings;
