import React from 'react';
import { CenterAlign } from '../FlexAlignment';
import Logo from '../../assets/img/icon/Logo.svg';
import ComponentStyling from '../../style/Error/MainContent.module.css';

const MainContent = () => {
  const textStyling = {
    marginRight: '100px',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 800,
  };

  return (
    <div className={ComponentStyling.container}>
      <div className={ComponentStyling.content}>
        <CenterAlign>
          <div className={ComponentStyling.logo}>
            <img src={Logo} alt="" />
          </div>
        </CenterAlign>
        <div className={ComponentStyling.title}>
          <div className={ComponentStyling.heading}>
            <h1>
              <a href="/">Terrabuzz</a>
            </h1>
          </div>
          <div className={ComponentStyling.description}>
            <div>
              <ul>
                <li>
                  Tashik Moin Sheikh (
                  {' '}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tashikmoinsheikh@gmail.com">
                    tashikmoinsheikh@gmail.com
                  </a>
                  {' '}
                  )
                </li>
                <li>
                  Muhammad Ahmed (
                  {' '}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hassanzhd2000@gmail.com">
                    MuhammadAhmed3210@gmail.com
                  </a>
                  {' '}
                  )
                </li>
                <li>
                  Sajjad (
                  {' '}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=saifulislam84210@gmail.com">
                    sajjubaba@gmail.com
                  </a>
                  {' '}
                  )
                </li>
              </ul>
              <br />
              <a style={textStyling} href="/login">
                Login
              </a>
              <a style={textStyling} href="/register">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default MainContent;
