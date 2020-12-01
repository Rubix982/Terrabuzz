import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../FullViewContainer';
import ComponentStyling from '../../style/Login-Register-FP/template.module.css';
import { LeftAlign, RightAlign } from '../FlexAlignment';
import Logo from '../../assets/img/icon/Logo.svg';

<<<<<<< HEAD
const Template = ({ children }) => (
  <Container style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
    <div className={ComponentStyling.leftContent}>
      <LeftAlign>
        <Link to="/">
          <div className={ComponentStyling.logo}>
            <img className="logo" src={Logo} alt="" />
          </div>
        </Link>
      </LeftAlign>
      <div>{children}</div>
    </div>

    <div className={ComponentStyling.rightContent}>
      <RightAlign>
        <div className={ComponentStyling.links}>
          <a href="/aboutUs">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </RightAlign>
    </div>
  </Container>
);
=======
const Template = ({ children, bgUrl, style }) => {

  let backgroundImageStyling = {
    backgroundRepeat: `no-repeat`,
    MozBackgroundSize: 'cover',
    WebkitBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    width: 'cover',
    height: 'cover'
  }

  if (bgUrl)
    backgroundImageStyling.backgroundImage = `url(${bgUrl})`;

  let LeftAlignStyle = {}
  if (style)
    LeftAlignStyle = style.LeftAlignStyle;

  return (
    <Container style={{ display: "grid", gridTemplateColumns: "50% 50%",overflow: "hidden" }}>
      <div className={ComponentStyling.leftContent}>
        <LeftAlign>
          <Link to="/">
            <div className={ComponentStyling.logo}>
              <img className="logo" src={Logo} alt="" />
            </div>
          </Link>
        </LeftAlign>
        <div>{children}</div>
      </div>

      <div className={ComponentStyling.rightContent} style={backgroundImageStyling}>
        <RightAlign>
          <div className={ComponentStyling.links}>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </RightAlign>
      </div>
    </Container >
  );
};
>>>>>>> Rebasing with main branch

export default Template;
