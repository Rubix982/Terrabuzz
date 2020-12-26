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
      const interestList = __editInfoComponentForm.interest.split(' ');

      // Get list of already existing list of interests for the given user handle
      const getInterestListQuery = `SELECT Topic FROM TERRABUZZ.Interest WHERE Handle=${__userHandle};`;
      const getInterestList = await mysql.connection.query(getInterestListQuery);

      const queryInterestList = getInterestList[0].Topic;

      const newInterestList = interestList.filter((value) => queryInterestList.includes(value));

      const deleteInterestQuery = `DELETE FROM TERRABUZZ.Interest WHERE Handle=${__userHandle}`;
      await mysql.connection.query(deleteInterestQuery);

      for (let i = 0; i < newInterestList.length; i += 1) {
        /* eslint-disable no-await-in-loop */
        const insertInterestQuery = `INSERT INTO TERRABUZZ.Interest ( Topic, Handle ) VALUES ( ${newInterestList[i]}, ${__userHandle} );`;
        await mysql.connection.query(insertInterestQuery);
      }
    }
  } catch (error) {
    throw new Error(`Unable to save changes to MySQL, due to error "${error.message}"`);
  }
};

module.exports.postExternDataToDB = postExternDataToDB;
