import React from "react";
import ComponentStyling from "../../style/NewsFeed/NewPost.module.css";
import { CenterAlign } from "../FlexAlignment.js";
import { Link } from "react-router-dom";

const NewPost = () => {
  return (
    <div className={ComponentStyling.newPost}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img alt="user icon" src="/assets/img/profile_pictures/boy.svg"></img>
        </div>
      </CenterAlign>
      <CenterAlign>
        <Link to="/publish">
          <h1>What’s on your mind, John?</h1>
        </Link>
      </CenterAlign>
    </div>
  );
};

export default NewPost;
