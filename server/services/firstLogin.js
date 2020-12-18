const ValidationSet = require('../models/valdation');

const checkForFirstLogin = async (__handler) => {
  let result;
  try {
    result = await ValidationSet.findById(__handler);
  } catch (error) {
    throw new Error('No such record found');
  }

  console.log(result);
};

module.exports.checkForFirstLogin = checkForFirstLogin;
