import React from 'react';

import LinkStyling from '../../style/Profile/SocialMediaFeedLink.module.css';

const SocialMediaFeedLink = ({ link, logo }) => {
  const hrefLink = `https://${link}`;

  return (
    <div className={LinkStyling.Layout}>
      <img src={logo} alt="" />
      <a href={hrefLink}>{link}</a>
    </div>
  );
};

export default SocialMediaFeedLink;
