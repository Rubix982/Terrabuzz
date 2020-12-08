const { PostList, Post } = require('../models/post.js');

const createAndPushPost = async ({ title, content }, __handle) => {
  try {
    const userPostList = await PostList.findOne({ _id: __handle }).populate('payload');
    const newPost = new Post({
      title,
      datePublished: new Date(),
      content,
    });
    await newPost.save();
    userPostList.payload.push(newPost.id);
    await userPostList.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.createAndPushPost = createAndPushPost;
