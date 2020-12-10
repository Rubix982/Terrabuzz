import React, { useContext } from 'react';
import { publishContext } from './PublishContext'

// Styling
import TitlePlaceholderStying from '../../style/Publish/TitlePlaceholder.module.css';

const TitlePlaceholder = () => {
  const [[title, setTitle]] = useContext(publishContext);  

  return (
    <div>
      <div className={TitlePlaceholderStying.titleContent}>
        <form>
          <label htmlFor="title">
            <input onChange={(event)=>{
              setTitle(event.target.value);
            }} suppressContentEditableWarning value={title} type="text" name="title" className={TitlePlaceholderStying.removeFocus} aria-placeholder="Title goes here..." contentEditable="true" placeholder="Title goes here..." maxLength="40" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default TitlePlaceholder;
