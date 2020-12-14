import React, { useState } from 'react';
import API from '../../API/API.js'
import '../../style/Settings-changePassword/Settings-changePassword.css';

const MainContent = () => {
  const [_oldPassword, setoldPassword] = useState('');
  const [_newPassword, setnewPassword] = useState('');
  const [_confirmPassword, setconfirmPassword] = useState('');

  const savePassword = async event => {

    event.preventDefault();
    	
    let formData = 
    {
      oldPassword: _oldPassword,
      newPassword: _newPassword,
      confirmPassword: _confirmPassword
    } ;

    const response = await API.postRequest(`${process.env.REACT_APP_API_URL}/changepassword`, formData ) ;
  }

  return (
  <div className="settings-page-grid">
    <div className="settings-sidebar">
      <input type="button" className="previous-button" value="Previous" />

      <div className="settings-sidebar-controls-grid">
        <div>
          <a href="/settings">
          <input
            type="button"
            className="options-button account-preferences"
            value="Account Preferences"
          />
          </a>
        </div>

        <div>
          <a href="/changepassword" >
          <input
            type="button"
            className="current options-button change-password"
            value="Change Password"
          />
          </a>
        </div>

        <div>
          <input
            type="button"
            className="options-button security"
            value="Security"
          />
        </div>

        <div>
          <input
            type="button"
            className="options-button visibility"
            value="Visibility"
          />
        </div>

        <div>
          <input
            type="button"
            className="options-button communication"
            value="Communication"
          />
        </div>

        <div>
          <input
            type="button"
            className="options-button data-privacy"
            value="Data Privacy"
          />
        </div>

      </div>
    </div>


    <div className="settings-fields">

      <div className="settings-fields-input">

        <div className="input-fields">
          <div className="align-input-field-1">
            <h3> Old Password </h3>
          </div>

          <div className="align-input-field-2">
            <input className="text-box" type="password" value={_oldPassword} onChange={event => setoldPassword(event.target.value)} />
          </div>
        </div>

        <div className="input-fields">
          <div className="align-input-field-1">
            <h3> New Password </h3>
          </div>

          <div className="align-input-field-2">
            <input className="text-box" type="password" value={_newPassword} onChange={event => setnewPassword(event.target.value)}/>
          </div>
        </div>

        <div className="input-fields">
          <div className="align-input-field-1">
            <h3> Confirm New Password </h3>
          </div>

          <div className="align-input-field-2">
            <input className="text-box" type="password" value={_confirmPassword} onChange={event => setconfirmPassword(event.target.value)} />
          </div>
        </div>

        <div className="input-fields">
          <input
            className="update-button"
            type="button"
            value="Save Changes"
            onClick={savePassword}
          />
        </div>

      </div>
    </div>
  </div>
);
}

export default MainContent;
