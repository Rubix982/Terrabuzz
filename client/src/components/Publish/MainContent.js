import React from 'react'
import TitlePlaceholder from './TitlePlaceholder'
import ContentBody from './ContentBody'

// Styling
import MainContentStying from '../../style//Publish/MainContent.module.css'

const MainContent = ({ children, style }) => {
    return (
        <div className={MainContentStying}>
            <TitlePlaceholder />
            <ContentBody />
        </div>
    )
};

export default MainContent;