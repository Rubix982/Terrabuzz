const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentNotificationSchema = new Schema({
  for: {
    type: String,
    maxlength: 40,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  by: {
    type: String,
    maxlength: 40,
    required: true,
  },
  profilePicture: {
    type: String,
    maxLength: 15,
    required: true,
  },
});

const likeNotificationSchema = new Schema({
  for: {
    type: String,
    maxlength: 40,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  by: {
    type: String,
    maxlength: 40,
    required: true,
  },
  profilePicture: {
    type: String,
    maxLength: 15,
    required: true,
  },
});

module.exports.CommentNotification = mongoose.model('CommentNotification', commentNotificationSchema);
module.exports.LikeNotification = mongoose.model('LikeNotification', likeNotificationSchema);
