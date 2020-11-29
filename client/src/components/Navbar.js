import React from "react";
import Settings from "../assets/img/icon/Settings.svg";
import Menu from "../assets/img/icon/HamburgerMenu.svg";
import Notifications from "../assets/img/icon/Notifications.svg";
import SearchUsers from "../assets/img/icon/Search-User.svg";
import HashSearch from "../assets/img/icon/Hash-Search.svg";
import Logo from "../assets/img/icon/Logo.svg";
import { RightAlign, CenterAlign } from "./FlexAlignment.js";
import { Link } from "react-router-dom";

import ComponentStyling from "../style/Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={ComponentStyling.navbarGrid}>
      <div className={ComponentStyling.leftContent}>
        <RightAlign>
          <div className={ComponentStyling.logo}>
            <img src={Logo} alt="" />
          </div>
        </RightAlign>
        <div className={ComponentStyling.title}>
          <Link to="/">
            <h1>Terrabuzz</h1>
          </Link>
        </div>
      </div>
      <CenterAlign>
        <div className={ComponentStyling.search}>
          <div className={ComponentStyling.hashtag}>
            <img src={HashSearch} alt="" />
          </div>
          <CenterAlign>
            <div className={ComponentStyling.searchBox}>
              <input
                type="text"
                name="search"
                placeholder="Search At Terrabuzz"
              ></input>
            </div>
          </CenterAlign>
          <div className={ComponentStyling.users}>
            <img src={SearchUsers} alt="" />
          </div>
        </div>
      </CenterAlign>
      <RightAlign>
        <div className={ComponentStyling.rightContent}>
          <div className={ComponentStyling.profileDetails}>
            <div className={ComponentStyling.profilePicture}>
              <img
                alt="user icon"
                src="/assets/img/profile_pictures/boy(3).svg"
              ></img>
            </div>
            <div className={ComponentStyling.username}>
              <h1>John Doe</h1>
            </div>
          </div>
          <div className={ComponentStyling.controls}>
            <div className={ComponentStyling.controlIcon}>
              <img src={Notifications} alt="" />
            </div>
            <div className={ComponentStyling.controlIcon}>
              <img src={Settings} alt="" />
            </div>
            <div className={ComponentStyling.controlIcon}>
              <img src={Menu} alt="" />
            </div>
          </div>
        </div>
      </RightAlign>
    </div>
  );
};
export default Navbar;
