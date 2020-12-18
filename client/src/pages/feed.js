import React, { useEffect, useState } from 'react';
// import { Redirect, Route } from 'react-router-dom';
import Container from '../components/FullViewContainer';
import MainContent from '../components/NewsFeed/MainContent';

// the div is for navbar
import Navbar from '../components/Navbar';

// The API servicea
// import { firstLoginCheck } from '../service/checkForFirstLogin.js';

const Feed = () => {

  let [isFirstLogin, setIsFirstLogin] = useState(false);

  // useEffect(async () => {
  //   try {
  //     const { status } = await firstLoginCheck();

  //     // The page to be rendered should not be the first login page
  //     if (status === false) {
  //       setIsFirstLogin(false);
  //     } // the first login page should be rendered
  //     else {
  //       setIsFirstLogin(true);
  //     }
  //   } catch (error) {
  //     alert(`Unable to check for first login, because of error ${error.message}`);
  //   }
  // });

  // <Router>
  //   {isFirstLogin ? <Redirect to='/firstLogin' /> : 
  //   }
  // </Router>

  if (isFirstLogin) {
    return (
      <>
      </>
    )
  } else {
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
};

export default Feed;
