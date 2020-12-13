export const countTotalLikes = (__likes) => {
  return (__likes.filter((element) => (element.isLiked === true))).length;
};

export const reducePostContent = (__content) => {
  if (__content.length > 200) {
    return `${__content.substr(0,200)} .....`;
  }
  return __content;
};