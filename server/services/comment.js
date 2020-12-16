const { Post, Comment } = require('../models/post.js');

const addComment = async (postID, userHandle, comment) => {
    try {
        const post = await Post.findById(postID).populate('comments');
        var _Date = new Date();
        _Date = _Date.getMonth()+'/'+ _Date.getDate()+'/'+_Date.getFullYear() ;
        const newComment = new Comment({ handle: userHandle, datePosted: _Date , content: comment });
        await newComment.save();
        post.comments.push(newComment);
        await post.save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  module.exports.addComment = addComment;