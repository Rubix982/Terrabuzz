const MYSQL_CONNECTOR = require('../db/mysql/connection.js');

const searchUserProfiles = async (__username) => {
  const [data] = await MYSQL_CONNECTOR.connection.query(`SELECT Username, Handle FROM TERRABUZZ.UserInformation WHERE Handle LIKE BINARY '%${__username}%'`);
  return (data);
};

const searchInterestEntries = async (__interest) => {
  console.log(__interest);
};

module.exports.searchUserProfiles = searchUserProfiles;
module.exports.searchInterestEntries = searchInterestEntries;
