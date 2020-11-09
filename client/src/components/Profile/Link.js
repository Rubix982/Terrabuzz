import React from 'react';

import LinkStyling from '../../style/Profile/Link.module.css'

const Link = ({ children, style, props }) => {
    
    const hrefLink = "https://" + props.Link;
    
    return (
        <div className={LinkStyling.Layout}>
            <img src={props.Logo} alt="" />
            <a href={hrefLink}>{props.Link}</a>
        </div>
    );
};

export default Link;