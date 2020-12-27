import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../services/login'
import ComponentStyling from '../../style/Login/MainContent.module.css';

const MainContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  return (
    <div className={ComponentStyling.content}>
      <h1>We are Terrabuzz</h1>

      <h2>Please login to continue</h2>

      <form className={ComponentStyling.formlogin}>
        <input onChange={(event) => {
          setEmail(event.target.value);
        }} value={email} type="text" name="email" placeholder="Email Address" />
        <input onChange={(event) => {
          setPassword(event.target.value);
        }} value={password} type="password" name="password" placeholder="Password" />
        <input
          type="checkbox"
          id="remember-me"
          name="remember-me"
          value="remember-me"
        />
        <label className={ComponentStyling.rememberMe}> Remember Me </label>
        <a href="/forgetPassword" className={ComponentStyling.forget}>
          Forgot Password?
        </a>
        <br />
        <input onClick={async () => {
          try {
            const { verificationStatus, firstLoginStatus } = await loginUser(email, password);
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('firstLogin', firstLoginStatus);
            setTimeout(() => {
              history.push('/feed');
            }, 3000);
          } catch (error) {
            alert(error.message);
          }
        }} className={ComponentStyling.login} type="button" value="Login" />
        <Link to='/register'>
          <input
            className={ComponentStyling.register}
            type="button"
            value="Register"
          />
        </Link>
      </form>
    </div>
  );
};

export default MainContent;
