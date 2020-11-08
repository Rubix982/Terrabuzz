import React from "react";

import Navbar from '../components/Navbar';

const Home = ({ children, style }) => {
  return (
    <div>
      <Navbar first_name="Tashik" title={"Terrabuzz"} />
      <h1>TERRABUZZ!</h1>
    </div>);
};

export default Home;
