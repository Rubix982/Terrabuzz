import React from 'react';
import '../style/Settings/Settings.css';
import Container from '../components/FullViewContainer';
import Navbar from '../components/Navbar';
import MainContent from '../components/Settings/MainContent';

const Settings = () => (
  <Container style={{ display: 'grid', gridTemplateRows: '10% 90%' }}>
    <Navbar first_name="Tashik" title="Terrabuzz" />
    <MainContent />
  </Container>
);

export default Settings;