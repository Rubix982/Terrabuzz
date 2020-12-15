import React from 'react';
import ComponentStyling from '../../style/Post/NewComment.module.css';
import { CenterAlign } from '../FlexAlignment';

const NewComment = () => 
{
  return (
  <div className={ComponentStyling.entry}>
    <CenterAlign>
      <div className={ComponentStyling.profilePicture}>
        <img src="/assets/img/profile_pictures/boy(2).svg" alt="user profile" />
      </div>
    </CenterAlign>
    <div className={ComponentStyling.commentBody}>
      <input type="text" name="comment" placeholder="Add a comment ..."/>
    </div>
    <CenterAlign>
      <div className={ComponentStyling.submitButton}>
        Submit
      </div>
    </CenterAlign>
  </div>
);
}

export default NewComment;
