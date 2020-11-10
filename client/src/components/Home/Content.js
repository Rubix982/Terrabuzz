import React from "react";
import ComponentStyling from "../../style/Home/Content.module.css";
import Post from "./Post.js";

const Content = () => {
  return (
    <div className={ComponentStyling.content}>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Content;
