import React from "react";
import ComponentStyling from "../../style/Search/Content.module.css";
import Post from "./Post.js";
import Profile from "./Profile.js";
import { useContext } from "react";
import { searchTypeContext } from "./SearchTypeContext.js";

const Content = () => {
  const [buttonActive] = useContext(searchTypeContext);

  if (buttonActive == "Posted on") {
    return (
      <div className={ComponentStyling.content}>
        <div className={ComponentStyling.postRow}>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div className={ComponentStyling.postRow}>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div className={ComponentStyling.postRow}>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
      </div>
    );
  } else {
    return (
      <div className={ComponentStyling.content}>
        <div className={ComponentStyling.postRow}>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
        </div>
        <div className={ComponentStyling.postRow}>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
        </div>
        <div className={ComponentStyling.postRow}>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
        </div>
      </div>
    );
  }
};

export default Content;
