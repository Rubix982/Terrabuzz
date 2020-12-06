import mongoose from 'mongoose';

const { Schema } = mongoose;

const Like = new Schema({
  /**
     * @property _id: This is the ID of the User that generates the comment.
     * In relation 'User', this is Handler
     * @property like: boolean value - either something is liked or unliked
     */
  _id: {
    type: String,
    max: 40,
    required: true,
    unique: true,
  },
  like: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Like', Like);
