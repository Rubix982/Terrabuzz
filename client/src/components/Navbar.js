import React from 'react'
import { Link } from 'react-router-dom'

// For images
import NotificationIcon from '../assets/img/icon/notificationsIcon.svg';
import SettingsIcon from '../assets/img/icon/settings.svg';
import UserProfilePicture from '../assets/img/misc/UserProfilePicture.jpeg';

import '../style/Navbar.css'

/* 
   pass 2 props to navbar component
   1. Title
   2. First Name Of User
*/
const Navbar = ({ title, first_name }) => {
    return (
        <div className="navbar-grid">
            <div className="navbar-items navbar-logo">
                <h1>
                    {title}
                </h1>
            </div>

            <div className="navbar-items navbar-search">
                <input type="text" name="search" placeholder="Search At Terrabuzz"></input>
            </div>

            <div className="navbar-items navbar-control-1">
                <Link to='/Profile'>
                    <img className="round-img" src={UserProfilePicture} alt="User Profile Picture" />
                </Link>
                <h3> {first_name} </h3>
            </div>

            <div className="navbar-items navbar-control-2">
                <Link to='/Settings'>
                    <img className="round-img" src={SettingsIcon} alt="Setting Icon" />
                </Link>
            </div>

            <div className="navbar-items navbar-control-3">
                <Link to='/Notifications'>
                    <img className="round-img" src={NotificationIcon} alt="Notification Icon" />
                </Link>
            </div>

        </div>
    )
}
export default Navbar