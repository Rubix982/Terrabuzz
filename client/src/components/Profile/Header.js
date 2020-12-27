import React, { useContext } from 'react';

import HeaderStyling from '../../style/Profile/Header.module.css';
import { profileContext } from './ProfileContext';
import ConnectButton from './ConnectButton';
import { loginUserContext } from '../LoginUserContext';
import { userContext } from '../userDataContext';

const Header = () => {
  const { loading, profile } = useContext(profileContext);
  const { login } = useContext(loginUserContext);
  const userContextInfo = useContext(userContext);

  if (loading.state) {
    return (
      <>
      </>
    );
  } else {
    const { state: { userInformation: { ProfilePicture } } } = profile;
    const displayConnection = ((userContextInfo.handle.state !== profile.state.userInformation.Handle) && (login.state))
    return (
      <div className={HeaderStyling.cover}>
        <div className={HeaderStyling.profilePicture}>
          <img src={`/assets/img/profile_pictures/${ProfilePicture}`} alt="" name="profile-picture" />
        </div>
        { displayConnection ? <ConnectButton /> : ''}
      </div>
    );
  }
};

export default Header;
