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
import Link from './Link';

const ExternalLinks = () => {
  const InstragramLink = 'instagram.com/tashikmoinshaikh/';
  const FacebookLink = 'facebook.com/TashikMoinSheikh';
  const LinkedInLink = 'linkedin.com/in/tashik-moin-sheikh-08872116b/';
  const WebsiteLink = 'dev-hearted.software';
  const YoutubeLink = 'youtube.com/channel/UC_bxQjn16KukkyWqTY_MZvg';
  const TwitterLink = 'twitter.com/TashikMSheikh';

  const Instagram = { Logo: InstagramLogo, Link: InstragramLink };
  const Facebook = { Logo: FacebookLogo, Link: FacebookLink };
  const Website = { Logo: WebsiteLogo, Link: WebsiteLink };
  const Youtube = { Logo: YoutubeLogo, Link: YoutubeLink };
  const Twitter = { Logo: TwitterLogo, Link: TwitterLink };
  const LinkedIn = { Logo: LinkedInLogo, Link: LinkedInLink };

  return (
    <div className={ExternalLinksStyling.externalLinkLayout}>
      <Link to="/#" props={Youtube} />
      <Link to="/#" props={Twitter} />
      <Link to="/#" props={LinkedIn} />
      <Link to="/#" props={Instagram} />
      <Link to="/#" props={Facebook} />
      <Link to="/#" props={Website} />
    </div>
  );
};

export default ExternalLinks;
