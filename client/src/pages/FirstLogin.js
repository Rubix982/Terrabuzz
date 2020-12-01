import React from 'react';
import Template from '../components/Login-Register-FP/template.js';
import MainContent from '../components/FirstLogin/MainContent';
import ImageSource from '../assets/FirstLogin/firstLogin.jpg';

const FirstLogin = ({ children, style }) => {

    const LeftAlignStyle = {
        overflowY: 'scroll'
    };

    return (
        <Template bgUrl={ImageSource} style={LeftAlignStyle}>
            <MainContent />
        </Template>
    );
};

export default FirstLogin;