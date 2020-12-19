import React from 'react';
import ComponentStyling from '../../style/Search/MainContentInterest.module.css';
import MainHeader from './MainHeader';
import InterestContent from './InterestContent';
import SearchProvider from './SearchTypeContext';

const MainContentInterest = () => (
  <div className={ComponentStyling.content}>
    <SearchProvider>
      <MainHeader />
      <InterestContent />
    </SearchProvider>
  </div>
);

export default MainContentInterest;
