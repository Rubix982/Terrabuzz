import React, { useContext } from 'react';
import Container from '../components/FullViewContainer';
import MainContent from '../components/NewsFeed/MainContent';
import FirstLogin from './FirstLogin.js';

// the div is for navbar
import Navbar from '../components/Navbar';
import { loginUserContext } from '../components/LoginUserContext';

const Feed = () => {
  const { firstLogin } = useContext(loginUserContext);
  
  if (firstLogin.state) {
    return (<FirstLogin />);
  }
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
  </Container>)
};

export default Feed;
