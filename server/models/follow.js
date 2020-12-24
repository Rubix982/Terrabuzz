const mongoose = require('mongoose');

const { Schema } = mongoose;

const followSchema = new Schema({
  follower: {
    type: String,
    required: true,
  },
  following: {
    type: String,
    required: true,
  },
  isFollowing: {
    type: Boolean,
    default: false,
  },
});

module.exports.Follow = mongoose.model('Follow', followSchema);
