const bcrypt = require('bcrypt');
const mysql = require('../db/mysql/connection.js');

const postUserCredentialsInDatabase = async (__registerForm) => {
  if (!__registerForm.password || !__registerForm.cpassword
        || !__registerForm.userhandler || !__registerForm.username
        || !__registerForm.email) {
    throw new Error('Required fields cannot be empty');
  }

  if (__registerForm.password === __registerForm.cpassword) {
    const salt = await bcrypt.genSalt(10);
    const newhashedPassword = await bcrypt.hash(__registerForm.password, salt);
    const _query = `INSERT INTO TERRABUZZ.UserInformation (Handle, Username, Email, Password ) 
        VALUES ('${__registerForm.userhandler}', '${__registerForm.username}', 
        '${__registerForm.email}', '${newhashedPassword}' );`;
    try {
      await mysql.connection.query(_query);
      throw new Error('User Registered');
    } catch (error) {
      throw new Error(error.message);
    }
  }
  throw new Error('Password not matched');
};

module.exports.postUserCredentialsInDatabase = postUserCredentialsInDatabase;
