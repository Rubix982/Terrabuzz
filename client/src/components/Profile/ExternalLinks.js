import React from 'react';

// Styling
import ExternalLinksStyling from '../../style/Profile/ExternalLinks.module.css'
import InstagramLogo from '../../assets/profile/instagram.svg'
import FacebookLogo from "../../assets/profile/facebook.svg"
import LinkedInLogo from "../../assets/profile/linkedin.svg"
import WebsiteLogo from "../../assets/profile/web.svg"
import YoutubeLogo from "../../assets/profile/youtube.svg"
import TwitterLogo from "../../assets/profile/twitter.svg"

// React Component
import Link from './Link'

const ExternalLinks = ({ children, style }) => {

    const InstragramLink = "instagram.com/tashikmoinshaikh/",
        FacebookLink = "facebook.com/TashikMoinSheikh",
        LinkedInLink = "linkedin.com/in/tashik-moin-sheikh-08872116b/",
        WebsiteLink = "dev-hearted.software",
        YoutubeLink = "youtube.com/channel/UC_bxQjn16KukkyWqTY_MZvg",
        TwitterLink = "twitter.com/TashikMSheikh";

    const Instagram = { Logo: InstagramLogo, Link: InstragramLink };
    const Facebook = { Logo: FacebookLogo, Link: FacebookLink };
    const Website = { Logo: WebsiteLogo, Link: WebsiteLink };
    const Youtube = { Logo: YoutubeLogo, Link: YoutubeLink };
    const Twitter = { Logo: TwitterLogo, Link: TwitterLink };
    const LinkedIn = { Logo: LinkedInLogo, Link: LinkedInLink };

    return (    
        <div className={ExternalLinksStyling.externalLinkLayout}>
            <Link props={Youtube} />
            <Link props={Twitter} />
            <Link props={LinkedIn} />
            <Link props={Instagram} />
            <Link props={Facebook} />
            <Link props={Website} />
        </div>
    );
};

export default ExternalLinks;