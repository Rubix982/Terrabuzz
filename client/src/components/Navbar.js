import React from 'react'
import {Link} from 'react-router-dom'

import '../style/Navbar.css'

const Navbar = (props) => 
{
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
                    <img className="round-img" src='/assets/img/navbar/UserProfilePicture.jpeg' alt="" />
                </Link>
                <h3> {props.first_name} </h3>
            </div>
    
            <div className="navbar-items navbar-control-2">
                <Link to='/Settings'> 
                    <img className="round-img" src='/assets/img/navbar/notificationsIcon.svg'  alt="" />
                </Link>
            </div>
    
            <div className="navbar-items navbar-control-3">
                <Link to='/Notifications'> 
                    <img className="round-img" src='/assets/img/navbar/settings.svg' alt="" />
                </Link>
            </div>
    
        </div>
        )
}
export default Navbar

