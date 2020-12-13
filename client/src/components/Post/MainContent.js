import React, { useContext } from 'react';
import { postContext } from './PostContext'
import { CenterAlign } from '../FlexAlignment';
import ComponentStyling from '../../style/Post/MainContent.module.css';
import PostContent from './PostContent';
import CommentContent from './CommentContent';

const MainContent = () => {
  const { loading } = useContext(postContext) 

  if (loading.state) {
    return (
      <>
      </>
    );
  } else {
    return (
      <CenterAlign>
        <main className={ComponentStyling.main}>
          <PostContent />
          <CommentContent />
        </main>
      </CenterAlign>
    );
  }
};

export default MainContent;
