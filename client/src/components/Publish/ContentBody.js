import React, { useContext } from 'react';
import { publishContext } from './PublishContext'

// Styling
import ContentBodyStyling from '../../style/Publish/ContentBody.module.css';
// import OverrideStyles from '../../style/OverrideStyles.module.css'

const ContentBody = () => {
  const [, [content, setContent]] = useContext(publishContext);

  return (
    <div>
      <div className={ContentBodyStyling.contentBody}>
        <textarea onChange={(event)=>{
          setContent(event.target.value);
        }} suppressContentEditableWarning value={content} type="text" name="content" className={ContentBodyStyling.removeFocus} aria-placeholder="Enter text here..." contentEditable="true" placeholder="Content goes here ..." maxLength="880" />
      </div>
    </div>
)};

export default ContentBody;
