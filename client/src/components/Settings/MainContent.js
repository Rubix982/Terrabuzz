import React, { useState, useEffect } from 'react';
import API from '../../API/API.js'
import '../../style/Settings/Settings.css';
import { getSettings } from '../../services/settings';

const MainContent = () => {
  const [_Email, setEmail] = useState('');
  const [_Username, setUsername] = useState('');
  const [_Handler, setHandler] = useState('');
  const [_Password, setPassword] = useState('');
  const [_CPassword, setCPassword] = useState('');

  useEffect(async () => {
    let response;
    try {
      response = getSettings(req.Handler);
    } catch (error) {
      throw new Error(error.message);
    }
    let data = response[0][0];
    setEmail(data.Email);
    setUsername(data.Username);
    setHandler(data.Handler);
  });
  // The above needs to have dynamic user handle called from somewhere to be provided to be provided as argument
  // to the getRequest URL

  const saveChanges = async event => {

    event.preventDefault();

    if (!_Email || !_Username || !_Handler || !_Password || !_CPassword) {
      alert('Fields cannot be empty!')
    } else {

      let formData =
      {
        Email: _Email,
        Username: _Username,
        Handler: _Handler,
        Password: _Password,
        CPassword: _CPassword
      };

      try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/settings`, formData);
      } catch (error) {
        throw new Error(error.message);
      }
    }
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
                className="current options-button account-preferences"
                value="Account Preferences"
              />
            </a>
          </div>

          <div>
            <a href="/changepassword" >
              <input
                type="button"
                className="options-button change-password"
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

        <div className="settings-fields-input-pref">

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Email Address </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="text" value={_Email} onChange={event => setEmail(event.target.value)} />
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Username </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="text" value={_Username} onChange={event => setUsername(event.target.value)} />
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> User Handler </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="text" value={_Handler} onChange={event => setHandler(event.target.value)} />
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Password </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="password" value={_Password} onChange={event => setPassword(event.target.value)} />
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Confirm Password </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="password" value={_CPassword} onChange={event => setCPassword(event.target.value)} />
            </div>
          </div>

          <div className="input-fields">
            <input
              className="update-button"
              type="button"
              value="Save Changes"
              onClick={saveChanges}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;