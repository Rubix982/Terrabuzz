import mongoose from 'mongoose';

const { Schema } = mongoose;

const Notification = new Schema({
  /**
     * @property nId: This is the notification ID for the notification generated
     * @property handler: The 'Handler' field from the User relation
     * @property Action: Either 'Like' or 'Comment', indicating the action performed
     */
  nId: {
    type: Number,
    required: true,
  },
  handler: {
    type: String,
    max: 40,
    required: true,
  },
  action: {
    type: String,
    max: 8,
    required: true,
  },
});

Notification.index({
  nId: 1,
  handler: 1,
}, {
  unique: true,
});

module.exports = mongoose.model('Notification', Notification);
