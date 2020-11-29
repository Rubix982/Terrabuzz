import React from "react";
import { CenterAlign } from "../FlexAlignment.js";
import Logo from "../../assets/img/icon/Logo.svg";
import ComponentStyling from "../../style/Error/MainContent.module.css";

const MainContent = () => {
  const textStyling = {
    marginRight: "100px",
    textDecoration: "none",
    color: "#000",
    fontWeight: 800,
  };

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
              Just a project from university students about a social media
              application.
              <br />
              <a style={textStyling} href="/login">
                Login
              </a>
              <a style={textStyling} href="/register">
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
