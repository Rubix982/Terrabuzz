import React from 'react';

// Component imports
import MainContent from './../components/Publish/MainContent';
import PublishHeader from './../components/Publish/PublishHeader';

const publish = ({ children, style }) => {
    return (
        <div>
            <MainContent />
            <PublishHeader />
        </div>
    );
};

export default publish;