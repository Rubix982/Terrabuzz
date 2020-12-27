/* eslint-disable no-await-in-loop */
const MYSQL_CONNECTOR = require('../db/mysql/connection.js');
const { Post } = require('../models/post.js');
const { Follow } = require('../models/follow.js');
const FeedEntry = require('../models/FeedEntry');

const getPostsByHandle = async (__handle) => {
  const posts = await Post.find({ handle: __handle }).populate('likes').populate('comments').limit(5);
  const [[userData]] = await MYSQL_CONNECTOR.connection.query(`SELECT Username, ProfilePicture FROM TERRABUZZ.UserInformation WHERE Handle='${__handle}'`);
  const postsWithUserDetails = [];

  posts.map((element) => {
    const entry = new FeedEntry(element._id, __handle, userData, element);
    postsWithUserDetails.push(entry);
    return (entry);
  });

  return (postsWithUserDetails);
};

const convertToDateObject = (__date) => {
  const splitDate = __date.split(' ');
  splitDate[0] = (
    (splitDate[0].length === 3) ? (splitDate[0].substr(0, 1)) : (splitDate[0].substr(0, 2))
  );
  const date = new Date(splitDate.join(''));
  return (date);
};

const getFeedData = async (__userHandle) => {
  const userFollowing = await Follow.find({
    follower: __userHandle,
    isFollowing: true,
  });

  let userFollowingPosts = [];

  for (let i = 0; i < userFollowing.length; i += 1) {
    const userPosts = await getPostsByHandle(userFollowing[i].following);
    userFollowingPosts = [...userFollowingPosts, ...userPosts];
  }

  userFollowingPosts.sort((firstElement, secondElement) => (
    convertToDateObject(
      secondElement.postDetails.datePublished,
    ) - convertToDateObject(
      firstElement.postDetails.datePublished,
    )
  ));

  return (userFollowingPosts);
};

module.exports.getFeedData = getFeedData;
