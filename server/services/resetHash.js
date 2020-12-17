const { ValidationSet } = require('../models/valdation');
const mysql = require('../db/mysql/connection.js');

const InsertValidationDocument = async (__email, __hash) => {
  if (!__email || !__hash) {
    throw new Error('Required parameters cannot be empty!');
  }

  const __query = `SELECT Handle FROM TERRABUZZ.UserInformation WHERE Email='${__email}'`;
  let handle; let
    validation;
  try {
    [handle] = await mysql.connection.query(__query);
  } catch (errorHandle) {
    throw new Error(`User handle for given email cannot be found, error ${errorHandle.message}`);
  }

  const [data] = handle;

  try {
    validation = await ValidationSet.findById(data.Handle);
    validation.verificationHash = __hash;
    validation.resetHash = __hash;
    try {
      await validation.save();
      console.log(`ValidationSet with new hash for user handle ${data.Handle} saved successfull!`);
    } catch (errorValidation) {
      console.error(`Unable to save the validation set! See error, ${errorValidation.message}`);
      throw new Error(`${errorValidation.message}`);
    }
  } catch (errorNotFound) {
    if (validation === null || errorNotFound.message.includes('handler: null')) {
      validation = new ValidationSet({
        _id: data.Handle,
        verificationHash: __hash,
        isVerified: false,
        resetHash: __hash,
        isFirstLogin: false,
      });

      try {
        await validation.save();
        console.log(`ValidationSet for user handle ${data.Handle} saved successfull!`);
      } catch (error) {
        console.error(`Unable to save the validation set! See error, ${error.message}`);
        throw new Error(`${error.message}`);
      }
    } else {
      console.error(`Some error occurred in InsertValidationDocument, error: ${errorNotFound.message}`);
      throw new Error(`${errorNotFound.message}`);
    }
  }
};

module.exports.InsertValidationDocument = InsertValidationDocument;
