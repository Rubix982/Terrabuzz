import React from 'react';

// Styling
import TitlePlaceholderStying from '../../style//Publish/TitlePlaceholder.module.css'

const TitlePlaceholder = ({ chilren, style }) => {
    return (
        <div>
            <form className={TitlePlaceholderStying}>
                <label>
                    <input type='text' placeholder='Title goes here' />
                </label>
            </form>
        </div>
    )
};

export default TitlePlaceholder;