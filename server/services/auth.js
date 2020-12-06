const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyUserCredentials = ({ email: __email, password: __password }) => {
  const user = {
    handle: 'hassanzhd',
    email: 'h@gmail.com',
    password: '123',
  };

  if (user.email === __email) {
    if (user.password === __password) {
      return ({ status: true, handle: user.handle });
    }
  }
  return ({ status: false, handle: undefined });
};

const generateAccessToken = (__data) => {
  const { status, handle } = verifyUserCredentials(__data);
  if (status) {
    const token = jwt.sign({ handle }, `${process.env.JWT_SECRET}`, { expiresIn: '3d' });
    console.log(token);
    return token;
  }
  throw new Error('Please login with valid credentials!');
};

module.exports.generateAccessToken = generateAccessToken;
module.exports.verifyUserCredentials = verifyUserCredentials;

const verifyAccessToken = (__token) => {
  try {
    const decodedPayload = jwt.verify(__token, `${process.env.JWT_SECRET}`);
    console.log(decodedPayload);
    return decodedPayload;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.verifyAccessToken = verifyAccessToken;
