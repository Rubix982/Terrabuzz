import React from 'react';

// Styling
import ContentHeadStyling from '../../style/Home/ContentHead.module.css';

const ContentHead = () => (
  <div className={ContentHeadStyling.LatestPostHead}>
    <div>
      <p>Latest posts on Terrabuzz</p>
      <hr />
    </div>
    <div>
      {' '}
      {/* For future content, if needed */}
    </div>
  </div>
);

export default ContentHead;
