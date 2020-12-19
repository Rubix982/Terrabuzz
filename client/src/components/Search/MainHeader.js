import React, { useContext } from 'react';
import ComponentStyling from '../../style/Search/MainHeader.module.css';

import { searchContext } from './SearchTypeContext';

const MainHeader = () => {
  const { buttonActive } = useContext(searchContext);

  return (
    <div className={ComponentStyling.header}>
      <div className={ComponentStyling.title}>
        <h1>Results found for #philosphy</h1>
      </div>
      <div className={ComponentStyling.buttons}>
        <div
          role="button"
          className={
            buttonActive.state === 'Interested in'
              ? `${ComponentStyling.leftButton} ${ComponentStyling.active}`
              : ComponentStyling.leftButton
          }
          onClick={() => {
            buttonActive.setter('Interested in');
          }}
        >
          Interested in
        </div>
        <div
          role="button"
          className={
            buttonActive.state === 'Posted on'
              ? `${ComponentStyling.rightButton} ${ComponentStyling.active}`
              : ComponentStyling.rightButton
          }
          onClick={() => {
            buttonActive.setter('Posted on');
          }}
          handleKeyDown={(event) => {
            if (event.keyCode === 13) {
              buttonActive.setter('Posted on');
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
