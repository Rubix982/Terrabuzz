const MONGOOSE = require('mongoose');
// const { NotificationList } = require('../../models/notification.js');
// const { PostList } = require('../../models/post.js');
// const { ValidationSet } = require('../../models/valdation.js');
require('dotenv').config();

const connect = async () => {
  MONGOOSE.connect(`mongodb://root:${process.env.PASSWORD}@mongo:27017`, { useUnifiedTopology: true, useNewUrlParser: true, dbName: 'TERRABUZZ' }, (error) => {
    if (!error) {
      return console.log('Connected to Mongoose successfully!');
    }
    return console.log('Mongoose not connected, some error occured!');
  });

  // const defaultHandlers = ['TashikMoin', 'hassanzhd', 'Saif', 'Johndoe'];

  // /* eslint-disable no-await-in-loop */
  // for (let i = 0; i < defaultHandlers.length; i += 1) {
  //   const userPostList = new PostList({
  //     _id: defaultHandlers[i],
  //     payload: [],
  //   });
  //   await userPostList.save();

  //   const notificationList = new NotificationList({
  //     _id: defaultHandlers[i],
  //     payload: [],
  //   });
  //   await notificationList.save();

  //   const validationSet = new ValidationSet({
  //     _id: defaultHandlers[i],
  //     verificationHash: '',
  //     isVerified: true,
  //     resetHash: '',
  //     isFirstLogin: false,
  //   });
  //   await validationSet.save();
  // }
  /* eslint-enable no-await-in-loop */
};

module.exports.connection = MONGOOSE.connection;
module.exports.connect = connect;
