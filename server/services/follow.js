const { Follow } = require('../models/follow.js');

const getFollowStatus = async (__profileHandle, __userHandle) => {
  try {
    const requiredFollow = await Follow.findOne({
      follower: __userHandle, following: __profileHandle,
    });

    if (requiredFollow) {
      return (requiredFollow.isFollowing);
    }

    return (false);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const alterFollowStatus = async (__profileHandle, __userHandle) => {
  try {
    const requiredFollow = await Follow.findOne({
      follower: __userHandle, following: __profileHandle,
    });

    console.log(requiredFollow);
    if (requiredFollow) {
      requiredFollow.isFollowing = !requiredFollow.isFollowing;
      await requiredFollow.save();
      return (requiredFollow.isFollowing);
    }

    const newFollow = await new Follow({
      follower: __userHandle, following: __profileHandle, isFollowing: true,
    });
    await newFollow.save();
    return (newFollow.isFollowing);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getFollowStatus = getFollowStatus;
module.exports.alterFollowStatus = alterFollowStatus;
