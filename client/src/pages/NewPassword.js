import React from 'react';
import '../style/Forget-Password/ForgetPassword.css';
import Logo from '../assets/img/icon/Logo.svg';

const NewPassword = () => (

  <div className="page-grid-fp">

    <div className="form-container-fp inner-half-grid-1-fp">

      <div>
        <img className="logo-fp" src={Logo} alt="" />
      </div>

      <div>
        <h1 className="heading-1-fp">
          New Password
        </h1>

        <h2 className="heading-2-fp">
          Type in your new password, repeat to confirm it.
        </h2>

        <form className="form-fp">
          <input type="password" name="new-password" placeholder="New Password" />
          <input type="password" name="confirm-password" placeholder="Confirm Password" />
          <input className="set-new-password-button" type="button" value="Set Password" />
        </form>

      </div>

    </div>

    <div className="content-container-np">
      <div className="inner-half-grid-2-fp">
        <div>
          <a href="/Contact Us">  Contact </a>
          <a href="/About"> About Us </a>
        </div>
      </div>
    </div>

  </div>
);

export default NewPassword;
