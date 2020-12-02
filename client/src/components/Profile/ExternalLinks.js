import React from 'react';

// Styling
import ExternalLinksStyling from '../../style/Profile/ExternalLinks.module.css';
import InstagramLogo from '../../assets/profile/instagram.svg';
import FacebookLogo from '../../assets/profile/facebook.svg';
import LinkedInLogo from '../../assets/profile/linkedin.svg';
import WebsiteLogo from '../../assets/profile/web.svg';
import YoutubeLogo from '../../assets/profile/youtube.svg';
import TwitterLogo from '../../assets/profile/twitter.svg';

// React Component
import SocialMediaFeedLink from './SocialMediaFeedLink';
import EditInfoComponent from './EditInfoComponent';

const ExternalLinks = () => (
  <div className={ExternalLinksStyling.GridSystem}>
    <div className={ExternalLinksStyling.externalLinkLayout}>
      <SocialMediaFeedLink logo={InstagramLogo} link="instagram.com/tashikmoinshaikh/" />
      <SocialMediaFeedLink logo={LinkedInLogo} link="linkedin.com/in/tashik-moin-sheikh-08872116b/" />
      <SocialMediaFeedLink logo={FacebookLogo} link="facebook.com/TashikMoinSheikh" />
      <SocialMediaFeedLink logo={WebsiteLogo} link="dev-hearted.software" />
      <SocialMediaFeedLink logo={YoutubeLogo} link="youtube.com/channel/UC_bxQjn16KukkyWqTY_MZvg" />
      <SocialMediaFeedLink logo={TwitterLogo} link="twitter.com/TashikMSheikh" />
    </div>
    <EditInfoComponent />
  </div>
);

export default ExternalLinks;
