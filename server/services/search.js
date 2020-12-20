/* eslint-disable no-await-in-loop */
const MYSQL_CONNECTOR = require('../db/mysql/connection.js');
const { Post } = require('../models/post.js');
const InterestedInEntry = require('../models/InterestedInEntry.js');

const searchUserProfiles = async (__username) => {
  try {
    const [data] = await MYSQL_CONNECTOR.connection.query(`SELECT Username, Handle FROM TERRABUZZ.UserInformation WHERE Handle LIKE BINARY '%${__username}%'`);
    return (data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const convertObjectArrayToArray = (__array, __key) => {
  const convertedArray = __array.map((element) => (element[__key]));
  return (convertedArray);
};

const searchInterestEntries = async (__interest) => {
  try {
    const regexExpression = new RegExp(__interest, 'g');
    const postData = await Post.find({ interest: { $regex: regexExpression } }).populate('likes').populate('comments').exec();

    const profilePictures = [];
    for (let i = 0; i < postData.length; i += 1) {
      const [[data]] = await MYSQL_CONNECTOR.connection.query(`SELECT ProfilePicture FROM TERRABUZZ.UserInformation WHERE Handle='${postData[i].handle}'`);
      profilePictures.push(data.ProfilePicture);
    }

    const interestedIn = [];
    const [interestedUsers] = await MYSQL_CONNECTOR.connection.query(`SELECT Handle FROM TERRABUZZ.Interest WHERE Topic='${__interest}'`);

    for (let i = 0; i < interestedUsers.length; i += 1) {
      const [[userInformation]] = await MYSQL_CONNECTOR.connection.query(`SELECT Username, ProfilePicture FROM TERRABUZZ.UserInformation WHERE Handle='${interestedUsers[i].Handle}'`);

      let [interests] = await MYSQL_CONNECTOR.connection.query(`SELECT Topic FROM TERRABUZZ.Interest WHERE Handle='${interestedUsers[i].Handle}'`);

      interests = convertObjectArrayToArray(interests, 'Topic');
      const entry = new InterestedInEntry(interestedUsers[i].Handle, userInformation, interests);
      interestedIn.push(entry);
    }

    return (
      { query: __interest, postedOn: { postData, authorData: profilePictures }, interestedIn }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.searchUserProfiles = searchUserProfiles;
module.exports.searchInterestEntries = searchInterestEntries;
module.exports.convertObjectArrayToArray = convertObjectArrayToArray;
