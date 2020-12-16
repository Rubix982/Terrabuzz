import React, { useRef } from 'react';
import ComponentStyling from '../../style/ForgetPassword/MainContent.module.css';
import Logo from '../../assets/img/icon/Logo.svg';
import { sendForgetPasswordService } from '../../services/forget';

const MainContent = () => {

    const __email = useRef('');

    const sendForgetPasswordRequest = async (event) => {
        event.preventDefault();
 
        try {
            await sendForgetPasswordService(__email.current.value)
            alert('Reset email sent successfully!');
        } catch (error) {
            alert(`Unable to send an email. Error ocurred, ${error.message}`)
        }
    }

    return (
        <div className={ComponentStyling.pageGridFp}>
            <div className={`${ComponentStyling.formContainerFp} ${ComponentStyling.innerHalfGrid1Fp} `}>
                <div>
                    <img className={ComponentStyling.logoFp}
                        src={Logo} alt="" />
                </div>
                <div>
                    <h1 className={ComponentStyling.heading1Fp}> Forgot Password </h1>
                    <h2 className={ComponentStyling.heading2Fp}> Let us help you out.</h2>

                    <p className={ComponentStyling.MessageFP}>
                        Type your email address in the field below to receive your
                        {' '}
                        <br />
                        {' '}
                    &lsquo;change password&lsquo; code by email.
                    </p>
                    <form className={ComponentStyling.formFp}>
                        <input
                            type="text"
                            ref={__email}
                            placeholder="johndoe@gmail.com" />
                        <input
                            onClick={sendForgetPasswordRequest}
                            className={ComponentStyling.resetPasswordButton}
                            type="submit"
                            value='Reset Password' />
                    </form>
                </div>
            </div>

            <div className={ComponentStyling.contentContainerFp}>
                <div className={ComponentStyling.innerHalfGrid2Fp}>
                    <div>
                        <a href="/contact">Contact</a>
                        <a href="/about">About Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
