import React from "react";
import ComponentStyling from "../../style/Search/Profile.module.css";
import { CenterAlign } from "../FlexAlignment.js";

const Post = () => {
  return (
    <div className={ComponentStyling.entry}>
      <div className={ComponentStyling.header}>
        <h1>#philosophy</h1>
      </div>
      <div className={ComponentStyling.main}>
        <CenterAlign>
          <div className={ComponentStyling.profilePicture}>
            <img src="/assets/img/profile_pictures/boy(3).svg" />
          </div>
        </CenterAlign>
        <div className={ComponentStyling.profileBody}>
          <div className={ComponentStyling.profileTitle}>
            <h1>Richard Miles</h1>
            <h2>@richardmiles</h2>
          </div>
          <div className={ComponentStyling.profileText}>
            <h1>Interested in: </h1>
            <p>#football, #guitar, #webdev, #datascience, #devops, #food</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
