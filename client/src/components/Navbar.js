import React from 'react'
import { Link } from 'react-router-dom'
import Settings from '../assets/img/icon/Settings.svg'
import Menu from '../assets/img/icon/HamburgerMenu.svg'
import Notifications from '../assets/img/icon/Notifications.svg'
import ProfilePicture from '../assets/profile/Profile_Picture.jpg'

import '../style/Navbar.css'

const Navbar = (props) => {
    return (
        <div className="navbar-grid">
            <div className="navbar-items navbar-logo">
                <h1>
                    {props.title}
                </h1>
            </div>

            <div className="navbar-items navbar-search">
                <input type="text" name="search" placeholder="Search At Terrabuzz"></input>
            </div>

            <div className="navbar-items navbar-control-1">
                <Link to='/Profile'>
                    <img className="profile-img" src={ProfilePicture} alt="" />
                </Link>
                <h3> {props.first_name} </h3>
            </div>

            <div className="navbar-items navbar-other-controls">
                <Link to='/Notifications'>
                    <img className="controls-img" src={Notifications} alt="" />
                </Link>
            </div>

            <div className="navbar-items navbar-other-controls">
                <Link to='/Settings'>
                    <img className="controls-img" src={Settings} alt="" />
                </Link>
            </div>

            <div className="navbar-items navbar-other-controls">
                <Link to='/Menu'>
                    <img className="controls-img" src={Menu} alt="" />
                </Link>
            </div>

        </div>
    )
}
export default Navbar

