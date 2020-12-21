import React, { useEffect, useState } from 'react';
import Container from '../components/FullViewContainer';
import MainContent from '../components/NewsFeed/MainContent';
import FirstLogin from './FirstLogin.js';

// the div is for navbar
import Navbar from '../components/Navbar';

// The service
import { firstLoginCheck } from '../services/checkForFirstLogin.js';

const Feed = () => {

  let [isFirstLogin, setIsFirstLogin] = useState(false);

  useEffect(async () => {
    try {
      const status = await firstLoginCheck();

      // The page to be rendered should not be the first login page
      if (status === false) {
        setIsFirstLogin(false);
      } else if (status === true) {
        // the first login page should be rendered
        setIsFirstLogin(true);
      }
    } catch (error) {
      alert(`Unable to check for first login, because of error ${error.message}`);
    }
  });

  const FeedComponent = () => {
    return (
      <Container
        style={{
          backgroundColor: '#18191a',
          display: 'grid',
          gridTemplateRows: '10% 90%',
        }}
      >
        <Navbar first_name="Tashik" title="Terrabuzz" />
        <MainContent />
      </Container>
    )
  }

  if (isFirstLogin) {
    return (<FirstLogin />)
  } else {
    return (<FeedComponent />)
  }

};

export default Feed;
