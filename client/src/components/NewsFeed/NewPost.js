import React from "react";
import ComponentStyling from "../../style/NewsFeed/NewPost.module.css";
import { CenterAlign } from "../FlexAlignment.js";

// For images
import BoyIcon from '../../assets/img/icon/boy.svg';

const NewPost = () => {
  return (
    <div className={ComponentStyling.newPost}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img alt='user icon' src={BoyIcon}></img>
        </div>
      </CenterAlign>
      <CenterAlign>
        <h1>What’s on your mind, John?</h1>
      </CenterAlign>
    </div>
  );
};

export default NewPost;
