import React, { useContext } from 'react';

import HeaderStyling from '../../style/Profile/Header.module.css';
import { profileContext } from './ProfileContext';
import ConnectButton from './ConnectButton';
import { loginUserContext } from '../LoginUserContext';

const Header = () => {
  const { loading, profile } = useContext(profileContext);
  const [loggedIn] = useContext(loginUserContext);
  
  if (loading.state) {
    return (
      <>
      </>
    );  
  } else {
    const { state: { userInformation: { ProfilePicture } } } = profile;
    return (
      <div className={HeaderStyling.cover}>
        <div className={HeaderStyling.profilePicture}>
          <img src={`/assets/img/profile_pictures/${ProfilePicture}`} alt="" name="profile-picture" />
        </div>
        { loggedIn ?  <ConnectButton/> : '' }
      </div>
    );
  }
};

export default Header;
