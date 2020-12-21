import React, { useContext } from 'react';

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
import { profileContext } from './ProfileContext';
 
const ExternalLinks = () => {
  const { profile: { state: { isSessionUser ,userInformation } } } = useContext(profileContext);

  return (
    <div className={ExternalLinksStyling.GridSystem}>
      <div className={ExternalLinksStyling.externalLinkLayout}>
        <SocialMediaFeedLink logo={InstagramLogo} link={userInformation.Instagram} />
        <SocialMediaFeedLink logo={LinkedInLogo} link={userInformation.LinkedIn} />
        <SocialMediaFeedLink logo={FacebookLogo} link={userInformation.Facebook} />
        <SocialMediaFeedLink logo={WebsiteLogo} link={userInformation.Website} />
        <SocialMediaFeedLink logo={TwitterLogo} link={userInformation.Twitter} />
        <SocialMediaFeedLink logo={YoutubeLogo} link={userInformation.Youtube} />
      </div>
      { isSessionUser ? (<EditInfoComponent />) : '' }
    </div>
  );
};

export default ExternalLinks;
