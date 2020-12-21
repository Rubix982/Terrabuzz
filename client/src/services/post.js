export const countTotalLikes = (__likes) => {
  return (__likes.filter((element) => (element.isLiked === true))).length;
};

export const countAndFormatTotalLikes = (__likes) => {
  const likeCount = (__likes.filter((element) => (element.isLiked === true))).length;
  return ((likeCount > 1) ? `${likeCount} Likes` : `${likeCount} Like`);
}

export const formatTotalComments = (__comments) => {
  const commentCount = __comments.length;
  return ((commentCount > 1) ? `${commentCount} Comments` : `${commentCount} Comment`);
}

export const reducePostContent = (__content, __length) => {
  if (__content.length > 200) {
    return `${__content.substr(0,200)} .....`;
  }
  return __content;
};