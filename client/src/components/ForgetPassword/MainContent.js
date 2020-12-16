import React from 'react';
import ComponentStyling from '../../style/ForgetPassword/MainContent.module.css';
import Logo from '../../assets/img/icon/Logo.svg';

const MainContent = () => {

    return (
        <div className={ComponentStyling.pageGridFp}>
            <div className={`${ComponentStyling.formContainerFp} ${ComponentStyling.innerHalfGrid1Fp} `}>
                <div>
                    <img className={ComponentStyling.logoFp}
                        src={Logo} alt="" />
                </div>
                <div>
                    <h1 className={ComponentStyling.heading1Fp}>
                        Forgot Password
                </h1>

                    <h2 className={ComponentStyling.heading2Fp}>
                        Let us help you out.
                </h2>

                    <p className={ComponentStyling.MessageFP}>
                        Type your email address in the field below to receive your
                    {' '}
                        <br />
                        {' '}
                    &lsquo;change password&lsquo; code by email.
                </p>

                    <form className={ComponentStyling.formFp}>
                        <input type="text" name="email" placeholder="johndoe@gmail.com" />
                        <input className={ComponentStyling.resetPasswordButton} type="button" value="Reset Password" />
                    </form>
                </div>

            </div>

            <div className={ComponentStyling.contentContainerFp}>
                <div className={ComponentStyling.innerHalfGrid2Fp}>
                    <div>
                        <a href="/Contact Us">Contact </a>
                        <a href="/About">About Us </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
