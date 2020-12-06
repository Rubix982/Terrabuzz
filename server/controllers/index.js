module.exports.getHomePage = (req, res) => {
  res.json({ msg: 'HELLO WORLD!!' });
};

module.exports.getUserFeed = (req, res) => {
  res.json({ msg: 'User feed!!' });
};

module.exports.getUserProfile = (req, res) => {
  const userID = req.params.id;
  res.json({ msg: `UserID to be queried: ${userID}` });
};

module.exports.publishPost = (req, res) => {
  res.json({ msg: 'Post published!!' });
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
  res.json({ msg: 'User logged in!!' });
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
