const { Post } = require('../models/post.js');

const getHomePagePosts = async () => {
  try {
    const fetchedPosts = await Post.find({}).sort({ _id: 1 }).limit(10);
    return fetchedPosts;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getHomePagePosts = getHomePagePosts;
