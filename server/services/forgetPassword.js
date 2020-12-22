const bcrypt = require('bcrypt');
const mysql = require('../db/mysql/connection.js');
const { InsertValidationDocument } = require('./resetHash.js');
const { GmailMailer } = require('./gmailAuth.js');
const { HTMLResetPasswordForm } = require('./template.js');

const forgetPasswordUpdation = async (__email) => {
  // If the user exists in the database
  try {
    const __query = `SELECT Handle FROM TERRABUZZ.UserInformation WHERE Email='${__email}'`;
    const [result] = await mysql.connection.query(__query);
    if ([result[0]][0] === undefined) throw new Error('Invalid email');
  } catch (error) {
    throw new Error(`Request email to send reset password cannot be found. Error is "${error.message}"`);
  }

  try {
    const salt = await bcrypt.genSalt(10);
    let hashedResetLink = await bcrypt.hash(__email, salt);
    hashedResetLink = hashedResetLink.replaceAll('/', '');
    hashedResetLink = hashedResetLink.replaceAll('.', '');
    try {
      await InsertValidationDocument(__email, hashedResetLink);
    } catch (error) {
      throw new Error(`InsertValidationDocument failed due to error ${error.message}`);
    }
    const mail = new GmailMailer(__email, HTMLResetPasswordForm(hashedResetLink));
    mail.send();
    throw new Error('Recovery email sent!');
  } catch (error) {
    throw new Error(`Unable to send a reset email. Encountered error "${error.message}"`);
  }
};

module.exports.forgetPasswordUpdation = forgetPasswordUpdation;
