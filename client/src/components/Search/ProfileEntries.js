import React from 'react';
import Profile from './Profile';
import ComponentStyling from '../../style/Search/Content.module.css';

const SearchProfileEntries = ({ profilesEntries }) => {
  const entries = new Array(profilesEntries.length);
  const factor = 4;
  const numberOfRows = Math.ceil(parseFloat(entries.length / factor));

  for (let i = 0; i < numberOfRows; i++) {
    const children = [];

    for (let j = i * factor; j < (i + 1) * factor && j < entries.length ; j++) {
      children.push(<Profile key={profilesEntries[j].Handle} username={profilesEntries[j].Username} handle={profilesEntries[j].Handle} />);
    }

    entries.push(
      <div key={i} className={ComponentStyling.postRow}>
        {children}
      </div>
    )
  }

  return(entries);
};

export default SearchProfileEntries;
