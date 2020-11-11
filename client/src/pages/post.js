import React from "react";
import Container from "../components/FullViewContainer.js";
import MainContent from "../components/Post/MainContent.js";

import Navbar from "../components/Navbar";

const Post = ({ children, style }) => {
  return (
    <Container
      style={{
        backgroundColor: "#18191a",
        display: "grid",
        gridTemplateRows: "10% 90%",
      }}
    >
      <Navbar first_name="Tashik" title={"Terrabuzz"} />
      <MainContent />
    </Container>
  );
};

export default Post;
