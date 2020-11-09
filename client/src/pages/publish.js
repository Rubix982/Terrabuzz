import React from 'react';

// Component imports
import MainContent from './../components/Publish/MainContent';
import PublishHeader from './../components/Publish/PublishHeader';

import OverrideStyles from './../style/OverrideStyles.module.css'

const Publish = ({ children, style }) => {
    return (
        <div className={OverrideStyles.style}>
            <PublishHeader />
            <MainContent />
        </div>
    );
};

export default Publish;