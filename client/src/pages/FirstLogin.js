import React from 'react';
import Template from '../components/Login-Register-FP/template';
import { MainContent } from '../components/FirstLogin/MainContent';
import ImageSource from '../assets/FirstLogin/firstLogin.jpg';

const FirstLogin = () => {
  const LeftAlignStyle = {
    overflowY: 'scroll',
  };

  return (
    <Template bgUrl={ImageSource} style={LeftAlignStyle}>
      <MainContent />
    </Template>
  );
};

export default FirstLogin;
