import React from "react";
import { CenterAlign } from "../FlexAlignment.js";
import Logo from "../../assets/img/icon/Logo.svg";
import ComponentStyling from "../../style/Error/MainContent.module.css";
import { Link } from "react-router-dom";

const MainContent = () => {
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
              <Link to="/">Terrabuzz</Link>
            </h1>
          </div>
          <div className={ComponentStyling.description}>
            <p>
              The requested page could not be found. Sorry for the
              inconvenience.
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default MainContent;
