import React, { useRef, useState } from 'react';

// Services
import { postEditInformationComponent } from '../../services/externalLinkPost.js';

// Styling
import EditInfoComponentStyling from '../../style/Profile/EditInfoComponent.module.css';
import EditLogo from '../../assets/profile/edit.svg';

const EditInformation = () => {

  const [show, setShow] = useState(false);
  const facebookRef = useRef('');
  const twitterRef = useRef('');
  const websiteRef = useRef('');
  const instagramRef = useRef('');
  const linkedinRef = useRef('');
  const youtubeRef = useRef('');

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  const saveNewChanges = async (event) => {
    event.preventDefault();

    const editInfoComponentForm = {
      facebook: facebookRef.current.value,
      twitter: twitterRef.current.value,
      website: websiteRef.current.value,
      instagram: instagramRef.current.value,
      linkedin: linkedinRef.current.value,
      youtube: youtubeRef.current.value,
    };

    try {
      await postEditInformationComponent(editInfoComponentForm);
      alert('New information successfully saved!')
    } catch (error) {
      alert('Unable to save the information');
    }
  };

  let modalFinalStyling = `${EditInfoComponentStyling.modalCenter}`;
  show ? modalFinalStyling += ` ${EditInfoComponentStyling.showModal}` : modalFinalStyling += ` ${EditInfoComponentStyling.hideModal}`;

  return (
    <div>
      <div className={EditInfoComponentStyling.EditOption}>
        <img src={EditLogo} alt="" />
        <button onClick={handleShow} variant='primary' type="button" className={EditInfoComponentStyling.EditOption}>
          Edit?
      </button>
      </div>
      <div className={`${modalFinalStyling}`}>
        <div className={`${EditInfoComponentStyling.modalMain}`}>
          <div className={EditInfoComponentStyling.ResizingModalFix}>
            <div className={EditInfoComponentStyling.modalTitle}>
              <h1>Link Section</h1>
            </div>
            <form className={EditInfoComponentStyling.modalForm}>
              <ul>
                <li>
                  <label htmlFor="facebook">Facebook</label>
                  <input ref={facebookRef} type="url" name="facebookInput" maxLength="100" />
                  <span>Your Facebook Profile</span>
                </li>
                <li>
                  <label htmlFor="twitter">Twitter</label>
                  <input ref={twitterRef} type="url" name="twitterInput" maxLength="100" />
                  <span>Your Twitter Profile</span>
                </li>
                <li>
                  <label htmlFor="website">Website</label>
                  <input ref={websiteRef} type="url" name="websiteInput" maxLength="100" />
                  <span>Your website address (eg: http://www.google.com)</span>
                </li>
                <li>
                  <label htmlFor="instagram">Instagram</label>
                  <input ref={instagramRef} type="url" name='instagramInput' maxLength='100' />
                  <span>Your Instragram Profile</span>
                </li>
                <li>
                  <label htmlFor="linkedin">LinkedIn</label>
                  <input ref={linkedinRef} type="url" name="linkedInInput" maxLength="100" />
                  <span>Your LinkedIn Profile</span>
                </li>
                <li>
                  <label htmlFor="youtue">Youtube</label>
                  <input ref={youtubeRef} type="url" name="youtubeInput" maxLength="100" />
                  <span>Your Youtube Profile</span>
                </li>
                <li>
                  <div className={EditInfoComponentStyling.modalFooter} >
                    <div className={EditInfoComponentStyling.modalSubmitButtonSize}>
                      <button href='#' className={EditInfoComponentStyling.modalSubmitButton} onClick={saveNewChanges} type="button" value="Send This" >
                        <span>Save Changes</span>
                      </button>
                    </div>
                    <div className={EditInfoComponentStyling.modalExitButtonSize}>
                      <button href='#' className={EditInfoComponentStyling.modalExitButton} onClick={handleClose} type="button" value="Send This" >
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

export default EditInformation;
