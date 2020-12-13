import React from 'react';
import '../style/Settings-changePassword/Settings-changePassword.css';
import Container from '../components/FullViewContainer';
import Navbar from '../components/Navbar';
import MainContent from '../components/Settings-changePassword/MainContent';

const Settings = () => (
  <Container style={{ display: 'grid', gridTemplateRows: '10% 90%' }}>
    <Navbar title="Terrabuzz" />
    <MainContent />
  </Container>
);

export default Settings;
