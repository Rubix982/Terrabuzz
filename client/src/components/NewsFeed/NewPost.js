import React from "react";
import ComponentStyling from "../../style/NewsFeed/NewPost.module.css";
import { CenterAlign } from "../FlexAlignment.js";

const NewPost = () => {
  return (
    <div className={ComponentStyling.newPost}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img alt='user icon' src="../../assets/img/icon/boy.svg"></img>
        </div>
      </CenterAlign>
      <CenterAlign>
        <h1>What’s on your mind, John?</h1>
      </CenterAlign>
    </div>
  );
};

export default NewPost;
