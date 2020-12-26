import React from 'react';

import Container from '../components/FullViewContainer';
import Navbar from '../components/Navbar';
import Header from '../components/Profile/Header';
import MainContent from '../components/Profile/MainContent';
import ProfileProvider from '../components/Profile/ProfileContext';
import NavbarLoggedOut from '../components/NavbarLoggedOut';

const Profile = () => {

  let loggedIn = (localStorage.getItem('loggedIn') === 'true') ? true : false;

  return (
    <Container style={{ display: 'grid', gridTemplateRows: '10% 30% 60%' }}>
      {loggedIn ? <Navbar /> : <NavbarLoggedOut />}
      <ProfileProvider>
        <Header />
        <MainContent />
      </ProfileProvider>
    </Container>
  )
};

export default Profile;
