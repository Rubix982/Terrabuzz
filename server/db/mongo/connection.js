const MONGOOSE = require('mongoose');
require('dotenv').config();

const connect = () => {
  MONGOOSE.connect(`mongodb://root:${process.env.PASSWORD}@mongo:27017`, { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (!error) {
      return console.log('Connected to Mongoose successfully!');
    }
    return console.log('Mongoose not connected, some error occured!');
  });
};

module.exports.connection = MONGOOSE.connection;
module.exports.connect = connect;
