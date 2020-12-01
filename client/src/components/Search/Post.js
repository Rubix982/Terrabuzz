import React from 'react';
import ComponentStyling from '../../style/Search/Post.module.css';
import { CenterAlign } from '../FlexAlignment';

const Post = () => (
  <div className={ComponentStyling.entry}>
    <div className={ComponentStyling.header}>
      <h1>#philosophy</h1>
    </div>
    <div className={ComponentStyling.main}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img src="/assets/img/profile_pictures/boy(3).svg" alt="" />
        </div>
      </CenterAlign>
      <div className={ComponentStyling.postBody}>
        <div className={ComponentStyling.postTitle}>
          <h1>Richard Miles</h1>
          <h2>1st January, 2020</h2>
        </div>
        <div className={ComponentStyling.postText}>
          <p>Yesterday is history, and tomorrow is a mystery ....</p>
        </div>
      </div>
    </div>
    <div className={ComponentStyling.stats}>
      <CenterAlign>
        <h1>15 Likes</h1>
      </CenterAlign>
      <CenterAlign>
        <h1>7 Comments</h1>
      </CenterAlign>
    </div>
  </div>
);

export default Post;
