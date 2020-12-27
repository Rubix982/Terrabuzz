import React, { useContext } from 'react';
import ComponentStyling from '../../style/Post/CommentContent.module.css';
import Comment from './Comment';
import NewComment from './NewComment'
import { loginUserContext } from '../LoginUserContext';
import { postContext } from './PostContext';

const CommentContent = () => {
  const { post } = useContext(postContext);
  const { login }  = useContext(loginUserContext);
  
  return (
    <div className={ComponentStyling.content}>
      {login.state ? <NewComment/> : ''}
      {post.state.comments.map((element) => {
        return (<Comment key={element._id} commentData={element} />)
      })}
    </div>
  );
};

export default CommentContent;
