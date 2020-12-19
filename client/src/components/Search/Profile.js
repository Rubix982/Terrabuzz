import React from 'react';
import ComponentStyling from '../../style/Search/Profile.module.css';
import { CenterAlign } from '../FlexAlignment';

const Profile = ({ username, handle }) => (
  <div className={ComponentStyling.entry}>
    <CenterAlign>
      <div className={ComponentStyling.profilePicture}>
        <img src="/assets/img/profile_pictures/boy(3).svg" alt="profilePic" />
      </div>
    </CenterAlign>
    <div className={ComponentStyling.details}>
      <h1>{username}</h1>
      <h2>@{handle}</h2>
    </div>
  </div>
);

export default Profile;
