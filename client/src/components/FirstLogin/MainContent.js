import React, { useState } from 'react';
import ComponentStyling from '../../style/FirstLogin/MainContent.module.css';

const FemaleProfilePictureGrid = () => {
  return (
    <div className={ComponentStyling.gridStylingForPictures}>
      <div className={ComponentStyling.pictureElement}>
        <img src='/assets/img/profile_pictures/boy.svg' alt='' />
      </div>
      <div className={ComponentStyling.pictureElement}>
        <img src='/assets/img/profile_pictures/boy(1).svg' alt='' />
      </div>
      <div className={ComponentStyling.pictureElement}>
        <img src='/assets/img/profile_pictures/boy(2).svg' alt='' />
      </div>
      <div className={ComponentStyling.pictureElement}>
        <img src='/assets/img/profile_pictures/boy(3).svg' alt='' />
      </div>
    </div>
  );
};

const MaleProfilePictureGrid = () => {
  return (
    <div className={ComponentStyling.gridStylingForPictures}>
      <div className={ComponentStyling.pictureElement}>
        <img src='/assets/img/profile_pictures/girl.svg' alt='' />
      </div>
      <div className={ComponentStyling.pictureElement}>
        <img src='/assets/img/profile_pictures/girl(1).svg' alt='' />
      </div>
      <div className={ComponentStyling.pictureElement}>
        <img src='/assets/img/profile_pictures/girl(2).svg' alt='' />
      </div>
      <div className={ComponentStyling.pictureElement}>
        <img src='/assets/img/profile_pictures/girl(3).svg' alt='' />
      </div>
    </div>
  );
};


const MainContent = () => {
  const activationArr = [];
  for (let i = 0; i < 8; i += 1) activationArr[i] = false;

  const [isMale, setIsMale] = useState(false);

  const setToMale = () => {
    setIsMale(true);
  }

  const setToFemale = () => {
    setIsMale(false);
  }

  return (
    <div className={ComponentStyling.content}>
      <h1>Welcome!</h1>
      <h2>This looks like your first login!</h2>
      <h4>To get your started with your profile, let&apos;s go to some basic information</h4>
      <form className={ComponentStyling.formlogin}>
        <h2 style={{ paddingLeft: '0px' }}>Gender?</h2>

        <div>
          <input onClick={setToMale} type="radio" name="gender" value="male" />
          <label style={{ paddingLeft: "10px" }} htmlFor="male">Male</label>
        </div>

        <br />
        <div>
          <input onClick={setToFemale} type="radio" name="gender" value="female" />
          <label style={{ paddingLeft: "10px" }} htmlFor="female">Female</label>
        </div>

        <div className={ComponentStyling.Spacing}></div>

        <div className={ComponentStyling.PhotoGrid}>
          {isMale ? <FemaleProfilePictureGrid /> : <MaleProfilePictureGrid />}
        </div>

        <div className={ComponentStyling.Spacing}></div>

        <div className={`${ComponentStyling.FieldBox} ${ComponentStyling.Bio}`}>
          <label>
            What should your biography look like?
            <span>( 200 characters max )</span>
          </label>
          <br />
          <textarea
            type="text"
            name="biography"
            aria-placeholder="I like sports! Or I’m a website designer!"
            placeholder="I like sports! Or I’m a website designer!"
            className={ComponentStyling.ForBioTextArea}
            maxLength="200"
            rows="4"
            cols="50"
          />
        </div>
        <div className={`${ComponentStyling.FieldBox}`}>
          <label>Activities</label>
          <br />
          <textarea
            type="text"
            name="activities"
            placeholder="swimming, hiking, writing"
            aria-placeholder="swimming, hiking, writing"
            className={ComponentStyling.ForActivities}
            maxLength="50"
          />
        </div>
        <div className={`${ComponentStyling.FieldBox}`}>
          <label style={{paddingBottom: "10px"}}>Interests</label>
          <div className={ComponentStyling.GridSystemForInterests}>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={`${ComponentStyling.inputLabel}`}
                htmlFor='checkbox' >
                #philosophy
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={`${ComponentStyling.inputLabel}`}
                htmlFor='checkbox' >
                #food
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={`${ComponentStyling.inputLabel}`}
                htmlFor='checkbox' >
                #fast
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={`${ComponentStyling.inputLabel}`}
                htmlFor='checkbox' >
                #web
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={`${ComponentStyling.inputLabel}`}
                htmlFor='checkbox' >
                #cloud
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={`${ComponentStyling.inputLabel}`}
                htmlFor='checkbox' >
                #humor
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={`${ComponentStyling.inputLabel}`}
                htmlFor='checkbox' >
                #football
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={`${ComponentStyling.inputLabel}`}
                htmlFor='checkbox' >
                #karachi
                </label>
            </div>
          </div>
        </div>
        <input
          className={ComponentStyling.login}
          type="button"
          value="Submit!"
        />
      </form>
    </div>
    // </div>
  );
};

export { MainContent };
