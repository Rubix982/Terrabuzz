import React from 'react';
import '../../style/Settings/Settings.css';

const MainContent = () => (
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
          <input
            type="button"
            className="options-button change-password"
            value="Change Password"
          />
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
            <h3> Email Address </h3>
          </div>

          <div className="align-input-field-2">
            <input className="search-box" type="text" />
          </div>
        </div>

        <div className="input-fields">
          <div className="align-input-field-1">
            <h3> Username </h3>
          </div>

          <div className="align-input-field-2">
            <input className="search-box" type="text" />
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
            <input className="search-box" type="text" />
          </div>
        </div>

        <div className="input-fields">
          <div className="align-input-field-1">
            <h3> Confirm Password </h3>
          </div>

          <div className="align-input-field-2">
            <input className="search-box" type="text" />
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

export default MainContent;
