import React from "react";
import ComponentStyling from "../../style/Post/CommentContent.module.css";
import Comment from "./Comment.js";

const CommentContent = () => {
  return (
    <div className={ComponentStyling.content}>
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
