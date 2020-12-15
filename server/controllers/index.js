const bcrypt = require('bcrypt');
const { generateAccessToken } = require('../services/auth.js');
const { createAndPushPost } = require('../services/publishPost.js');
const { getHomePagePosts } = require('../services/homePage.js');
const { getSinglePost } = require('../services/getSinglePost.js');
const { getLikeStatus, updateLike } = require('../services/like.js');
const { getProfileData } = require('../services/profile.js');
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

module.exports.getUserProfile = async (req, res) => {
  try {
    const userID = req.params.handle;
    const data = await getProfileData(userID);
    res.json({ msg: `UserID to be queried: ${userID}`, data });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
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

module.exports.addComment = async (req, res) => {
  try {
    const postID = req.params.id;
    const data = await getSinglePost(postID);
    res.json({ msg: `postID to be queried: ${postID}`, data });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.getLike = async (req, res) => {
  try {
    const postID = req.params.id;
    const status = await getLikeStatus(postID, req.userHandle);
    res.json({ msg: `Get like status of postID ${postID}`, status });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.addLike = async (req, res) => {
  try {
    const postID = req.params.id;
    const status = await updateLike(postID, req.userHandle);
    res.json({ msg: 'Like updated successfully', status });
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

module.exports.getSettings = async (req, res) => {
  try {
    const _query = `select Username, Email,
  Handler from TERRABUZZ.UserInformation where Handler='${req.query.Handle}';`;
    let output;
    try {
      output = await mysql.connection.query(_query);
    } catch (error) {
      throw new Error(error.message);
    }
    res.send(output);
    return res.status(200).json({ msg: 'Fetched User Information' });
  } catch (error) {
    // Uncommenting this give Error
    // [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // return res.status(401).json({ msg: error.message });
    throw new Error(error.message);
  }
};

// Note: to test this, remove authorizeUser attribute inside setting routes from routes>index.js
module.exports.updateSettings = async (req, res) => {
  if (req.body.Password === req.body.CPassword) {
    const queryPassword = `select Password from TERRABUZZ.UserInformation where Handler='${req.body.Handler}';`;
    const [queryResult] = await mysql.connection.query(queryPassword);
    const [data] = queryResult;

    // should be compared with hashed password
    if (data.Password === req.body.Password) {
      const updateQuery = `UPDATE TERRABUZZ.UserInformation 
                    SET Email = '${req.body.Email}', Username = '${req.body.Username}'
                    WHERE Handler='${req.body.Handler}';`;
      // note: req.body.Handler should be replace with --> req.handle
      await mysql.connection.query(updateQuery);
      return res.status(200).json({ msg: 'Updated' });
    }

    return res.status(401).json({ msg: 'Bad Request' });
  }

  return res.status(401).json({ msg: 'Bad Request' });
};

module.exports.changePassword = async (req, res) => {
  if (req.body.newPassword === req.body.confirmPassword) {
    const queryPassword = 'select Password from TERRABUZZ.UserInformation where Handler=\'Johndoe\';';
    let queryResult;
    try {
      [queryResult] = await mysql.connection.query(queryPassword);
    } catch (err) {
      throw new Error(err.message);
    }

    const [data] = queryResult;

    // should be compared with hashed password
    if (data.Password === req.body.oldPassword) {
      let salt;
      let hashedPassword;
      try {
        salt = await bcrypt.genSalt(10);
      } catch (err) {
        throw new Error(err.message);
      }

      try {
        hashedPassword = await bcrypt.hash(req.body.newPassword, salt);
      } catch (err) {
        throw new Error(err.message);
      }
      const updateQuery = `UPDATE TERRABUZZ.UserInformation 
                    SET Password = '${hashedPassword}'
                    WHERE Handler='Johndoe';`;
      // note: Handler should be replace with --> req.handle
      try {
        await mysql.connection.query(updateQuery);
      } catch (err) {
        throw new Error(err.message);
      }
      return res.status(200).json({ msg: 'Updated' });
    }

    return res.status(401).json({ msg: 'Bad Request' });
  }

  return res.status(401).json({ msg: 'Bad Request' });
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

module.exports.registerUser = async (req, res) => {
  if (req.body.password === req.body.cpassword) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const _query = `INSERT INTO TERRABUZZ.UserInformation (Handler, Username, Email, Password ) 
    VALUES ('${req.body.userhandler}', '${req.body.username}', '${req.body.email}', '${hashedPassword}' );`;
    try {
      await mysql.connection.query(_query);
      return res.status(200).json({ msg: 'User Registered' });
    } catch (error) {
      return res.status(401).json({ msg: error.message });
    }
  }
  return res.status(401).json({ msg: 'Password not matched' });
};

module.exports.newPassword = (req, res) => {
  res.json({ msg: 'New password generation link issued!!' });
};

module.exports.resetPassword = (req, res) => {
  res.json({ msg: 'Password reset!!' });
};
