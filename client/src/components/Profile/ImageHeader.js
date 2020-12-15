import React, { useContext } from 'react';

import ImageHeaderStyling from '../../style/Profile/ImageHeader.module.css';
import { profileContext } from './ProfileContext';
import PlusSymbol from '../../assets/profile/plus.svg';
import CameraPicture from '../../assets/profile/camera.svg';

const ImageHeader = () => {
  const { loading, profile } = useContext(profileContext);
  
  if (loading.state) {
    return (
    <>
    </>
    );  
  } else {
    const { state: { userInformation: { ProfilePicture } } } = profile;
    return (
      <div className={ImageHeaderStyling.cover}>
        {/* <div className={ImageHeaderStyling.cameraSymbolPicture}>
          <img
            className={ImageHeaderStyling.cameraSymbol}
            src={CameraPicture}
            alt=''
            name='camera-symbol'
          />
        </div> */}
        <div className={ImageHeaderStyling.profilePicture}>
          <img src={`/assets/img/profile_pictures/${ProfilePicture}`} alt="" name="profile-picture" />
        </div>
        <div className={ImageHeaderStyling.plusSymbolPicture}>
          <img
            className={ImageHeaderStyling.plusSymbol}
            src={PlusSymbol}
            alt=""
            name="plus-symbol"
          />
        </div>
      </div>
    );
  }
  
};

export default ImageHeader;
