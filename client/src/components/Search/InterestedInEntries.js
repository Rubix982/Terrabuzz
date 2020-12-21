import React from 'react';
import InterestProfile from './InterestProfile';
import ComponentStyling from '../../style/Search/Content.module.css';

const SearchInterestedInEntries = ({ interestedInEntries, query }) => {
  const entries = new Array(interestedInEntries.length);
  const factor = 4;
  const numberOfRows = Math.ceil(parseFloat(entries.length / factor));

  for (let i = 0; i < numberOfRows; i++) {
    const children = [];

    for (let j = i * factor; j < (i + 1) * factor && j < entries.length ; j++) {
      children.push(<InterestProfile query={query} entryData={interestedInEntries[j]} />);
    }

    entries.push(
      <div key={i} className={ComponentStyling.postRow}>
        {children}
      </div>
    )
  }

  return(entries);
};

export default SearchInterestedInEntries;
