import React from "react";

import Container from "../components/FullViewContainer.js";
import Navbar from "../components/Navbar.js";
import ImageHeader from "../components/Profile/ImageHeader.js";
import MainContent from "../components/Profile/MainContent";

const Profile = ({ children, style }) => {
  return (
    <Container style={{ display: "grid", gridTemplateRows: "10% 30% 60%" }}>
      <Navbar />
      <ImageHeader />
      <MainContent />
    </Container>
  );
};

export default Profile;
