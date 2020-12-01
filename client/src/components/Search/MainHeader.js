import React, { useContext } from 'react';
import ComponentStyling from '../../style/Search/MainHeader.module.css';

import { searchTypeContext } from './SearchTypeContext';

const MainHeader = () => {
  const [buttonActive, setButtonActive] = useContext(searchTypeContext);
  return (
    <div className={ComponentStyling.header}>
      <div className={ComponentStyling.title}>
        <h1>Results found for #philosphy</h1>
      </div>
      <div className={ComponentStyling.buttons}>
        <div
          role="button"
          className={
            buttonActive === 'Interested in'
              ? `${ComponentStyling.leftButton} ${ComponentStyling.active}`
              : ComponentStyling.leftButton
          }
          onClick={() => {
            setButtonActive('Interested in');
          }}
        >
          Interested in
        </div>
        <div
          role="button"
          className={
            buttonActive === 'Posted on'
              ? `${ComponentStyling.rightButton} ${ComponentStyling.active}`
              : ComponentStyling.rightButton
          }
          onClick={() => {
            setButtonActive('Posted on');
          }}
          handleKeyDown={(event) => {
            if (event.keyCode === 13) {
              setButtonActive('Posted on');
            }
          }}
        >
          Posted on
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
