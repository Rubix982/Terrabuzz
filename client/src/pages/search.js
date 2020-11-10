import React from "react";
import Container from "../components/FullViewContainer.js";
import Navbar from "../components/Navbar";
import MainContent from "../components/Search/MainContent.js";

const Search = ({ children, style }) => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateRows: "10% 90%",
        backgroundColor: "#18191a",
      }}
    >
      <Navbar first_name="Tashik" title={"Terrabuzz"} />
      <MainContent></MainContent>
    </Container>
  );
};

export default Search;
