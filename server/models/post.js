import mongoose from 'mongoose';

const { Schema } = mongoose;

const Post = new Schema({
  /**
     * @property handler: From the 'User' table.
     * This is for the User Handler of the person that creates the post
     * @property title: Meant to be the title for the post
     * @property _id: For the Post ID. This should be auto incremented
     * @property: datePublished: The date that the post was published on
     * @property: contentRefId: Contains the hash for the compressed content
     */
  handler: {
    type: String,
    max: 40,
    required: true,
  },
  title: {
    type: String,
    max: 40,
    required: true,
  },
  _id: {
    type: Number,
    required: true,
    unique: true,
  },
  dataPublished: {
    type: Date,
    required: true,
  },
  contentRefId: {
    type: String,
    max: 100,
    required: true,
  },
});

module.exports = mongoose.model('Post', Post);
