import React, { useContext, useState } from 'react'
import ComponentStyling from '../../style/Post/NewComment.module.css';
import { useParams } from 'react-router-dom'
import { CenterAlign } from '../FlexAlignment';
import { postCommentNotify } from '../../services/commentNotify.js';
import { postContext } from './PostContext';
import { userContext } from '../userDataContext';

const NewComment = () => {
  const [_Comment, setComment] = useState('');
  const { id } = useParams();
  const { post } = useContext(postContext);
  const userInformationHandle = useContext(userContext);

  const newComment = async event => {

    event.preventDefault();
    const Data = { Comment: _Comment };

    const commentNotificationSchemaForm = {
      for: post.state.handle,
      timestamp: new Date(),
      post: id,
      by: '',
      profilePicture: '',
    }

    if (!_Comment) {
      alert('Field cannot be empty!')
    } else {
      try {
        await postCommentNotify(id, Data, commentNotificationSchemaForm);
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
          <img src={`${userInformationHandle.imageSource.state}`} alt="user profile" />
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
