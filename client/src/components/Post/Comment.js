import React from "react";
import ComponentStyling from "../../style/Post/Comment.module.css";
import { CenterAlign } from "../FlexAlignment.js";

const Comment = () => {
  return (
    <div className={ComponentStyling.entry}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img src="/assets/img/profile_pictures/boy(2).svg"></img>
        </div>
      </CenterAlign>
      <div className={ComponentStyling.commentBody}>
        <div className={ComponentStyling.commentTitle}>
          <h1>Richard Miles</h1>
          <h2>1st January, 2020</h2>
        </div>
        <div className={ComponentStyling.commentText}>
          <p>
            Yesterday is history, and tomorrow is a mystery, but today, is a
            gift, that is why we call the present.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
