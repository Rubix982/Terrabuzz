import React from 'react';

// React componenets
import {ContentComment, ContentLike} from './Content';
import ContentHead from './ContentHead';
import { LeftAlign, RightAlign } from '../FlexAlignment';

// Styling
import MainContentStyling from '../../style/Notification/MainContent.module.css';

const MainContent = () => (
  <div className={MainContentStyling.MainContentContainer}>
    <div className={MainContent.ColumnContentContainer}>
      <LeftAlign>
        <ContentHead content='Notifications' />
      </LeftAlign>
      <LeftAlign>
        <ContentComment content='Richard Miles'/>
      </LeftAlign>
    </div>
    <div className={MainContent.ColumnContentContainer}>
      <RightAlign>
        <ContentHead content='Likes' />
      </RightAlign>
      <RightAlign>
        <ContentLike content='Richard Miles'/>
      </RightAlign>
    </div>
  </div>
);

export default MainContent;
