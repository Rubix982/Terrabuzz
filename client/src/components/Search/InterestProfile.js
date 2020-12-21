import React from 'react';
import ComponentStyling from '../../style/Search/InterestProfile.module.css';
import { CenterAlign } from '../FlexAlignment';
import { concatInterests } from '../../services/profile';

const Post = ({ query, entryData }) => (
  <div className={ComponentStyling.entry}>
    <div className={ComponentStyling.header}>
      <h1>#{query}</h1>
    </div>
    <div className={ComponentStyling.main}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img src={`/assets/img/profile_pictures/${entryData.ProfilePicture}`} alt="" />
        </div>
      </CenterAlign>
      <div className={ComponentStyling.profileBody}>
        <div className={ComponentStyling.profileTitle}>
          <h1>{entryData.Username}</h1>
          <h2>@{entryData.Handle}</h2>
        </div>
        <div className={ComponentStyling.profileText}>
          <h1>Interested in: </h1>
          <p>{concatInterests(entryData.interests)}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Post;
