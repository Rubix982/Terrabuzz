const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationSchema = new Schema({
  action: {
    type: String,
    maxLength: 60,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  postID: {
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

const notificationListSchema = new Schema({
  _id: {
    type: String,
    maxLength: 40,
    required: true,
    unique: true,
  },
  payload: [{
    type: Schema.Types.ObjectId,
    ref: 'Notification',
  }],
});

module.exports.Notification = mongoose.model('Notification', notificationSchema);
module.exports.NotificationList = mongoose.model('NotificaionList', notificationListSchema);
