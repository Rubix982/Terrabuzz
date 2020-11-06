import React from 'react';

// Styling
import ContentBodyStying from '../../style//Publish/ContentBody.module.css'

const ContentBody = ({ children, style }) => {
    return (
        <div>
            <form className={ContentBodyStying}>
                <label>
                    <input type='text' placeholder='Title goes here' />
                </label>
            </form>
        </div>
    )
};

export default ContentBody;