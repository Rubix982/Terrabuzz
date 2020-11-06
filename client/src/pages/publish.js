import React from 'react';

// Component imports
import MainContent from './../components/Publish/MainContent';
import PublishHeader from './../components/Publish/PublishHeader';

const Publish = ({ children, style }) => {
    return (
        <div>
            <MainContent />
            <PublishHeader />
        </div>
    );
};

export default Publish;