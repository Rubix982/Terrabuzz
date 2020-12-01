import React from 'react';
import ComponentStyling from '../../style/Home/Post.module.css';
import { CenterAlign } from '../FlexAlignment';

const Post = () => (
  <div className={ComponentStyling.entry}>
    <div className={ComponentStyling.main}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img alt="user icon" src="/assets/img/profile_pictures/boy(3).svg" />
        </div>
      </CenterAlign>
      <div className={ComponentStyling.postBody}>
        <div className={ComponentStyling.postTitle}>
          <h1>Richard Miles</h1>
          <h2>1st January, 2020</h2>
        </div>
        <div className={ComponentStyling.PostedIn}>in #philosophy</div>
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

export default Post;
