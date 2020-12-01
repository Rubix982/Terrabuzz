import React from 'react';
import TitlePlaceholder from './TitlePlaceholder';
import ContentBody from './ContentBody';

// Styling
import MainContentStyling from '../../style/Publish/MainContent.module.css';

const MainContent = () => (
  <div className={MainContentStyling.main}>
    <div>
      <TitlePlaceholder />
    </div>

    <hr />

    <div>
      <ContentBody />
    </div>
  </div>
);

export default MainContent;
