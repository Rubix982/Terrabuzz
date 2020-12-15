import React, { useContext } from 'react';

// React components
import ProfileSection from './ProfileSection';
import PostsAndLinks from './PostsAndLinks';
import { profileContext } from './ProfileContext';

import MainContentStyling from '../../style/Profile/MainContent.module.css';

const MainContent = () => {
  const { loading } = useContext(profileContext);

  if (loading.state) {
    return (
      <>
      </>
    );  
  } else {
    return (
      <div className={MainContentStyling.detailsAndPostsLinks}>
        <ProfileSection />
        <PostsAndLinks />
      </div>
    );
  }

  
};

export default MainContent;
