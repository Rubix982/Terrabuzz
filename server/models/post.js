import mongoose from 'mongoose';

const { Schema } = mongoose;

const Post = new Schema({
  /**
     * This is for the User Handler of the person that creates the post
     * @property title: Meant to be the title for the post
     * @property: datePublished: The date that the post was published on
     * @property: content: Contains the hash for the compressed content
     */
  title: {
    type: String,
    max: 40,
    required: true,
  },
  dataPublished: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    max: 100,
    required: true,
  },
  like: {
    type: [Schema.ObjectID],
  },
  comment: {
    type: [Schema.ObjectID],
  },
});

const PostList = new Schema({
  _id: {
    type: String,
    max: 40,
    required: true,
  },
  payload: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
});

module.exports = mongoose.model('Post', Post);
module.exports = mongoose.model('PostList', PostList);
