import React from "react";
import { CenterAlign } from "../FlexAlignment.js";
import Logo from "../../assets/img/icon/Logo.svg";
import ComponentStyling from "../../style/Error/MainContent.module.css";

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
            <h1>Terrabuzz</h1>
          </div>
          <div className={ComponentStyling.description}>
            <p>
              <ul>
                <li>Tashik Moin Sheikh ( tashikmoinsheikh@gmail.com )</li>
                <li>Hassan Zahid ( hassanzhd2000@gmail.com )</li>
                <li>Saif Ul Islam ( saifulislam84210@gmail.com )</li>
              </ul>
              <br />
              <a style={{marginRight: '100px'}} href='/login'>Login</a>
              <a href='/register'>Register</a>
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default MainContent;
