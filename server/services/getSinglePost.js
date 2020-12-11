const { Post } = require('../models/post.js');

const getSinglePost = async (__postID) => {
  const post = await Post.findById(__postID).populate('comments');
  return (post);
};

module.exports.getSinglePost = getSinglePost;
