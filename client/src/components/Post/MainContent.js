import React from "react";
import { CenterAlign } from "../FlexAlignment.js";
import ComponentStyling from "../../style/Post/MainContent.module.css";
import PostContent from "./PostContent.js";
import CommentContent from "./CommentContent.js";

const MainContent = () => {
  return (
    <CenterAlign>
      <main className={ComponentStyling.main}>
        <PostContent />
        <CommentContent />
      </main>
    </CenterAlign>
  );
};

export default MainContent;
