import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API/API';

import HeaderStyling from '../../style/Profile/Header.module.css';
import { profileContext } from './ProfileContext';
import PlusSymbol from '../../assets/profile/plus.svg';
import CrossSymbol from '../../assets/profile/cross.svg';

const ConnectButton = () => {
  const { follow } = useContext(profileContext);
  const { handle } = useParams();
  
  return (
    <div onClick={async () => {
      try {
        const { status } = await API.postRequest(`${process.env.REACT_APP_API_URL}/follow/${handle}`);
        follow.setter(status);
      } catch (error) {
        alert(error.message);
      }
    }} className={HeaderStyling.connection}>
      {(follow.state) ? (
        <img
          className={HeaderStyling.crossSymbol}
          src={CrossSymbol}
          alt=""
          name="cross-symbol"
        />
      ) : (
        <img
          className={HeaderStyling.plusSymbol}
          src={PlusSymbol}
          alt=""
          name="plus-symbol"
        />
      )}
    </div>  
  );
};

export default ConnectButton;
