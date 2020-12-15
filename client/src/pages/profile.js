import React from 'react';

import Container from '../components/FullViewContainer';
import Navbar from '../components/Navbar';
import ImageHeader from '../components/Profile/ImageHeader';
import MainContent from '../components/Profile/MainContent';
import ProfileProvider from '../components/Profile/ProfileContext';

const Profile = () => (
  <Container style={{ display: 'grid', gridTemplateRows: '10% 30% 60%' }}>
    <Navbar />
    <ProfileProvider>
      <ImageHeader />
      <MainContent />
    </ProfileProvider>
  </Container>
);

export default Profile;
