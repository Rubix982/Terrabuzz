import React from 'react';

// Styling
import ContentBodyStyling from '../../style//Publish/ContentBody.module.css'

const ContentBody = ({ children, style }) => {
    return (
        <div>
            <div className={ContentBodyStyling.contentBody}>
                {/* TODO: Find a way to limit the numbe of characters inputted into the div */}
                <textarea type="text" name="content" className={ContentBodyStyling.removeFocus} aria-placeholder="Enter text here..." contenteditable="true" placeholder='Content goes here...' maxlength="500" />
            </div>
        </div>
    )
};

export default ContentBody;