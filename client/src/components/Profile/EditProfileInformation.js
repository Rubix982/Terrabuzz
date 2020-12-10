import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Styling
import EditProfileInformationStyling from '../../style/Profile/EditProfileInformation.module.css';
import EditLogo from '../../assets/profile/edit.svg';

const EditProfileInformation = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    let modalFinalStyling = `${EditProfileInformationStyling.modalCenter}`;
    show ? modalFinalStyling += ` ${EditProfileInformationStyling.showModal}` : modalFinalStyling += ` ${EditProfileInformationStyling.hideModal}`;

    return (
        <div>
            <div className={EditProfileInformationStyling.EditOption}>
                {/* <img src={EditLogo} alt="" /> */}
                <button onClick={handleShow} variant='primary' type="button" className={EditProfileInformationStyling.EditOption}>
                    ( Edit? )
                </button>
            </div>
            <div className={`${modalFinalStyling}`}>
                <div className={`${EditProfileInformationStyling.modalMain}`}>
                    <div className={EditProfileInformationStyling.modalTitle}>
                        <h1>Edit Profile Section</h1>
                    </div>
                    <form className={EditProfileInformationStyling.modalForm}>
                        <ul>
                            <li>
                                <label htmlFor="username">Username</label>
                                <input type="url" name="usernameInput" maxLength="100" />
                                <span>Your Username</span>
                            </li>
                            <li>
                                <label htmlFor="userhandle">Userhandle</label>
                                <input type="url" name="userhandleInput" maxLength="100" />
                                <span>Your Userhandle</span>
                            </li>
                            <li>
                                <label htmlFor="location">Location</label>
                                <input type="url" name="locationInput" maxLength="100" />
                                <span>Your Location</span>
                            </li>
                            <li>
                                <label htmlFor="biography">Biography</label>
                                <textarea type="url" name="BiographyInput" maxLength="200" />
                                <span>Your Biography</span>
                            </li>
                            <li>
                                <label htmlFor="Activity">Activity</label>
                                <textarea type="url" name="ActivityInput" maxLength="100" />
                                <span>Your Activity</span>
                            </li>
                            <li>
                                <label htmlFor="Interest">Interest</label>
                                <textarea type="url" name="InterestInput" maxLength="100" />
                                <span>Your Interest</span>
                            </li>
                            <li>
                                <div className={EditProfileInformationStyling.modalFooter} >
                                    <button className={EditProfileInformationStyling.modalSubmitButton} onClick={handleClose} type="submit" value="Send This" >
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfileInformation;
