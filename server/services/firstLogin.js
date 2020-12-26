const { ValidationSet } = require('../models/valdation');

const checkForFirstLogin = async (__handler) => {
  try {
    // See if the document already exists for such handle
    // if it does, update it
    let result = await ValidationSet.findById(__handler);

    if (result === null) {
      result = new ValidationSet({
        _id: __handler,
        verificationHash: '',
        isVerified: false,
        resetHash: '',
        isFirstLogin: true,
      });

      try {
        await result.save();
      } catch (error) {
        throw new Error(`Unable to save the new validation model, error is "${error.message}"`);
      }
    }

    return result.isFirstLogin;
  } catch (error) {
    throw new Error(`Unable to search the Validation Set - maybe a connection error? Error thrown is, "${error.message}".`);
  }
};

module.exports.checkForFirstLogin = checkForFirstLogin;
