import React, { useState , useEffect } from 'react';
import '../../style/Settings/Settings.css';

const MainContent = () => {
  const [email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Handler, setHandler] = useState('');

  useEffect( async () => {
    const response = await fetch('http://localhost:8080/api/settings') ;
    const data = await response.json() ;
    setEmail(data.email) ;
    setUsername(data.Username) ;
    setHandler(data.Handler) ;
  });

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
              <input className="search-box" type="text"  />
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Username </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="text"  />
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> User handler </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="text" />
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Password </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="password" />
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Confirm Password </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="password" />
            </div>
          </div>

          <div className="input-fields">
            <input
              className="update-button"
              type="button"
              value="Save Changes"
            />
          </div>
      </div>
    </div>
  </div>
);
}

export default MainContent;