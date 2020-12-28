import React, { useContext } from 'react';
import Container from '../components/FullViewContainer';
import MainContent from '../components/NewsFeed/MainContent';
import { loginUserContext } from '../components/LoginUserContext';
// the div is for navbar
import Navbar from '../components/Navbar';
import Home from './home';

const Feed = () => {
  const { login } = useContext(loginUserContext);
  
  if (login.state) {
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

  return (<Home />);
};

export default Feed;
