import React from 'react';
import ComponentStyling from '../../style/Search/MainContentInterest.module.css';
import MainHeader from './MainHeader';
import InterestContent from './InterestContent';

const MainContentInterest = () => (
  <div className={ComponentStyling.content}>
    <MainHeader />
    <InterestContent />
  </div>
);

export default MainContentInterest;
