import React from "react";

import Logo from "../assets/img/icon/Logo.svg";
import ComponentStyling from "../style/NavbarLoggedOut.module.css";
import { CenterAlign, RightAlign } from "./FlexAlignment.js";
import { Link } from "react-router-dom";

const NavbarLoggedOut = (props) => {
  return (
    <div className={ComponentStyling.navbar}>
      <div className={ComponentStyling.leftContent}>
        <RightAlign>
          <div className={ComponentStyling.logo}>
            <img className="logo" src={Logo} alt="" />
          </div>
        </RightAlign>
        <div className={ComponentStyling.title}>
          <h1>Terrabuzz</h1>
        </div>
      </div>
      <div className={ComponentStyling.rightContent}>
        <CenterAlign style={{ alignItems: "flex-end" }}>
          <div className={ComponentStyling.loginButton}>
            <Link to="/login">Login</Link>
          </div>
        </CenterAlign>
        <CenterAlign style={{ alignItems: "flex-end" }}>
          <div className={ComponentStyling.registerButton}>
            <Link to="/register">Register</Link>
          </div>
        </CenterAlign>
      </div>
    </div>
  );
};
export default NavbarLoggedOut;
