import React from "react";
import ComponentStyling from "../../style/Search/MainContentInterest.module.css";
import MainHeader from "./MainHeader.js";
import InterestContent from "./InterestContent.js";

const MainContentInterest = () => {
  return (
    <div className={ComponentStyling.content}>
      <MainHeader />
      <InterestContent />
    </div>
  );
};

export default MainContentInterest;
