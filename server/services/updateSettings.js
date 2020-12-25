const bcrypt = require('bcrypt');
const mysql = require('../db/mysql/connection.js');

const updateSettingsInDatabase = async (__updateForm, __handle) => {
  if (!__updateForm.Password || !__updateForm.CPassword
        || !__updateForm.userHandle || !__updateForm.Username
        || !__updateForm.Email) {
    throw new Error('Required fields cannot be empty');
  }

  try {
    if (__updateForm.Password === __updateForm.CPassword) {
      const passwordQuery = `SELECT Password FROM TERRABUZZ.UserInformation WHERE Handle='${__handle}';`;
      const [queryPassword] = await mysql.connection.query(passwordQuery);
      const [data] = queryPassword;
      const isMatched = bcrypt.compare(data.Password, __updateForm.Password);
      if (isMatched) {
        const updateQuery = `UPDATE TERRABUZZ.UserInformation 
        SET Email = '${__updateForm.Email}', 
        Username = '${__updateForm.Username}'
        WHERE Handle='${__handle}';`;
        await mysql.connection.query(updateQuery);
      } else {
        throw new Error('Password Does Not Matches');
      }
    } else {
      throw new Error('Password And Confirm Password Does Not Matches');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.updateSettingsInDatabase = updateSettingsInDatabase;
