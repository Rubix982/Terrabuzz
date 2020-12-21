import React from 'react';
import ComponentStyling from '../../style/Post/Comment.module.css';
import { CenterAlign } from '../FlexAlignment';

const Comment = ({ commentData }) => {
  const { handle, ProfilePicture, Username, content, datePosted } = commentData; 

  return (
    <div className={ComponentStyling.entry}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img src={`/assets/img/profile_pictures/${ProfilePicture}`} alt="user profile" />
        </div>
      </CenterAlign>
      <div className={ComponentStyling.commentBody}>
        <div className={ComponentStyling.commentTitle}>
          <h1>{Username} | @{handle}</h1>
          <h2>{datePosted}</h2>
        </div>
        <div className={ComponentStyling.commentText}>
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
