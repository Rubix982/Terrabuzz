import React from 'react';
import ComponentStyling from '../../style/NewPassword/MainContent.module.css';
import Logo from '../../assets/img/icon/Logo.svg';

const MainContent = () => (

  <div className={ComponentStyling.pageGridFp}>

    <div className={`${ComponentStyling.formContainerFp} ${ComponentStyling.innerHalfGrid1Fp}`}>

      <div>
        <img className={ComponentStyling.logoFp} src={Logo} alt="" />
      </div>

      <div>
        <h1 className={ComponentStyling.heading1Fp}>
          New Password
        </h1>

        <h2 className={ComponentStyling.heading2Fp}>
          Type in your new password, repeat to confirm it.
        </h2>

        <form className={ComponentStyling.formFp}>
          <input type="password" name="new-password" placeholder="New Password" />
          <input type="password" name="confirm-password" placeholder="Confirm Password" />
          <input className={ComponentStyling.setNewPasswordButton} type="button" value="Set Password" />
        </form>

      </div>

    </div>

    <div className={ComponentStyling.contentContainerNp}>
      <div className={ComponentStyling.innerHalfGrid2Fp}>
        <div>
          <a href="/Contact Us">  Contact </a>
          <a href="/About"> About Us </a>
        </div>
      </div>
    </div>

  </div>
);

export default MainContent;
