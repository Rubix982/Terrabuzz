const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  handle: {
    type: String,
    max: 40,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    max: 100,
    required: true,
  },
});

const likeSchema = new Schema({
  _id: {
    type: String,
    max: 40,
    required: true,
    unique: true,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
});

const postSchema = new Schema({
  title: {
    type: String,
    max: 40,
    required: true,
  },
  datePublished: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    max: 100,
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Like',
  }],
  comments: [{
    type: Schema.Types.ObjectID,
    ref: 'Comment',
  }],
});

const postListSchema = new Schema({
  _id: {
    type: String,
    max: 40,
    required: true,
    unique: true,
  },
  payload: [{
    type: Schema.Types.ObjectId,
    ref: 'Post',
  }],
});

module.exports.Comment = mongoose.model('Comment', commentSchema);
module.exports.Like = mongoose.model('Like', likeSchema);
module.exports.Post = mongoose.model('Post', postSchema);
module.exports.PostList = mongoose.model('PostList', postListSchema);