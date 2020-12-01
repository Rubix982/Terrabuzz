import React from 'react';

import LinkStyling from '../../style/Profile/Link.module.css';

const Link = ({ link, logo }) => {
  const hrefLink = `https://${link}`;

  return (
    <div className={LinkStyling.Layout}>
      <img src={logo} alt="" />
      <a href={hrefLink}>{link}</a>
    </div>
  );
};

export default Link;
