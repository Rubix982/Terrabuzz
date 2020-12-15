import React, { useState } from 'react';
import ComponentStyling from '../../style/Post/NewComment.module.css';
import { CenterAlign } from '../FlexAlignment';

const NewComment = () => 
{
  const [Comment, setComment] = useState('');

  const newComment = async event => {

    event.preventDefault();

    if (!Comment) {
      alert('Field cannot be empty!')
    } else {
      try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/post/:id`, Comment);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }

  return (
  <div className={ComponentStyling.entry}>
    <CenterAlign>
      <div className={ComponentStyling.profilePicture}>
        <img src="/assets/img/profile_pictures/boy(2).svg" alt="user profile" />
      </div>
    </CenterAlign>
    <div className={ComponentStyling.commentBody}>
      <input 
      type="text" 
      name="comment" 
      placeholder="Add a new comment ..."
      value={Comment}
      onChange={event => setComment(event.target.value)}/>

    </div>
    <CenterAlign>
      <div className={ComponentStyling.submitButton} onClick={newComment}>
        Submit
      </div>
    </CenterAlign>
  </div>
);
}

export default NewComment;
