const { CommentNotification, LikeNotification } = require('../models/notification.js');

const getNotificationList = async (__action, __userHandle) => {
  try {
    let result;
    if (__action === 'comment') {
      result = await CommentNotification.find({ for: __userHandle });
    } else if (__action === 'like') {
      result = await LikeNotification.find({ for: __userHandle });
    }
    return result;
  } catch (error) {
    throw new Error(`Unable to fetch from Mongoose, due to error "${error.message}"`);
  }
};

module.exports.getNotificationList = getNotificationList;
