import React from "react";
import ComponentStyling from "../../style/Search/MainContent.module.css";
import MainHeader from "./MainHeader.js";
import Content from "./Content.js";

const MainContent = () => {
  return (
    <div className={ComponentStyling.content}>
      <MainHeader />
      <Content />
    </div>
  );
};

export default MainContent;
