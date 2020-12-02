import React from 'react';

import PostStyling from '../../style/Profile/Post.module.css';

const Post = ({
  contentInformation,
}) => {
  const {
    ProfilePicture, NameTag, UserHandle, PostContent, Likes, Comments,
  } = contentInformation;
  return (
    <div className={PostStyling.PostLayout}>
      <div className={PostStyling.SizingProperties}>
        <div className={PostStyling.PostTop}>
          <div className={PostStyling.ImageStyling}>
            <img className={PostStyling.ProfilePicture} src={ProfilePicture} alt="" />
          </div>
          <div className={PostStyling.WordHeader}>
            <p className={PostStyling.NameTag}>{NameTag}</p>
            <p className={PostStyling.UserHandle}>{UserHandle}</p>
          </div>
        </div>
        <div className={PostStyling.PostContent}>
          <p>{PostContent}</p>
        </div>
        <div className={PostStyling.BottomPart}>
          <div className={PostStyling.LikeButton}>
            {Likes}
            {' '}
            Likes
          </div>
          <div className={PostStyling.CommentButton}>
            {Comments}
            {' '}
            Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
