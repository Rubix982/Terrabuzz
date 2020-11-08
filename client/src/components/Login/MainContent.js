import React from "react";
import ComponentStyling from "../../style/Login/MainContent.module.css";

const MainContent = ({ children }) => {
  return (
    <div className={ComponentStyling.content}>
      <h1>We are Terrabuzz</h1>

      <h2>Please Login To Continue.</h2>

      <form className={ComponentStyling.formlogin}>
        <input type="text" name="email" placeholder="Email Address"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input
          type="checkbox"
          id="remember-me"
          name="remember-me"
          value="remember-me"
        />
        <label className={ComponentStyling.rememberMe}> Remember Me </label>
        <a href="/forget" className={ComponentStyling.forget}>
          Forgot Password?
        </a>
        <br />
        <input className={ComponentStyling.login} type="button" value="Login" />
        <input
          className={ComponentStyling.register}
          type="button"
          value="Register"
        />
      </form>
    </div>
  );
};

export default MainContent;
