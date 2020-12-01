import React from 'react';

import ImageHeaderStyling from '../../style/Profile/ImageHeader.module.css';
import PlusSymbol from '../../assets/profile/plus.svg';
import MainProfilePicture from '../../assets/profile/Profile_Picture.jpg';

const ImageHeader = () => (
  <div className={ImageHeaderStyling.cover}>
    <div className={ImageHeaderStyling.profilePicture}>
      <img src={MainProfilePicture} alt="" name="profile-picture" />
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

export default ImageHeader;
