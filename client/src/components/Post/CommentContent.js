import React from 'react';
import ComponentStyling from '../../style/Post/CommentContent.module.css';
import Comment from './Comment';

const CommentContent = () => (
  <div className={ComponentStyling.content}>
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Comment />
  </div>
);

export default CommentContent;
