import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/FullViewContainer';
import Navbar from '../components/Navbar';
import MainContentInterest from '../components/Search/MainContentInterest';
import MainContentProfile from '../components/Search/MainContentProfile';

const Search = () => {
  const { searchType } = useParams();

  return (
    <Container
      style={{
        display: 'grid',
        gridTemplateRows: '10% 90%',
        backgroundColor: '#18191a',
      }}
    >
      <Navbar first_name="Tashik" title="Terrabuzz" />
      { searchType ? (( searchType === 'interest') ?  <MainContentInterest /> : <MainContentProfile/>) : '' }
    </Container>
  );
};

export default Search;
