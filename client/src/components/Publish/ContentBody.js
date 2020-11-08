import React from 'react';

// Styling
import ContentBodyStyling from '../../style//Publish/ContentBody.module.css'

const ContentBody = ({ children, style }) => {
    return (
        <div>
            <div className={ContentBodyStyling.contentBody}>
                <div className={ContentBodyStyling.removeFocus} role="textbox" aria-placeholder="Content goes here..." contentEditable="true" autoFocus='autoFocus'></div>
            </div>
        </div>
    )
};

export default ContentBody;