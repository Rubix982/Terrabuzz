import React from "react";

// React componenets
import Content from "./Content";
import ContentHead from "./ContentHead";
import { CenterAlign } from "../FlexAlignment";

// Styling
import MainContentStyling from "../../style/Home/MainContent.module.css";

const MainContent = ({ children, style, props }) => {
  return (
    <div className={MainContentStyling.MainContentContainer}>
      <CenterAlign>
        <ContentHead />
      </CenterAlign>
      <CenterAlign>
        <Content />
      </CenterAlign>
    </div>
  );
};

export default MainContent;
