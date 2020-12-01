import React from 'react';
import { CenterAlign } from '../FlexAlignment';
import ComponentStyling from '../../style/Post/MainContent.module.css';
import PostContent from './PostContent';
import CommentContent from './CommentContent';

const MainContent = () => (
  <CenterAlign>
    <main className={ComponentStyling.main}>
      <PostContent />
      <CommentContent />
    </main>
  </CenterAlign>
);

export default MainContent;
