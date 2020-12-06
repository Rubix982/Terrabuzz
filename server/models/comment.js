import mongoose from 'mongoose';

const { Schema } = mongoose;

const Comment = new Schema({
  /**
     * @property _id: This is the ID of the User that generates the comment.
     * In relation 'User', this is Handler
     * @property datePosted: The time that the comment was posted on
     * @property content: The actual content of the comment itself. Limited to 100 characters at max
     */
  _id: {
    type: String,
    max: 40,
    required: true,
    unique: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    max: 100,
  },
});

module.exports = mongoose.model('Comment', Comment);
