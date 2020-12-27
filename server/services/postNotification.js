const { CommentNotification, LikeNotification } = require('../models/notification.js');
const mysql = require('../db/mysql/connection.js');

const postNotification = async (__action, __notificationSchemaForm, __userHandle) => {
  if (__notificationSchemaForm.for === __userHandle) {
    return;
  }

  try {
    const query = `SELECT ProfilePicture FROM TERRABUZZ.UserInformation WHERE Handle='${__userHandle}'`;
    const result = await mysql.connection.query(query);
    const profilePictureFetch = result[0][0].ProfilePicture;
    console.log(__notificationSchemaForm);
    /* eslint-disable no-param-reassign */
    __notificationSchemaForm.by = __userHandle;
    __notificationSchemaForm.profilePicture = profilePictureFetch;

    if (__action === 'comment') {
      const commentNotification = new CommentNotification(__notificationSchemaForm);
      await commentNotification.save();
    } else if (__action === 'like') {
      const likeNotification = new LikeNotification(__notificationSchemaForm);
      await likeNotification.save();
    }
  } catch (error) {
    throw new Error(`Unable to push notification to database, due to error ${error.message}`);
  }
};

module.exports.postNotification = postNotification;
