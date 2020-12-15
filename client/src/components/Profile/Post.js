import React from 'react';
import { countTotalLikes } from '../../services/post';

import PostStyling from '../../style/Profile/Post.module.css';

const Post = ({
  Username,
  Handle,
  ProfilePicture,
  postInformation,
}) => {
  return (
    <div className={PostStyling.PostLayout}>
      <div className={PostStyling.SizingProperties}>
        <div className={PostStyling.PostTop}>
          <div className={PostStyling.ImageStyling}>
            <img className={PostStyling.ProfilePicture} src={`/assets/img/profile_pictures/${ProfilePicture}`} alt="" />
          </div>
          <div className={PostStyling.WordHeader}>
            <p className={PostStyling.NameTag}>{Username}</p>
            <p className={PostStyling.UserHandle}>@{Handle}</p>
          </div>
        </div>
        <div className={PostStyling.PostContent}>
          <p>{postInformation.content}</p>
        </div>
        <div className={PostStyling.BottomPart}>
          <div className={PostStyling.LikeButton}>
            {countTotalLikes(postInformation.likes)}
            {' '}
            Likes
          </div>
          <div className={PostStyling.CommentButton}>
            {postInformation.comments.length}
            {' '}
            Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
