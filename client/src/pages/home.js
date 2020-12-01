import React from 'react';

// React components
import Container from '../components/FullViewContainer';
import NavbarLoggedOut from '../components/NavbarLoggedOut';
import MainContent from '../components/Home/MainContent';

const Home = () => (
  <Container
    style={{
      backgroundColor: '#18191a',
      display: 'grid',
      gridTemplateRows: '10% 90%',
    }}
  >
    <NavbarLoggedOut title="Terrabuzz" />
    <MainContent />
  </Container>
);

export default Home;
