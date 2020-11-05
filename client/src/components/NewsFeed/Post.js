import React from "react";
import ComponentStyling from "../../style/NewsFeed/Post.module.css";
import { CenterAlign } from "../FlexAlignment.js";

// For images
import BoyIcon from '../../assets/img/icon/boy(3).svg';

const Post = () => {
  return (
    <div className={ComponentStyling.entry}>
      <div className={ComponentStyling.main}>
        <CenterAlign>
          <div className={ComponentStyling.profilePicture}>
            <img alt='user icon' src={BoyIcon}></img>
          </div>
        </CenterAlign>
        <div className={ComponentStyling.postBody}>
          <div className={ComponentStyling.postTitle}>
            <h1>Richard Miles</h1>
            <h2>1st January, 2020</h2>
          </div>
          <div className={ComponentStyling.postText}>
            <p>
              Yesterday is history, and tomorrow is a mystery, but today, is a
              gift, that is why we call the present.
            </p>
          </div>
        </div>
      </div>
      <div className={ComponentStyling.stats}>
        <CenterAlign>
          <h1> 15 Likes</h1>
        </CenterAlign>
        <CenterAlign>
          <h1>7 Comments</h1>
        </CenterAlign>
      </div>
    </div>
  );
};

export default Post;
