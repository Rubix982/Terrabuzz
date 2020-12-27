const mysql = require('../db/mysql/connection.js');

const getNavbarInformationFromDatabase = async (__userHandle) => {
  try {
    const query = `SELECT Username, ProfilePicture FROM TERRABUZZ.UserInformation WHERE Handle='${__userHandle}';`;
    const output = await mysql.connection.query(query);
    return output;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getNavbarInformationFromDatabase = getNavbarInformationFromDatabase;
