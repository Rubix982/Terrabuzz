import React from "react";
import ComponentStyling from "../../style/NewsFeed/Content.module.css";
import NewPost from "./NewPost";
import Post from "./Post.js";

const Content = () => {
  return (
    <div className={ComponentStyling.content}>
      <NewPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Content;
