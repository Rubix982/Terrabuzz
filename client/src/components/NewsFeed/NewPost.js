import React from 'react';
import { Link } from 'react-router-dom';
import ComponentStyling from '../../style/NewsFeed/NewPost.module.css';
import { CenterAlign } from '../FlexAlignment';

const NewPost = () => (
  <div className={ComponentStyling.newPost}>
    <CenterAlign>
      <div className={ComponentStyling.profilePicture}>
        <img alt="user icon" src="/assets/img/profile_pictures/boy.svg" />
      </div>
    </CenterAlign>
    <CenterAlign>
      <Link to="/publish">
        <h1>What’s on your mind?</h1>
      </Link>
    </CenterAlign>
  </div>
);

export default NewPost;
