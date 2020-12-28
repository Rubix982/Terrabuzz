import React, { useContext } from 'react';
import Template from '../components/Login-Register-FP/template';
import { MainContent } from '../components/FirstLogin/MainContent';
import ImageSource from '../assets/FirstLogin/firstLogin.jpg';
import { loginUserContext } from '../components/LoginUserContext';
import Feed from './feed';

const FirstLogin = () => {
  const { login, firstLogin } = useContext(loginUserContext);
  
  const LeftAlignStyle = {
    overflowY: 'scroll',
  };

  if (login.state && firstLogin.state) {
    return (
      <Template bgUrl={ImageSource} style={LeftAlignStyle}>
        <MainContent />
      </Template>
    );
  }

  return (<Feed />);
};

export default FirstLogin;
