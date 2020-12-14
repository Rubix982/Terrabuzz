import React, { useState , useEffect } from 'react';
import API from '../../API/API.js'
import '../../style/Settings/Settings.css';

const MainContent = () => {
  const [_Email, setEmail] = useState('');
  const [_Username, setUsername] = useState('');
  const [_Handler, setHandler] = useState('');
  const [_Password, setPassword] = useState('');
  const [_CPassword, setCPassword] = useState('');

  // useEffect( async () => {
  //   const response = await API.getRequest(`${process.env.REACT_APP_API_URL}/settings`)
  //   const [data] = response[0];
  //   setEmail(data._Email) ;
  //   setUsername(data._Username) ; 
  //   setHandler(data._Handler) ; 
  //   console.log(data._Username); 
  // }); 
  // uncomment above code only when login is completed and when there's no hard coded data with protected routes.

  const saveChanges = async event => {

    event.preventDefault();
    	
    let formData = 
    {
      Email: _Email,
      Username: _Username,
      Handler: _Handler,
      Password: _Password,
      CPassword: _CPassword
    } ;

    const response = await API.postRequest(`${process.env.REACT_APP_API_URL}/settings`, formData ) ;
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
              <input className="search-box" type="text" value={_Email} onChange={event => setEmail(event.target.value)}/>
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
              <input className="search-box" type="text" value={_Handler} onChange={event => setHandler(event.target.value)}/>
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Password </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="password" value={_Password} onChange={event => setPassword(event.target.value)}/>
            </div>
          </div>

          <div className="input-fields">
            <div className="align-input-field-1">
              <h3> Confirm Password </h3>
            </div>

            <div className="align-input-field-2">
              <input className="search-box" type="password" value={_CPassword} onChange={event => setCPassword(event.target.value)}/>
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