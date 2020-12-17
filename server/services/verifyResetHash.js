// const { ValidationSet } = require('../models/valdation');
// const mysql = require('../db/mysql/connection.js');

const VerifyResetPasswordHash = async (__hash) => {
  if (!__hash) {
    throw new Error('Hash given cannot be empty');
  }
};

module.exports.VerifyResetPasswordHash = VerifyResetPasswordHash;
