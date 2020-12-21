const mongoose = require('mongoose');

const { Schema } = mongoose;

const validationSet = new Schema({
  _id: {
    type: String,
    maxlength: 40,
    required: true,
    unique: true,
  },
  verificationHash: {
    type: String,
    maxlength: 100,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetHash: {
    type: String,
    maxlength: 100,
  },
  isFirstLogin: {
    type: Boolean,
    default: true,
  },
});

module.exports.ValidationSet = mongoose.model('ValidationSet', validationSet);
