import React, { useEffect, useContext } from 'react';
import ComponentStyling from '../../style/Search/Content.module.css';
import InterestedInEntries from './InterestedInEntries';
import PostedOnEntries from './PostedOnEntries';
import { searchContext } from './SearchTypeContext';

const InterestContent = () => {
  const { buttonActive } = useContext(searchContext);
  
  if (buttonActive.state === 'Posted on') {
      return (
        <div className={ComponentStyling.content}>
          <PostedOnEntries />
        </div>
      );
  }
  return (
    <div className={ComponentStyling.content}>
      <InterestedInEntries />
    </div>
  );
};

export default InterestContent;
