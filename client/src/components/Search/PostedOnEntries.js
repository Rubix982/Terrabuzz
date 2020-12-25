import React from 'react';
import Post from './Post';
import ComponentStyling from '../../style/Search/Content.module.css';

const SearchPostedOnEntries = ({ postedOnEntries: { postData, authorData } }) => {
  const entries = new Array(postData.length);
  const factor = 4
  const numberOfRows = Math.ceil(parseFloat(entries.length / factor));

  for(let i = 0; i < numberOfRows; i++ ) {
    const children = [];

    for(let j = i * factor; j < (i + 1) * factor && j < entries.length ; j++ ) {
      children.push(<Post key={postData[j].handle} postData={postData[j]} profilePicture={authorData[j]} />);
    }

    entries.push(
      <div key={i} className={ComponentStyling.postRow}>
          {children}
      </div>
    );
  }

  return (entries);
};

export default SearchPostedOnEntries;
