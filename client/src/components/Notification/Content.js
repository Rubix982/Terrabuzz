import React from 'react';
import ComponentStyling from '../../style/Notification/Content.module.css';
import { SingleNotifComment, SingleNotifLike } from './SingleNotif';

const ContentComment = ({ content }) => {
  let data = JSON.parse(content);
  return (
    <div className={ComponentStyling.content}>
      {data.map((element) => {
        return (
          <SingleNotifComment key={element._id} profilePicture={element.profilePicture} userHandle={element.for} post={element.post} />
        )
      })}
    </div>
  )
};

const ContentLike = ({ content }) => {
  let data = JSON.parse(content);
  return (
    <div className={ComponentStyling.content}>
      {data.map((element) => {
        return (
          <SingleNotifLike key={element._id} profilePicture={element.profilePicture} userHandle={element.by} post={element.post} />
        )
      })}
    </div>
  )
};

export { ContentComment, ContentLike };
