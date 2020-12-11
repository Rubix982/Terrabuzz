import React from 'react';

// Styling
import ContentHeadStyling from '../../style/Notification/ContentHead.module.css';

const ContentHead = ({ content }) => (
  <div className={ContentHeadStyling.LatestPostHead}>
    <div>
      <p>{content}</p>
      <hr />
    </div>
    <div>
      {' '}
      {/* For future content, if needed */}
    </div>
  </div>
);

export default ContentHead;
