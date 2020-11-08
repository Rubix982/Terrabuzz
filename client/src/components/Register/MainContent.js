import React from "react";
import ComponentStyling from "../../style/Register/register.module.css";

const MainContent = () => {
  return (
    <div className={ComponentStyling.content}>
      <div className={ComponentStyling.headings}>
        <h1>Registration</h1>
        <h2>Fill out the the form below to get started.</h2>
      </div>
      <div>
        <form className={ComponentStyling.registerForm}>
          <input type="text" name="email" placeholder="Email Address"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
          ></input>
          <input
            type="text"
            name="username"
            placeholder="username e.g John Doe"
          ></input>
          <input
            type="text"
            name="user-handler"
            placeholder="userhandle e.g @johndoe"
          ></input>
          <a href="/forget-password"> Already have an account?</a>
          <br />
          <input type="checkbox" name="remember-me" value="remember-me" />
          <label style={{ fontSize: "16px" }}>
            {" "}
            By signing up, you agree to Terrabuzz's
            <br />
            <label style={{ fontSize: "16px" }}>
              Terms, Conditions And Private Policies
            </label>
          </label>
          <br />
          <input
            className={ComponentStyling.registerButton}
            type="button"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default MainContent;
