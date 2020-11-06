import React from "react";
import ComponentStyling from "../../style/Post/PostContent.module.css";
import { CenterAlign } from "../FlexAlignment.js";

const PostContent = () => {
  return (
    <div className={ComponentStyling.main}>
      <div className={ComponentStyling.postBody}>
        <div className={ComponentStyling.postDescription}>
          <CenterAlign>
            <div className={ComponentStyling.profilePicture}>
              <img src="/assets/img/profile_pictures/boy.svg" alt='user profile'></img>
            </div>
          </CenterAlign>
          <div className={ComponentStyling.postTitle}>
            <h1>Richard Miles</h1>
            <h1>1st January, 2020</h1>
          </div>
        </div>
        <div className={ComponentStyling.postText}>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
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

export default PostContent;
