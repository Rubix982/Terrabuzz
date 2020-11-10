import React from 'react'

import '../style/NavbarLoggedOut.css'

const NavbarLoggedOut = (props) => {
    return (
        <div className="navbar-grid">
            <div className="navbar-items navbar-logo">
                <h1>
                    {props.title}
                </h1>
            </div>

            <div></div>

            <div className='LoginButton'>
                Log In
            </div>

            <div className='RegisterButton'>
                Register
            </div>
        </div>
    )
}
export default NavbarLoggedOut;

