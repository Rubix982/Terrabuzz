import React from 'react';

// Styling
import TitlePlaceholderStying from '../../style//Publish/TitlePlaceholder.module.css'

const TitlePlaceholder = ({ chilren, style }) => {
    return (
        <div>
            <div className={TitlePlaceholderStying.titleContent}>
                <form>
                    <label>
                        <input type="text" name="title" className={TitlePlaceholderStying.removeFocus} aria-placeholder="Title goes here..." contentEditable="true" placeholder='Title goes here...' autoFocus='autoFocus' maxLength="40" />
                    </label>
                </form>
            </div>
        </div>
    )
};

export default TitlePlaceholder;