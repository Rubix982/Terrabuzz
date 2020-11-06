import React from 'react';

// Component imports
import MainContent from './../components/Publish/MainContent';
import PublishHeader from './../components/Publish/PublishHeader';
import Navbar from './../components/Navbar';

const Publish = ({ children, style }) => {
    return (
        <div>
            <Navbar />
            <MainContent />
            <PublishHeader />
        </div>
    );
};

export default Publish;