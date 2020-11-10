import React from "react";
import ComponentStyling from "../../style/Search/MainHeader.module.css";
import { useContext } from "react";
import { searchTypeContext } from "./SearchTypeContext.js";

export const MainHeader = () => {
  const [buttonActive, setButtonActive] = useContext(searchTypeContext);
  return (
    <div className={ComponentStyling.header}>
      <div className={ComponentStyling.title}>
        <h1>Results found for #philosphy</h1>
      </div>
      <div className={ComponentStyling.buttons}>
        <div
          className={
            buttonActive == "Interested in"
              ? `${ComponentStyling.leftButton} ${ComponentStyling.active}`
              : ComponentStyling.leftButton
          }
          onClick={(event) => {
            setButtonActive("Interested in");
          }}
        >
          Interested in
        </div>
        <div
          className={
            buttonActive == "Posted on"
              ? `${ComponentStyling.rightButton} ${ComponentStyling.active}`
              : ComponentStyling.rightButton
          }
          onClick={(event) => {
            setButtonActive("Posted on");
          }}
        >
          Posted on
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
