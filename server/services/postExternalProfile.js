const mysql = require('../db/mysql/connection.js');

const postExternDataToDB = async (__editInfoComponentForm, __userHandle) => {
  try {
    if (__editInfoComponentForm.location) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Location='${__editInfoComponentForm.location}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }

    if (__editInfoComponentForm.biography) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Biography='${__editInfoComponentForm.biography}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }

    if (__editInfoComponentForm.activities) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Activity='${__editInfoComponentForm.activities}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }

    if (__editInfoComponentForm.interest) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Youtube='${__editInfoComponentForm.youtube}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }
  } catch (error) {
    throw new Error(`Unable to save changes to MySQL, due to error "${error.message}"`);
  }
};

module.exports.postExternDataToDB = postExternDataToDB;
