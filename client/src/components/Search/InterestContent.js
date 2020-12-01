import React, { useContext } from 'react';
import ComponentStyling from '../../style/Search/Content.module.css';
import Post from './Post';
import Profile from './InterestProfile';

import { searchTypeContext } from './SearchTypeContext';

const InterestContent = () => {
  const [buttonActive] = useContext(searchTypeContext);

  if (buttonActive === 'Posted on') {
    return (
      <div className={ComponentStyling.content}>
        <div className={ComponentStyling.postRow}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className={ComponentStyling.postRow}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className={ComponentStyling.postRow}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
  return (
    <div className={ComponentStyling.content}>
      <div className={ComponentStyling.postRow}>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
      <div className={ComponentStyling.postRow}>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
      <div className={ComponentStyling.postRow}>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
};

export default InterestContent;
