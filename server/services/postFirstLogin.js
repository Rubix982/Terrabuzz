const { ValidationSet } = require('../models/valdation');
const mysql = require('../db/mysql/connection.js');

const postUserInformationForBio = async (__handler, __userInformationBlob) => {
  // Let's turn the ValidationSet to true because
  // the first login form has been submitted.
  let result; let
    query;
  try {
    result = await ValidationSet.findById(__handler);
    result.isFirstLogin = false;

    try {
      result.save();
    } catch (errorValidtion) {
      console.log('hereerererere - 1.1');
      throw new Error(`Unable to save fetched Validation Set, due to error ${errorValidtion.message}`);
    }
  } catch (error) {
    throw new Error(`Unable to fetch the relevant validation set record, due to error "${error.message}"`);
  }

  // Insert into MySQL database
  query = `UPDATE TERRABUZZ.UserInformation SET Activities='${__userInformationBlob.activities}' WHERE Handle='${__handler}'`;
  try {
    await mysql.connection.query(query);
  } catch (errorMySqlConnection) {
    throw new Error(`Unable to insert values into MySQL UserInformation connection, error is "${errorMySqlConnection.message}"`);
  }

  query = `UPDATE TERRABUZZ.UserInformation SET Biography='${__userInformationBlob.biography}' WHERE Handle='${__handler}'`;
  try {
    await mysql.connection.query(query);
  } catch (errorMySqlConnection) {
    throw new Error(`Unable to insert values into MySQL UserInformation connection, error is "${errorMySqlConnection.message}"`);
  }

  query = `UPDATE TERRABUZZ.UserInformation SET ProfilePicture='${__userInformationBlob.profilePicture}' WHERE Handle='${__handler}'`;
  try {
    await mysql.connection.query(query);
  } catch (errorMySqlConnection) {
    throw new Error(`Unable to insert values into MySQL UserInformation connection, error is "${errorMySqlConnection.message}"`);
  }

  query = `UPDATE TERRABUZZ.UserInformation SET Location='${__userInformationBlob.location}' WHERE Handle='${__handler}'`;
  try {
    await mysql.connection.query(query);
  } catch (errorMySqlConnection) {
    throw new Error(`Unable to insert values into MySQL UserInformation connection, error is "${errorMySqlConnection.message}"`);
  }

  const interestList = __userInformationBlob.interests.split(' ');

  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < interestList.length; i += 1) {
    query = `INSERT INTO TERRABUZZ.Interest (Topic, Handle) 
        VALUES ('${interestList[i]}', '${__handler}')`;
    try {
      await mysql.connection.query(query);
    } catch (errorMySQLInterest) {
      throw new Error(`Unable to insert values into MySQL Interest connection, error is ${errorMySQLInterest.message}`);
    }
  }
  /* eslint-enable no-await-in-loop */
};

module.exports.postUserInformationForBio = postUserInformationForBio;
