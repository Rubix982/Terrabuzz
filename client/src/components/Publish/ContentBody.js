import React from 'react';

// Styling
import ContentBodyStyling from '../../style/Publish/ContentBody.module.css'
// import OverrideStyles from '../../style/OverrideStyles.module.css'

const ContentBody = ({ children, style }) => {
    return (
        <div>
            <div className={ContentBodyStyling.contentBody}>
                <textarea type="text" name="content" className={ContentBodyStyling.removeFocus} aria-placeholder="Enter text here..." contenteditable="true" placeholder='Content goes here...' maxlength="500" />
            </div>
        </div>
    )
};

export default ContentBody;