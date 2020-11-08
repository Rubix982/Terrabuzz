import React from 'react';

// Component imports
import MainContent from './../components/Publish/MainContent';
import PublishHeader from './../components/Publish/PublishHeader';

// Styling
import PublishStyling from './../style/Publish/Publish.module.css'

const Publish = ({ children, style }) => {
    return (
        <div className={PublishStyling.container}>
            <PublishHeader />
            <MainContent />
        </div>
    );
};

export default Publish;