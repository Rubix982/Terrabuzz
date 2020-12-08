const { generateAccessToken } = require('../services/auth.js');
const { createAndPushPost } = require('../services/publishPost.js');

module.exports.getHomePage = (req, res) => {
  res.json({ msg: 'HELLO WORLD!!' });
};

module.exports.getUserFeed = (req, res) => {
  res.json({ msg: `@${req.userHandle} feed!!` });
};

module.exports.getUserProfile = (req, res) => {
  const userID = req.params.id;
  res.json({ msg: `UserID to be queried: ${userID}` });
};

module.exports.publishPost = async (req, res) => {
  try {
    createAndPushPost(req.body, req.userHandle);
    return res.json({ msg: 'Post posted successfully!' });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports.getPost = (req, res) => {
  const postID = req.params.id;
  res.json({ msg: `postID to be queried: ${postID}` });
};

module.exports.searchPost = (req, res) => {
  const { topic } = req.query;
  res.json({ msg: `Post topic to be queried: ${topic}` });
};

module.exports.searchUser = (req, res) => {
  const { username } = req.query;
  res.json({ msg: `Username to be queried: ${username}` });
};

module.exports.getSettings = (req, res) => {
  res.json({ msg: 'User settings!!' });
};

module.exports.updateSettings = (req, res) => {
  res.json({ msg: 'Settings updated!!' });
};

module.exports.loginUser = (req, res) => {
  try {
    const token = generateAccessToken(req.body);
    res.cookie('access-token', token, { httpOnly: true, sameSite: true });
    return res.status(200).json({ msg: 'User logged in!!' });
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

module.exports.registerUser = (req, res) => {
  res.json({ msg: 'User registered!!' });
};

module.exports.newPassword = (req, res) => {
  res.json({ msg: 'New password generation link issued!!' });
};

module.exports.resetPassword = (req, res) => {
  res.json({ msg: 'Password reset!!' });
};
