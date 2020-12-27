const { ValidationSet } = require('../models/valdation.js');

const getUserVerificationStatus = async (__handle) => {
  try {
    const userValidationDetails = await ValidationSet.findById(__handle);
    return (userValidationDetails.isVerified);
  } catch (error) {
    throw new Error(error.message);
  }
};

const verifyUser = async (__hash) => {
  try {
    const userValidationDetails = await ValidationSet.findOne({ verificationHash: __hash });
    userValidationDetails.isVerified = true;
    await userValidationDetails.save();
    return (userValidationDetails.isVerified);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getUserVerificationStatus = getUserVerificationStatus;
module.exports.verifyUser = verifyUser;
