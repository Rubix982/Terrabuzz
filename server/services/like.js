const { Post, Like } = require('../models/post.js');

const getLikeStatus = async (__postID, __userHandle) => {
  try {
    const post = await Post.findById(__postID).populate('likes');
    const { likes } = post;

    const [user] = likes.filter((element) => (
      element.handle === __userHandle
    ));

    if (user) {
      return (user.isLiked);
    }

    return (false);
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateLike = async (__postID, __userHandle) => {
  try {
    const post = await Post.findById(__postID).populate('likes');
    const index = post.likes.map((element) => (element.handle)).indexOf(__userHandle);

    if (index !== -1) {
      const userLike = await Like.findById({ _id: post.likes[index]._id });
      userLike.isLiked = !userLike.isLiked;
      await userLike.save();
      return (userLike.isLiked);
    }

    const newLike = new Like({ handle: __userHandle, isLiked: true });
    await newLike.save();

    post.likes.push(newLike);
    await post.save();

    return (newLike.isLiked);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getLikeStatus = getLikeStatus;
module.exports.updateLike = updateLike;
