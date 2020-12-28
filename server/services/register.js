const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mysql = require('../db/mysql/connection.js');
const { PostList } = require('../models/post.js');
const { ValidationSet } = require('../models/valdation.js');
const { GmailMailer } = require('./gmailAuth.js');
const { HTMLResetPasswordForm } = require('./template.js');

const emailData = {
  title: 'Verify your account',
  content: 'You\'re receiving this e-mail because you are required to verify your Terrabuzz account.',
  description: 'Please tap the button below to verify your account.',
  route: 'verify',
  buttonText: 'Verify account',
};

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
      const userPostList = new PostList({
        _id: __registerForm.userhandler,
        payload: [],
      });
      await userPostList.save();

      const verificationHash = crypto.randomBytes(50).toString('hex');
      const validationSet = new ValidationSet({
        _id: __registerForm.userhandler,
        verificationHash,
      });
      await validationSet.save();
      const mail = new GmailMailer(
        __registerForm.email,
        HTMLResetPasswordForm(
          verificationHash,
          emailData.title,
          emailData.content,
          emailData.description,
          emailData.route,
          emailData.buttonText,
        ),
      );
      await mail.send();
    } catch (error) {
      throw new Error(error.message);
    }
  } else {
    throw new Error('Password not matched');
  }
};

module.exports.postUserCredentialsInDatabase = postUserCredentialsInDatabase;
