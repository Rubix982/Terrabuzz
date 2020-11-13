import React from "react";
import Container from "../components/FullViewContainer.js";
import Navbar from "../components/Navbar";
import MainContentInterest from "../components/Search/MainContentInterest.js";

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

      <MainContentInterest></MainContentInterest>
      {/* <MainContentProfile></MainContentProfile> */}
    </Container>
  );
};

export default Search;
