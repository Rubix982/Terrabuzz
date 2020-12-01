import React from 'react';
import ProfileSectionStyling from '../../style/Profile/ProfileSection.module.css';

const ProfileSection = ({ ProfileSectionInformation }) => (
  <div className={ProfileSectionStyling.layoutClass}>
    <div className={ProfileSectionStyling.top}>
      <div className={ProfileSectionStyling.topRow}>
        <h1>{ProfileSectionInformation.UserName}</h1>
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

  // <div className={ProfileSectionStyling.flexLayout}>
  //   <div className={ProfileSectionStyling.layoutClass}>
  //     <p className={ProfileSectionStyling.UserName}>{children.UserName}</p>
  //     <p className={ProfileSectionStyling.UserHandle}>
  //       {children.UserHandle}
  //     </p>
  //     <p className={ProfileSectionStyling.Location}>{children.Location}</p>
  //     <div className={ProfileSectionStyling.borderRadius}>
  //       <div className={ProfileSectionStyling.ConnectionPostBreaker}>
  //         <p
  //           className={ProfileSectionStyling.Connections}
  //           style={{ display: "inline-block" }}
  //         >
  //           {children.Connections} Connections
  //         </p>
  //         <p
  //           className={ProfileSectionStyling.Posts}
  //           style={{ display: "inline-block" }}
  //         >
  //           {children.Posts} Posts
  //         </p>
  //       </div>
  //       <p className={ProfileSectionStyling.Biography}>
  //         {children.Biography}
  //       </p>
  //     </div>
  //     <div className={ProfileSectionStyling.FixSpacingIssue}>
  //       <p className={ProfileSectionStyling.ActivityHeader}>Activity</p>
  //       <p className={ProfileSectionStyling.Activities}>
  //         {children.Activities}
  //       </p>
  //       <p className={ProfileSectionStyling.InterestHeader}>Interest</p>
  //       <p className={ProfileSectionStyling.Interest}>{children.Interest}</p>
  //     </div>
  //   </div>
  // </div>
);

export default ProfileSection;
