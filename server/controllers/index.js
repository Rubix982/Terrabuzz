const { generateAccessToken } = require('../services/auth.js');
const { createAndPushPost } = require('../services/publishPost.js');
const { getHomePagePosts } = require('../services/homePage.js');
const { getSinglePost } = require('../services/getSinglePost.js');
const mysql = (require('../db/mysql/connection.js'));

module.exports.getHomePage = async (req, res) => {
  try {
    const posts = await getHomePagePosts();
    return res.json(posts);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
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

module.exports.getPost = async (req, res) => {
  try {
    const postID = req.params.id;
    const data = await getSinglePost(postID);
    res.json({ msg: `postID to be queried: ${postID}`, data });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
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
  if (req.body.password === req.body.cpassword) {
    const _query = `INSERT INTO TERRABUZZ.User_Information (Handler, Username, Email, Password ) 
    VALUES ('${req.body.userhandler}', '${req.body.username}', '${req.body.email}', '${req.body.password}' );`;
    mysql.connection.query(_query, (error, output) => {
      if (!error) {
        console.log(output);
        return res.status(200).json({ msg: 'User Registered' });
      }
      return res.status(401).json({ msg: error.message });
    });
  }
  return res.status(401).json({ msg: 'Password not matched' });
};

module.exports.newPassword = (req, res) => {
  res.json({ msg: 'New password generation link issued!!' });
};

module.exports.resetPassword = (req, res) => {
  res.json({ msg: 'Password reset!!' });
};
