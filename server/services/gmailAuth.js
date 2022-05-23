const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const { OAuth2 } = google.auth;
require('dotenv').config();

const OAuth2Client = new OAuth2(
  process.env.EMAIL_CLIENT_ID,
  process.env.EMAIL_CLIENT_SECRET,
  process.env.GMAIL_URL, // redirect url
);

class GmailMailer {
  constructor(__to, __html) {
    this.mailObj = {
      from: process.env.EMAIL_CLIENT_EMAIL,
      to: __to,
      subject: 'Verification email from Terrabuzz',
      generateTextFromHTML: true,
      html: __html,
    };
  }

  async send() {
    OAuth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });
    const accessToken = await OAuth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_CLIENT_MAIL,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken,
      },
    });

    await smtpTransport.sendMail(this.mailObj);
  }
}

module.exports.GmailMailer = GmailMailer;
