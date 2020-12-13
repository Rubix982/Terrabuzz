export const countTotalLikes = (__likes) => {
  return (__likes.filter((element) => (element.isLiked === true))).length;
};