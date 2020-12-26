import React, { useReducer, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

// Styling
import EditProfileInformationStyling from '../../style/Profile/EditProfileInformation.module.css';
import EditLogo from '../../assets/profile/edit.svg';

// Services
import { postEditProfileComponent } from '../../services/editProfileInformation.js';

const EditProfileInformation = () => {

    const [show, setShow] = useState(false);
    const locationRef = useRef('');
    const biographyRef = useRef('');
    const activitiesRef = useRef('');
    const interestsRef = useRef('');

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    const saveNewProfileChanges = async (event) => {
        event.preventDefault();

        const editProfileInfoComponentForm = {
            location: locationRef.current.value,
            biography: biographyRef.current.value,
            activities: activitiesRef.current.value,
            interest: interestsRef.current.value,
        };

        try {
            await postEditProfileComponent(editProfileInfoComponentForm);
            alert('New information successfully saved!')
        } catch (error) {
            alert('Unable to save the information');
        }
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
                    <div className={EditProfileInformationStyling.ResizingModalFix}>
                        <div className={EditProfileInformationStyling.modalTitle}>
                            <h1>Edit Profile Section</h1>
                        </div>
                        <form className={EditProfileInformationStyling.modalForm}>
                            <ul>
                                <li>
                                    <label htmlFor="location">Location</label>
                                    <input ref={locationRef} type="url" name="locationInput" maxLength="100" />
                                    <span>Your Location</span>
                                </li>
                                <li>
                                    <label htmlFor="biography">Biography</label>
                                    <textarea ref={biographyRef} type="url" name="BiographyInput" maxLength="200" />
                                    <span>Your Biography</span>
                                </li>
                                <li>
                                    <label htmlFor="Activity">Activity</label>
                                    <textarea ref={activitiesRef} type="url" name="ActivityInput" maxLength="100" />
                                    <span>Your Activity</span>
                                </li>
                                <li>
                                    <label htmlFor="Interest">Interest</label>
                                    <textarea ref={interestsRef} type="url" name="InterestInput" maxLength="100" />
                                    <span>Your Interest</span>
                                </li>
                                <li>
                                    <div className={EditProfileInformationStyling.modalFooter} >
                                        <div className={EditProfileInformationStyling.modalSubmitButtonSize}>
                                            <button onClick={saveNewProfileChanges} href='#' className={EditProfileInformationStyling.modalSubmitButton} type="button" value="Send This" >
                                                <span>Save Changes</span>
                                            </button>
                                        </div>
                                        <div className={EditProfileInformationStyling.modalExitButtonSize}>
                                            <button href='#' className={EditProfileInformationStyling.modalExitButton} onClick={handleClose} type="button" value="Send This" >
                                                <span>Exit</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileInformation;
