import React from 'react';
import '../../style/Settings-changePassword/Settings-changePassword.css';

const MainContent = () => {
  return (
  <div className="settings-page-grid">
    <div className="settings-sidebar">
      <input type="button" className="previous-button" value="Previous" />
      <div className="settings-sidebar-controls-grid">
        <div>
          <input
            type="button"
            className="current options-button account-preferences"
            value="Account Preferences"
          />
        </div>

        <div>
          <a href="/settings/changepassword" >
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
      <div className="settings-fields-input">
        <div className="input-fields">

        <div className="input-fields">
          <div className="align-input-field-1">
            <h3> Old Password </h3>
          </div>

          <div className="align-input-field-2">
            <input className="text-box" type="password" />
          </div>
        </div>

        <div className="input-fields">
          <div className="align-input-field-1">
            <h3> New Password </h3>
          </div>

          <div className="align-input-field-2">
            <input className="text-box" type="password" />
          </div>
        </div>

        <div className="input-fields">
          <div className="align-input-field-1">
            <h3> Confirm Password </h3>
          </div>

          <div className="align-input-field-2">
            <input className="text-box" type="password" />
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