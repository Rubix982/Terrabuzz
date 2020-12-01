import React from 'react';
import Container from '../components/FullViewContainer';
import Navbar from '../components/Navbar';
import MainContentInterest from '../components/Search/MainContentInterest';

const Search = () => (
  <Container
    style={{
      display: 'grid',
      gridTemplateRows: '10% 90%',
      backgroundColor: '#18191a',
    }}
  >
    <Navbar first_name="Tashik" title="Terrabuzz" />

    <MainContentInterest />
    {/* <MainContentProfile></MainContentProfile> */}
  </Container>
);

export default Search;
