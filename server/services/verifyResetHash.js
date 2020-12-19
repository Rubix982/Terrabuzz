const { ValidationSet } = require('../models/valdation');

const VerifyResetPasswordHash = async (__hash) => {
  if (!__hash) {
    throw new Error('Hash given cannot be empty');
  }

  let response;
  try {
    response = await ValidationSet.find({ resetHash: __hash });
  } catch (error) {
    throw new Error(error.wmessage);
  }

  const receivedHash = response[0].resetHash;
  if (receivedHash === __hash) {
    return response[0]._id;
  }
  throw new Error('Given hash and the current hash do not match!');
};

module.exports.VerifyResetPasswordHash = VerifyResetPasswordHash;
