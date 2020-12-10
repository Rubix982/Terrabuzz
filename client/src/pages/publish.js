import React from 'react';

// Component imports
import MainContent from '../components/Publish/MainContent';
import PublishHeader from '../components/Publish/PublishHeader';
import PublishProvider from '../components/Publish/PublishContext';

// Styling
import PublishStyling from '../style/Publish/Publish.module.css';

const Publish = () => (
  <PublishProvider>
    <div className={PublishStyling.container}>
      <PublishHeader />
      <MainContent />
    </div>
  </PublishProvider>
);

export default Publish;
