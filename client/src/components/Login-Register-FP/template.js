import React from "react";
import Container from "../FullViewContainer.js";
import ComponentStyling from "../../style/Login-Register-FP/template.module.css";
import { LeftAlign, RightAlign } from "../FlexAlignment.js";
import Logo from "../../assets/img/icon/Logo.svg";

const Template = ({ children }) => {
  return (
    <Container style={{ display: "grid", gridTemplateColumns: "45% 55%" }}>
      <div className={ComponentStyling.leftContent}>
        <LeftAlign>
          <div className={ComponentStyling.logo}>
            <img className="logo" src={Logo} alt="" />
          </div>
        </LeftAlign>
        <div>{children}</div>
      </div>

      <div className={ComponentStyling.rightContent}>
        <RightAlign>
          <div className={ComponentStyling.links}>
            <a href="/About">About Us</a>
            <a href="/Contact Us">Contact</a>
          </div>
        </RightAlign>
      </div>
    </Container>
  );
};

export default Template;
