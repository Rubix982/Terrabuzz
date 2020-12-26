const { Notification, NotificationList } = require('../models/notification.js');
const mysql = require('../db/mysql/connection.js');

const postCommentNotificationToDatabase = async (__notificationSchemaForm, __userHandle) => {
  try {
    const query = `SELECT ProfilePicture FROM TERRABUZZ.UserInformation WHERE Handle=${__userHandle}`;
    const result = await mysql.connection.query(query);
    const profilePictureFetch = result[0][0].ProfilePicture;

    /* eslint-disable no-param-reassign */
    __notificationSchemaForm.by = __userHandle;
    __notificationSchemaForm.profilePicture = profilePictureFetch;

    const notificationListSchemaObject = NotificationList.findById(__notificationSchemaForm.for);

    delete __notificationSchemaForm.for;

    const notificationSchemaObject = new Notification(__notificationSchemaForm);

    notificationListSchemaObject.payload.push(notificationSchemaObject);

    await notificationListSchemaObject.save();
  } catch (error) {
    throw new Error(`Unable to push notification to database, due to error ${error.message}`);
  }
};

module.exports.postCommentNotificationToDatabase = postCommentNotificationToDatabase;
