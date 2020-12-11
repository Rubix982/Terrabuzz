import React from 'react';
import ComponentStyling from '../../style/Notification/Content.module.css';
import {SingleNotifComment, SingleNotifLike} from './SingleNotif';

const ContentComment = ({ content }) => (
  <div className={ComponentStyling.content}>
    <SingleNotifComment content={content}/>
    <SingleNotifComment content={content}/>
    <SingleNotifComment content={content}/>
    <SingleNotifComment content={content}/>
    <SingleNotifComment content={content}/>
    <SingleNotifComment content={content}/>
    <SingleNotifComment content={content}/>
    <SingleNotifComment content={content}/>
  </div>
);

const ContentLike = ({ content }) => (
  <div className={ComponentStyling.content}>
    <SingleNotifLike content={content}/>
    <SingleNotifLike content={content}/>
    <SingleNotifLike content={content}/>
    <SingleNotifLike content={content}/>
    <SingleNotifLike content={content}/>
    <SingleNotifLike content={content}/>
    <SingleNotifLike content={content}/>
    <SingleNotifLike content={content}/>
  </div>
);

export {ContentComment, ContentLike};
