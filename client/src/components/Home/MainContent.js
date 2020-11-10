import React from 'react'

// React componenets
import NavbarLoggedOut from '../NavbarLoggedOut';
import Feed from './Feed';
import ContentHead from './ContentHead';

// Styling
import MainContentStyling from '../../style/Home/MainContent.module.css';

const MainContent = ({ children, style, props }) => {
    return (
        <div className={MainContentStyling.MainContentContainer}>
            <NavbarLoggedOut first_name="Tashik" title={"Terrabuzz"} />
            <ContentHead />
            <Feed />
        </div >
    )
};

export default MainContent;