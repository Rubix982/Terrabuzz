import React from "react";
import Container from "../FullViewContainer.js";
import ComponentStyling from "../../style/Login-Register-FP/template.module.css";
import { LeftAlign, RightAlign } from "../FlexAlignment.js";
import Logo from "../../assets/img/icon/Logo.svg";
import { Link } from "react-router-dom";

const Template = ({ children }) => {
  return (
    <Container style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
      <div className={ComponentStyling.leftContent}>
        <LeftAlign>
          <Link to="/">
            <div className={ComponentStyling.logo}>
              <img className="logo" src={Logo} alt="" />
            </div>
          </Link>
        </LeftAlign>
        <div>{children}</div>
      </div>

      <div className={ComponentStyling.rightContent}>
        <RightAlign>
          <div className={ComponentStyling.links}>
            <a href="/aboutUs">About Us</a>
            <a href="/contact">Contact</a>
          </div>
        </RightAlign>
      </div>
    </Container>
  );
};

export default Template;
