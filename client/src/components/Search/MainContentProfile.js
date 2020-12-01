import React from 'react';
import ComponentStyling from '../../style/Search/MainContentProfile.module.css';
import Profile from './Profile';

const MainContentProfile = () => (
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

export default MainContentProfile;
