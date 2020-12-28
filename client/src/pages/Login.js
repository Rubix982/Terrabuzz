import React, { useContext } from 'react';
import Template from '../components/Login-Register-FP/template';
import MainContent from '../components/Login/MainContent';
import { loginUserContext } from '../components/LoginUserContext';
import Feed from './feed';

const Login = () => {
  const { login } = useContext(loginUserContext);
  
  if(!login.state) {
    return (
      <Template>
        <MainContent />
      </Template>
    );
  }

  return (<Feed/>);

};

export default Login;
