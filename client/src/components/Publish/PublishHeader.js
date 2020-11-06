import React from 'react';
import Options from './Options'

// Styling
import PublishHeaderStying from '../../style//Publish/PublishHeader.module.css'

const PublishHeader = ({ children, style }) => {
    return (
        <div className={PublishHeaderStying}>
            <Options />
        </div>
    )
};

export default PublishHeader;