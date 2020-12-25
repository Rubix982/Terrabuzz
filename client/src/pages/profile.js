import React from 'react';

import Container from '../components/FullViewContainer';
import Navbar from '../components/Navbar';
import Header from '../components/Profile/Header';
import MainContent from '../components/Profile/MainContent';
import ProfileProvider from '../components/Profile/ProfileContext';

const Profile = () => (
  <Container style={{ display: 'grid', gridTemplateRows: '10% 30% 60%' }}>
    <Navbar />
    <ProfileProvider>
      <Header />
      <MainContent />
    </ProfileProvider>
  </Container>
);

export default Profile;
