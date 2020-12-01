import React from 'react';
import '../style/Forget-Password/ForgetPassword.css';
import Logo from '../assets/img/icon/Logo.svg';

const ForgetPassword = () => (

  <div className="page-grid-fp">
    <div className="form-container-fp inner-half-grid-1-fp">
      <div>
        <img className="logo-fp" src={Logo} alt="" />
      </div>
      <div>
        <h1 className="heading-1-fp">
          Forgot Password
        </h1>

        <h2 className="heading-2-fp">
          Let us help you out.
        </h2>
        <p className="MessageFP">
          Type your email address in the field below to receive your
          {' '}
          <br />
          {' '}
          &lsquo;change password&lsquo; code by email.
        </p>
        <form className="form-fp">
          <input type="text" name="email" placeholder="johndoe@gmail.com" />
          <input className="reset-password-button" type="button" value="Reset Password" />
        </form>
      </div>

    </div>

    <div className="content-container-fp">
      <div className="inner-half-grid-2-fp">
        <div>
          <a href="/Contact Us">Contact </a>
          <a href="/About">About Us </a>
        </div>
      </div>
    </div>
  </div>
);

export default ForgetPassword;
