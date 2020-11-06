import React from "react";
import Container from "../components/FullViewContainer.js";
import MainContent from "../components/Post/MainContent.js";

const Post = ({ children, style }) => {
  return (
    <Container
      style={{
        backgroundColor: "#18191a",
        display: "grid",
        gridTemplateRows: "10% 90%",
      }}
    >
      <div></div>
      <MainContent />
    </Container>
  );
};

export default Post;
