import React from 'react';

// React components
import EditProfileInformation from './EditProfileInformation';

// Styling
import ProfileSectionStyling from '../../style/Profile/ProfileSection.module.css';

const ProfileSection = ({ ProfileSectionInformation }) => (
  <div className={ProfileSectionStyling.layoutClass}>
    <div className={ProfileSectionStyling.top}>
      <div className={ProfileSectionStyling.topRow}>
        <div className={ProfileSectionStyling.userNameStyling}>
          <div>
            <h1>{ProfileSectionInformation.UserName}</h1>
          </div>
          <div className={ProfileSectionStyling.editOptionButton}>
            <EditProfileInformation />
          </div>
        </div>
      </div>
      <div className={ProfileSectionStyling.topRow}>
        <h1>{ProfileSectionInformation.UserHandle}</h1>
      </div>
      <div className={ProfileSectionStyling.topRow}>
        <p>{ProfileSectionInformation.Location}</p>
      </div>
      <div className={ProfileSectionStyling.topRow}>
        <p>
          {ProfileSectionInformation.Connections}
          {' '}
          Connections |
          {ProfileSectionInformation.Posts}
          {' '}
          Posts
        </p>
      </div>
    </div>
    <div className={ProfileSectionStyling.middle}>
      <p>
        {ProfileSectionInformation.Biography}
        {' '}
      </p>
    </div>
    <div className={ProfileSectionStyling.bottom}>
      <div className={ProfileSectionStyling.activities}>
        <p>Activity</p>
        <p>{ProfileSectionInformation.Activities}</p>
      </div>
      <div className={ProfileSectionStyling.interests}>
        <p>Interest</p>
        <p>{ProfileSectionInformation.Interest}</p>
      </div>
    </div>
  </div>
);

export default ProfileSection;
