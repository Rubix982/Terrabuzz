import React, { useContext } from 'react';

// React components
import EditProfileInformation from './EditProfileInformation';
import { profileContext } from './ProfileContext';
import { concatInterests } from '../../services/profile';

// Styling
import ProfileSectionStyling from '../../style/Profile/ProfileSection.module.css';

const ProfileSection = () => {
  const { profile: { state: { isSessionUser , userInformation, connections, interests, posts } } } = useContext(profileContext);

  return (
    <div className={ProfileSectionStyling.layoutClass}>
      <div className={ProfileSectionStyling.top}>
        <div className={ProfileSectionStyling.topRow}>
        { isSessionUser ? (
          <div className={ProfileSectionStyling.userNameStyling}>
            <div>
              <h1>{userInformation.Username}</h1>
            </div>
            <div className={ProfileSectionStyling.editOptionButton}>
              <EditProfileInformation />
            </div>
          </div>
        ) : (
          <div>
            <h1>{userInformation.Username}</h1>
          </div>
        ) }
        
        </div>
        <div className={ProfileSectionStyling.topRow}>
          <h1>@{userInformation.Handle}</h1>
        </div>
        <div className={ProfileSectionStyling.topRow}>
          <p>{userInformation.Location}</p>
        </div>
        <div className={ProfileSectionStyling.topRow}>
          <p>
            {connections.totalConnections}
            {' '}
            Following |
            {' '}
            {posts.length}
            {' '}
            Posts
          </p>
        </div>
      </div>
      <div className={ProfileSectionStyling.middle}>
        <p>
          {userInformation.Biography}
          {' '}
        </p>
      </div>
      <div className={ProfileSectionStyling.bottom}>
        <div className={ProfileSectionStyling.activities}>
          <p>Activity</p>
          <p>{userInformation.Activities}</p>
        </div>
        <div className={ProfileSectionStyling.interests}>
          <p>Interest</p>
          <p>{concatInterests(interests)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
