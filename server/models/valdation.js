const mongoose = require('mongoose');

const { Schema } = mongoose;

const validationSet = new Schema({
  handler: {
    type: String,
    maxlength: 40,
    required: true,
    unique: true,
  },
  verificationHash: {
    type: String,
    maxlength: 40,
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetHash: {
    type: String,
    maxlength: 40,
    unique: true,
  },
  isFirstLogin: {
    type: Boolean,
    default: false,
  },
});

module.exports.ValidationSet = mongoose.model('ValidationSet', validationSet);
