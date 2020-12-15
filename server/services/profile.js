const MYSQL = require('../db/mysql/connection.js');
const { Post, PostList } = require('../models/post.js');

const getProfileData = async (__handle) => {
  const [[userInformation]] = await MYSQL.connection.query(`SELECT * FROM TERRABUZZ.UserInformation WHERE Handle='${__handle}'`);

  delete userInformation.Password;

  const [[connections]] = await MYSQL.connection.query(`SELECT COUNT(*) AS totalConnections FROM TERRABUZZ.Connection WHERE Connection.Followers='${__handle}'`);

  const [interests] = await MYSQL.connection.query(`SELECT Topic FROM TERRABUZZ.Interest WHERE Handle='${__handle}'`);

  const { payload: posts } = await PostList.findById(__handle).populate('payload');
  posts.reverse();

  for (let i = 0; i < posts.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const { likes } = await Post.findById(posts[i]._id, { likes: 1 }).populate('likes');
    if (likes.length) {
      posts[i].likes = likes;
    }
  }

  console.log(posts);

  return ({
    userInformation,
    connections,
    interests,
    posts,
  });
};

module.exports.getProfileData = getProfileData;
