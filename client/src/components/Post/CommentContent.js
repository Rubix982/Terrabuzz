import React, { useContext } from 'react';
import ComponentStyling from '../../style/Post/CommentContent.module.css';
import Comment from './Comment';
import NewComment from './NewComment'
import { loginUserContext } from '../LoginUserContext';

const CommentContent = () => {
  const [ loggedIn, setLoggedIn ] = useContext(loginUserContext);
  
  return (
    <div className={ComponentStyling.content}>
      {loggedIn ? <NewComment/> : ''}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentContent;
