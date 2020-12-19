import React from 'react';
import Post from './Post';
import ComponentStyling from '../../style/Search/Content.module.css';

const PostedOnEntries = () => {
  const entries = new Array(2);
  const factor = 4;
  const numberOfRows = Math.ceil(entries.length / factor);

  for(let i = 0; i < numberOfRows; i++ ) {
    const children = [];

    for(let j = i * factor; j < (i + 1) * factor && j < entries.length ; j++ ) {
      children.push(<Post/>);
    }

    entries.push(
      <div key={i} className={ComponentStyling.postRow}>
          {children}
      </div>
    );
  }

  return (entries);
};

export default PostedOnEntries;
