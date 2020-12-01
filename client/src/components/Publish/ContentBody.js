import React from 'react';

// Styling
import ContentBodyStyling from '../../style/Publish/ContentBody.module.css';
// import OverrideStyles from '../../style/OverrideStyles.module.css'

const ContentBody = () => (
  <div>
    <div className={ContentBodyStyling.contentBody}>
      <textarea type="text" name="content" className={ContentBodyStyling.removeFocus} aria-placeholder="Enter text here..." contentEditable="true" placeholder="Content goes here..." maxLength="500" />
    </div>
  </div>
);

export default ContentBody;
