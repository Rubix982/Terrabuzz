import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../FullViewContainer';
import ComponentStyling from '../../style/Login-Register-FP/template.module.css';
import { LeftAlign, RightAlign } from '../FlexAlignment';
import Logo from '../../assets/img/icon/Logo.svg';

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

export default Template;
