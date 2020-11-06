import React from 'react'
import '../style/Login.css'
import Logo from '../assets/img/icon/Logo.svg'
const Login = (props) => {

return (
<div className="page-grid">

    <div className="form-container inner-half-grid-1">

        <div>
            <img className="logo" src={Logo} alt="" />
        </div>

        <div>
            <h1 className="heading-1">
                We are Terrabuzz
            </h1>

            <h2 className="heading-2">
                Please Login To Continue.
            </h2>

            <form className="form">
                <input type="text" name="email" placeholder="Email Address"></input> 
                <input type="password" name="password" placeholder="Password"></input>
                <input type="checkbox" id="remember-me" name="remember-me" value="remember-me"/>
                <label className="remember-me"> Remember Me </label>
                <a href="/forget"  className="forget"> Forgot Password?</a>
                <br/>
                <input className="login" type="button" value="Login" />
                <input className="register" type="button" value="Register" />
            </form>

        </div>

    </div>

    <div className="content-container">
        <div className="inner-half-grid-2">
            <div>
                <a href="/Contact Us"  className="information-list">  Contact </a>
                <a href="/About"  className="information-list"> About Us </a>
            </div>
        </div>
    </div>

</div>
)
}

export default Login
