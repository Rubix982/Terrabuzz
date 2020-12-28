import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../services/login'
import ComponentStyling from '../../style/Login/MainContent.module.css';
import { loginUserContext } from '../LoginUserContext';

const MainContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { login, firstLogin, verified } = useContext(loginUserContext);

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
            setTimeout(() => {
              login.setter(true);
              firstLogin.setter(firstLoginStatus);
              verified.setter(verificationStatus);
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
