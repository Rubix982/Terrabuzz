const mysql = require('../db/mysql/connection.js');

const updateSettingsInDatabase = async (__updateForm) => {
  if (!__updateForm.Password || !__updateForm.CPassword
        || !__updateForm.userHandle || !__updateForm.Username
        || !__updateForm.Email) {
    throw new Error('Required fields cannot be empty');
  }

  try {
    // Checking if the userhandle-to-be-changed-to isnt' already assigned
    // to some other user
    const userHandleQuery = `SELECT Email FROM TERRABUZZ.UserInformation WHERE Handle='${__updateForm.userHandle}';`;
    const [[userHandleQueryResult]] = await mysql.connection.query(userHandleQuery);

    if (userHandleQueryResult !== null) {
      throw new Error('Requested userhandler to be changed to is already allocated to some user');
    }

    // Checking if the two passwords entered are the same
    if (__updateForm.Password === __updateForm.CPassword) {
      const passwordQuery = `SELECT Password FROM TERRABUZZ.UserInformation WHERE Handle='${__updateForm.userHandle}';`;
      const [queryPassword] = await mysql.connection.query(passwordQuery);
      const [data] = queryPassword;

      if (data.Password === __updateForm.Password) {
        const updateQuery = `UPDATE TERRABUZZ.UserInformation 
                            SET Email = '${__updateForm.Email}', Username = '${__updateForm.Username}'
                            WHERE Handle='${__updateForm.userHandle}';`;
        await mysql.connection.query(updateQuery);
        throw new Error('Updated');
      }
      throw new Error('Bad Request');
    }
    throw new Error('Bad Request');
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.updateSettingsInDatabase = updateSettingsInDatabase;
