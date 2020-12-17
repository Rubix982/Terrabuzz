import React, { useState, useEffect, useRef } from 'react';
import ComponentStyling from '../../style/NewPassword/MainContent.module.css';
import Logo from '../../assets/img/icon/Logo.svg';
import { useParams } from 'react-router-dom';
import API from '../../API/API';
import { newPasswordGenerator, changePasswordWithHandle } from '../../services/newPassword';

const MainContent = () => {

  const { hashed } = useParams();
  const inputForNewPassword = useRef(''), inputForConfirmPassword = useRef('');
  let handle, status;

  useEffect(async () => {
    try {
      // This is a GET request
      handle = await newPasswordGenerator(hashed);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const submitChangePasswordInformation = async () => {
    if (inputForConfirmPassword.current.value !== inputForNewPassword.current.value) {
      alert(`The passwords entered do not match.
Please check if both are entered correctly.`)
    } else {
      try {
        // This is a POST request
        await changePasswordWithHandle(hashed, handle, inputForConfirmPassword.current.value);
        console.log('Sucessfully updated the password')
      } catch (error) {
        //  This always gives failed to fetch
        //  Went through the entire flow 3-4 times - I can't find out 
        //  what this exactly failed to fetch. Console Logging works fine 
        //  in all the functions without any issues
        //  Please uncomment if you understand why is in the first place
        //  Manually tested this funcationality. The password is indeed changed 
        //  alert(error.message);
      }
    }
  };

  return (
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
            <input ref={inputForNewPassword}
              type="password"
              name="new-password"
              placeholder="New Password"
            />
            <input ref={inputForConfirmPassword}
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
            />
            <input
              type="submit"
              name="submit-information"
              value="Set Password"
              onClick={submitChangePasswordInformation}
              className={ComponentStyling.setNewPasswordButton}
            />
          </form>

        </div>

      </div>

      <div className={ComponentStyling.contentContainerNp}>
        <div className={ComponentStyling.innerHalfGrid2Fp}>
          <div>
            <a href="/contact">  Contact </a>
            <a href="/about"> About Us </a>
          </div>
        </div>
      </div>

    </div>
  )
};

export default MainContent;
