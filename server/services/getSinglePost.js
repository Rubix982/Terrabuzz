/* eslint-disable no-await-in-loop */
const MYSQL_CONNECTOR = require('../db/mysql/connection.js');
const { Post } = require('../models/post.js');
const PostEntry = require('../models/PostEntry.js');
const CommentEntry = require('../models/CommentEntry.js');

const getSinglePost = async (__postID) => {
  try {
    const postData = await Post.findById(__postID).populate('likes').populate('comments');
    const { comments } = postData;

    const post = new PostEntry(postData);
    for (let i = 0; i < comments.length; i += 1) {
      const [[data]] = await MYSQL_CONNECTOR.connection.query(`SELECT Username, ProfilePicture FROM TERRABUZZ.UserInformation WHERE Handle='${comments[i].handle}'`);
      const comment = new CommentEntry(comments[i], data);
      post.comments.push(comment);
    }
    return (post);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getSinglePost = getSinglePost;
