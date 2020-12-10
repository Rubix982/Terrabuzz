const { verifyAccessToken } = require('../services/auth.js');

module.exports.notFound = (req, res, next) => {
  const error = new Error('ERROR 404');
  res.status(404);
  next(error);
};

module.exports.onError = (error, req, res) => {
  console.log(`Error: ${error.message}`);
  if (error.message) {
    res.json({ message: error.message });
  } else {
    res.json({
      message: 'Some error occurred while processing you request.',
    });
  }
};

module.exports.authorizeUser = (req, res, next) => {
  try {
    const token = req.cookies['access-token'];
    const { handle } = verifyAccessToken(token);
    req.userHandle = handle;
    return next();
  } catch (error) {
    return res.status(403).json({ msg: 'Unauthorized! Please login again.' });
  }
};
