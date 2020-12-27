import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CenterAlign } from '../FlexAlignment';
import Logo from '../../assets/img/icon/Logo.svg';
import ComponentStyling from '../../style/Error/MainContent.module.css';
import { verifyUser } from '../../services/verify';

const MainContent = () => {
  const { hash } = useParams();
  const [loading, setLoading] = useState(true); 

  useEffect(async () => {
    try {
      const status = await verifyUser(hash);
      setLoading(!status);
    } catch (error) {
      alert(error.message);
    }
  }, [])

  if(loading) {
    return (
      <>
      </>
    )
  }

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
            <p>
              Your account is succesfully verified. Please Login to use Terrabuzz.
              <br />
              <a className={ComponentStyling.textStyling} href="/login">
                Login
              </a>
              <a className={ComponentStyling.textStyling} href="/register">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default MainContent;
