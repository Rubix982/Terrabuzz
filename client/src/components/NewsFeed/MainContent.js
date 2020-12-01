import React from 'react';
import ComponentStyling from '../../style/NewsFeed/MainContent.module.css';
import Content from './Content';

// the two divs are for left and right side bars which can be reusable/ static components

const MainContent = () => (
  <main className={ComponentStyling.main}>
    <div />
    <Content />
    <div />
  </main>
);

export default MainContent;
