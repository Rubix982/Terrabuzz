import React from 'react';

// Styling
import TitlePlaceholderStying from '../../style/Publish/TitlePlaceholder.module.css';

const TitlePlaceholder = () => (
  <div>
    <div className={TitlePlaceholderStying.titleContent}>
      <form>
        <label htmlFor="title">
          <input type="text" name="title" className={TitlePlaceholderStying.removeFocus} aria-placeholder="Title goes here..." contentEditable="true" placeholder="Title goes here..." maxLength="44" />
        </label>
      </form>
    </div>
  </div>
);

export default TitlePlaceholder;
