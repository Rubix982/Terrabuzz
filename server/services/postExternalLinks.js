const mysql = require('../db/mysql/connection.js');

const postExternDataToDB = async (__editInfoComponentForm, __userHandle) => {
  try {
    if (__editInfoComponentForm.facebook) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Facebook='${__editInfoComponentForm.facebook}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }

    if (__editInfoComponentForm.twitter) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Twitter='${__editInfoComponentForm.twitter}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }

    if (__editInfoComponentForm.website) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Website='${__editInfoComponentForm.website}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }

    if (__editInfoComponentForm.instagram) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Instagram='${__editInfoComponentForm.instagram}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }

    if (__editInfoComponentForm.linkedin) {
      const query = `UPDATE TERRABUZZ.UserInformation SET LinkedIn='${__editInfoComponentForm.linkedin}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }

    if (__editInfoComponentForm.youtube) {
      const query = `UPDATE TERRABUZZ.UserInformation SET Youtube='${__editInfoComponentForm.youtube}' 
            WHERE Handle='${__userHandle}'`;
      await mysql.connection.query(query);
    }
  } catch (error) {
    throw new Error(`Unable to save changes to MySQL, due to error "${error.message}"`);
  }
};

module.exports.postExternDataToDB = postExternDataToDB;
