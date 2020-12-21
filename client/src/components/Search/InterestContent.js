import React, { useEffect, useContext } from 'react';
import ComponentStyling from '../../style/Search/Content.module.css';
import SearchInterestedInEntries from './InterestedInEntries';
import SearchPostedOnEntries from './PostedOnEntries';
import { searchContext } from './SearchTypeContext';

const InterestContent = ({ query, postedOn, interestedIn }) => {
  const { buttonActive } = useContext(searchContext);
  
  if (buttonActive.state === 'Posted on') {
      return (
        <div className={ComponentStyling.content}>
          <SearchPostedOnEntries postedOnEntries={postedOn} />
        </div>
      );
  }
  return (
    <div className={ComponentStyling.content}>
      <SearchInterestedInEntries interestedInEntries={interestedIn} query={query} />
    </div>
  );
};

export default InterestContent;
