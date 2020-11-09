import React from 'react';

// Styling
import TitlePlaceholderStying from '../../style//Publish/TitlePlaceholder.module.css'

const TitlePlaceholder = ({ chilren, style }) => {
    return (
        <div>
            <div className={TitlePlaceholderStying.titleContent}>
                <form>
                    <label>
                        <input type="text" name="title" className={TitlePlaceholderStying.removeFocus} aria-placeholder="Title goes here..." contenteditable="true" placeholder='Title goes here...' autoFocus='autoFocus' maxLength="44" />
                    </label>
                </form>
            </div>
        </div>
    )
};

export default TitlePlaceholder;