import React from 'react';
import Options from './Options'

// Styling
import PublishHeaderStying from '../../style//Publish/PublishHeader.module.css'

const PublishHeader = ({ children, style }) => {
    return (
        <div className={PublishHeaderStying}>

            <div id='back-arrow'>   
                <img  alt='back-arrow'/>
            </div>

            <div id='gp-back-text'>
                Go back
            </div>

            <div id='publish-page'>  
                Publish Page
            </div>

            <div id='option-div'>
                <Options />
            </div>
        </div>
    )
};

export default PublishHeader;