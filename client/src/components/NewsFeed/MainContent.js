import React from "react";
import ComponentStyling from "../../style/NewsFeed/MainContent.module.css";
import Content from "../NewsFeed/Content.js";

// the two divs are for left and right side bars which can be reusable/ static components

const MainContent = () => {
  return (
    <main className={ComponentStyling.main}>
      <div></div>
      <Content />
      <div></div>
    </main>
  );
};

export default MainContent;
