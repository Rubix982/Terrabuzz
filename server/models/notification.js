const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationSchmea = new Schema({
  action: {
    type: String,
    max: 60,
  },
});

const notificationListSchema = new Schema({
  _id: {
    type: String,
    max: 40,
    required: true,
    unique: true,
  },
  payload: [{
    type: Schema.Types.ObjectId,
    ref: 'Notification',
  }],
});

module.exports.Notification = mongoose.model('Notification', notificationSchmea);
module.exports.NotificationList = mongoose.model('NotificaionList', notificationListSchema);
