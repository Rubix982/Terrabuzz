import React from 'react';
import SingleNotifStyling from '../../style/Notification/SingleNotif.module.css';
import { CenterAlign } from '../FlexAlignment';

const SingleNotifComment = ({ content }) => (
  <div className={SingleNotifStyling.entry}>
    <div className={SingleNotifStyling.main}>
      <CenterAlign>
        <div className={SingleNotifStyling.profilePicture}>
          <img alt="user icon" src="/assets/img/profile_pictures/boy(3).svg" />
        </div>
      </CenterAlign>
      <div className={SingleNotifStyling.postBody}>
        <div className={SingleNotifStyling.postText}>
          <p>
            <span className={SingleNotifStyling.UserNameHandle}>{content} </span>
            commented on your post!
          </p>
        </div>
        <div className={SingleNotifStyling.timeStampInfo}>
          <p>
            30th December, 2020
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SingleNotifLike = ({ content }) => (
  <div className={SingleNotifStyling.entry}>
    <div className={SingleNotifStyling.main}>
      <CenterAlign>
        <div className={SingleNotifStyling.profilePicture}>
          <img alt="user icon" src="/assets/img/profile_pictures/boy(3).svg" />
        </div>
      </CenterAlign>
      <div className={SingleNotifStyling.postBody}>
        <div className={SingleNotifStyling.postText}>
          <p>
            <span className={SingleNotifStyling.UserNameHandle}>{content} </span>
            liked your post!
          </p>
        </div>
        <div className={SingleNotifStyling.timeStampInfo}>
          <p>
            30th December, 2020
           </p>
        </div>
      </div>
    </div>
  </div>
);

export { SingleNotifComment, SingleNotifLike };
