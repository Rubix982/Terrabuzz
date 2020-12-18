import React, { useEffect, useState } from 'react';
import Container from '../components/FullViewContainer';
import MainContent from '../components/NewsFeed/MainContent';

// the div is for navbar
import Navbar from '../components/Navbar';

// The API servicea
import API from '../API/API';
require('dotenv').config();

const Feed = () => {

  let [isFirstLogin, setIsFirstLogin] = useState(false);
  console.log(`In Feed ${process.env.REACT_APP_API_URL}`);

  useEffect(async() => {
    try {
      await API.getRequest(`${process.env.REACT_APP_API_URL}/feed`);
    } catch(error) {
      alert(`Unable to check for first login, because of error ${error.message}`);
    }
  });

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
