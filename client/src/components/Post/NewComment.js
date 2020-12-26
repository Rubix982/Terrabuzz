import React, { useContext, useState } from 'react'
import ComponentStyling from '../../style/Post/NewComment.module.css';
import { useParams } from 'react-router-dom'
import { CenterAlign } from '../FlexAlignment';
import postCommentNotify from '../../services/commentNotify.js';
import { postContext } from './PostContext';

const NewComment = () => {
  const [_Comment, setComment] = useState('');
  const { id } = useParams();
  const { post } = useContext(postContext);

  const newComment = async event => {

    event.preventDefault();
    const Data = { Comment: _Comment };

    const notificationSchemaForm = {
      action: 'comment',
      timestamp: new Date(),
      postID: id,
      by: '',
      profilePicture: '',
      for: post.state.handle,
    }

    if (!_Comment) {
      alert('Field cannot be empty!')
    } else {
      try {
        await postCommentNotify(id, Data, notificationSchemaForm);
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
