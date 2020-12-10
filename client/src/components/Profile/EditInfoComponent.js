import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Styling
import EditInfoComponentStyling from '../../style/Profile/EditInfoComponent.module.css';
import EditLogo from '../../assets/profile/edit.svg';

const EditInformation = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
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
          <div className={EditInfoComponentStyling.modalTitle}>
            <h1>Link Section</h1>
          </div>
          <form className={EditInfoComponentStyling.modalForm}>
            <ul>
              <li>
                <label htmlFor="facebook">Facebook</label>
                <input type="url" name="facebookInput" maxLength="100" />
                <span>Your Facebook Profile</span>
              </li>
              <li>
                <label htmlFor="twitter">Twitter</label>
                <input type="url" name="twitterInput" maxLength="100" />
                <span>Your Twitter Profile</span>
              </li>
              <li>
                <label htmlFor="website">Website</label>
                <input type="url" name="websiteInput" maxLength="100" />
                <span>Your website address (eg: http://www.google.com)</span>
              </li>
              <li>
                <label htmlFor="instagram">Instagram</label>
                <input type="url" name='instagramInput' maxLength='100' />
                <span>Your Instragram Profile</span>
              </li>
              <li>
                <label htmlFor="linkedin">LinkedIn</label>
                <input type="url" name="linkedInInput" maxLength="100" />
                <span>Your LinkedIn Profile</span>
              </li>
              <li>
                <label htmlFor="youtue">Youtube</label>
                <input type="url" name="youtubeInput" maxLength="100" />
                <span>Your Youtube Profile</span>
              </li>
              <li>
                <div className={EditInfoComponentStyling.modalFooter} >
                  <div>
                    <button href='#' className={EditInfoComponentStyling.modalSubmitButton} onClick={handleClose} type="button" value="Send This" >
                      <span>Save Changes</span>
                    </button>
                  </div>
                  <div>
                    <button href='#' className={EditInfoComponentStyling.modalSubmitButton} onClick={handleClose} type="button" value="Send This" >
                      <span>Leave Without Saving</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditInformation;
