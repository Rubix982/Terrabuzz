import React from 'react';
import ComponentStyling from '../../style/NewsFeed/Post.module.css';
import { CenterAlign } from '../FlexAlignment';

const Post = ({
  handle, username, profilePicture, date, content, likeCount, commentCount
}) => (
  <div className={ComponentStyling.entry}>
    <div className={ComponentStyling.main}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img alt="user icon" src={`/assets/img/profile_pictures/${profilePicture}`} />
        </div>
      </CenterAlign>
      <div className={ComponentStyling.postBody}>
        <div className={ComponentStyling.postTitle}>
          <h1>{username} | @{handle}</h1>
          <h2>{date}</h2>
        </div>
        <div className={ComponentStyling.postText}>
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
    <div className={ComponentStyling.stats}>
      <CenterAlign>
        <h1>{likeCount}</h1>
      </CenterAlign>
      <CenterAlign>
        <h1>{commentCount}</h1>
      </CenterAlign>
    </div>
  </div>
);

export default Post;
