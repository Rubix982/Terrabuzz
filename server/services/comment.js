const { Post, Comment } = require('../models/post.js');

const addComment = async (postID, userHandle, comment) => {
  try {
    const post = await Post.findById(postID).populate('comments');
    let _Date = new Date();
    _Date = `${_Date.getMonth()}/${_Date.getDate()}/${_Date.getFullYear()}`;
    const newComment = new Comment({ handle: userHandle, datePosted: _Date, content: comment });

    try {
      await newComment.save();
    } catch (error) {
      console.log('Unable to save new comment');
      throw new Error(error.message);
    }

    post.comments.push(newComment);

    try {
      await post.save();
    } catch (error) {
      console.log(newComment, postID, userHandle, comment, _Date);
      console.log(`Unable to update comments list in the post, ${error.message}`);
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.addComment = addComment;
