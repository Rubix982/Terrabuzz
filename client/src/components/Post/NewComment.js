import React, { useContext, useState } from 'react'
import ComponentStyling from '../../style/Post/NewComment.module.css';
import { useParams } from 'react-router-dom'
import { CenterAlign } from '../FlexAlignment';
import API from '../../API/API.js';
import { postContext } from './PostContext';

const NewComment = () => {
  const [_Comment, setComment] = useState('');
  const { id } = useParams();
  const { post } = useContext(postContext);

  const newComment = async event => {

    event.preventDefault();
    let Data = { Comment: _Comment };

    if (!_Comment) {
      alert('Field cannot be empty!')
    } else {
      try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/post/${id}`, Data);
        alert('Comment successfully made!')
      } catch (error) {
        alert(`Unable to comment, sorry! Error is ${error.message}`)
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
          name="_Comment"
          placeholder="Add a comment ..."
          value={_Comment}
          onChange={event => setComment(event.target.value)} />

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
