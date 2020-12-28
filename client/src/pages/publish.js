import React, { useContext } from 'react';

// Component imports
import MainContent from '../components/Publish/MainContent';
import PublishHeader from '../components/Publish/PublishHeader';
import PublishProvider from '../components/Publish/PublishContext';
import { loginUserContext } from '../components/LoginUserContext';
import Home from './home';

// Styling
import PublishStyling from '../style/Publish/Publish.module.css';

const Publish = () => {
  const { login } = useContext(loginUserContext);

  if(login.state) {
    return (
      <PublishProvider>
        <div className={PublishStyling.container}>
          <PublishHeader />
          <MainContent />
        </div>
      </PublishProvider>
    );
  }

  return (<Home />);
};

export default Publish;
