import React from 'react';
import Container from '../components/FullViewContainer';
import MainContent from '../components/NewsFeed/MainContent';

// the div is for navbar
import Navbar from '../components/Navbar';

const Feed = () => (
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
);

export default Feed;
