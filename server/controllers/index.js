const bcrypt = require('bcrypt');
const { generateAccessToken } = require('../services/auth.js');
const { createAndPushPost } = require('../services/publishPost.js');
const { getHomePagePosts } = require('../services/homePage.js');
const { getSinglePost } = require('../services/getSinglePost.js');
const { getLikeStatus, updateLike } = require('../services/like.js');
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
  // try {
  //   const _query = `select Username, Email, Handler from TERRABUZZ.UserInformation where Handler='${req.userHandle}';`;
  //   const output = await mysql.connection.query(_query);
  //   console.log(output);
  //   res.send(output);
  //   return res.status(200).json({ msg: 'Fetched User Information' });
  // } catch (error) {
  //   return res.status(401).json({ msg: error.message });
  // }
  // uncomment above code only when login is completed and when there's no hard coded data with protected routes.

};

module.exports.updateSettings = async (req, res) => {
  if( req.body.Password == req.body.CPassword ){
    const query_password = `select Password from TERRABUZZ.UserInformation where Handler='${req.body.Handler}';`;
    const [res] = await mysql.connection.query(query_password);
    const [data] = res;
    if( data.Password == req.body.Password ) // should be compared with hashed password
    {
      const update_query = `UPDATE TERRABUZZ.UserInformation 
                    SET Email = '${req.body.Email}', Username = '${req.body.Username}'
                    WHERE Handler='${req.body.Handler}';` ;
      // note: req.body.Handler should be replace with --> req.handle
      const result = await mysql.connection.query(update_query) ;
      return res.status(200).json({ msg: 'Updated' });
    }
    else{
      return res.status(401).json({ msg: 'Bad Request'});
    }
  }
};

module.exports.changePassword = (req, res) => {
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
      const output = await mysql.connection.query(_query);
      console.log(output);
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
