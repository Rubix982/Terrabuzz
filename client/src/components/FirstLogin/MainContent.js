import React, { useState } from 'react';
import ComponentStyling from '../../style/FirstLogin/MainContent.module.css';

const booleanList = [false, false, false, false, false, false, false, false, false]
const pictureSelection = [false, false, false, false]

const MaleProfilePictureGrid = () => {

  const [selectPicture, setSelectPicture] = useState(pictureSelection);

  console.log(selectPicture);

  return (
    <div className={ComponentStyling.gridStylingForPictures}>

      <div className={selectPicture[0] ?
        `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
        : `${ComponentStyling.pictureElement}`}
        onClick={() => setSelectPicture(() => { return [true, false, false, false] })}
      >
        <img src='/assets/img/profile_pictures/boy.svg' alt='' />
      </div>

      <div className={selectPicture[1] ?
        `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
        : `${ComponentStyling.pictureElement}`}
        onClick={() => setSelectPicture(() => { return [false, true, false, false] })}
      >
        <img src='/assets/img/profile_pictures/boy(1).svg' alt='' />
      </div>

      <div className={selectPicture[2] ?
        `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
        : `${ComponentStyling.pictureElement}`}
        onClick={() => setSelectPicture(() => { return [false, false, true, false] })}
      >
        <img src='/assets/img/profile_pictures/boy(2).svg' alt='' />
      </div>

      <div className={selectPicture[3] ?
        `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
        : `${ComponentStyling.pictureElement}`}
        onClick={() => setSelectPicture(() => { return [false, false, false, true] })}
      >
        <img src='/assets/img/profile_pictures/boy(3).svg' alt='' />
      </div>

    </div>
  );
};

const FemaleProfilePictureGrid = () => {

  const [selectPicture, setSelectPicture] = useState(pictureSelection);

  console.log(selectPicture);

  return (
    <div className={ComponentStyling.gridStylingForPictures}>
      <div className={selectPicture[0] ?
        `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
        : `${ComponentStyling.pictureElement}`}
        onClick={() => setSelectPicture(() => { return [true, false, false, false] })}
      >
        <img src='/assets/img/profile_pictures/girl.svg' alt='' />
      </div>
      <div className={selectPicture[1] ?
        `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
        : `${ComponentStyling.pictureElement}`}
        onClick={() => setSelectPicture(() => { return [false, true, false, false] })}
      >
        <img src='/assets/img/profile_pictures/girl(1).svg' alt='' />
      </div>
      <div className={selectPicture[2] ?
        `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
        : `${ComponentStyling.pictureElement}`}
        onClick={() => setSelectPicture(() => { return [false, false, true, false] })}
      >
        <img src='/assets/img/profile_pictures/girl(2).svg' alt='' />
      </div>
      <div className={selectPicture[3] ?
        `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
        : `${ComponentStyling.pictureElement}`}
        onClick={() => setSelectPicture(() => { return [false, false, false, true] })}
      >
        <img src='/assets/img/profile_pictures/girl(3).svg' alt='' />
      </div>
    </div>
  );
};

const MainContent = () => {

  const [activationArray, setActivationArray] = useState(booleanList);

  const [isMale, setIsMale] = useState(true);

  const setToMale = () => {
    setIsMale(true);
  }

  const setToFemale = () => {
    setIsMale(false);
  }

  const ClickedButton = (event) => {
    console.log(event)
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
          {isMale ? <MaleProfilePictureGrid /> : <FemaleProfilePictureGrid />}
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
          <label style={{ paddingBottom: "10px" }}>Interests</label>
          <div className={ComponentStyling.GridSystemForInterests}>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={activationArray[0] ? `${ComponentStyling.inputLabel} 
                ${ComponentStyling.toggleButton}` : `${ComponentStyling.inputLabel}`}
                htmlFor='checkbox'
                onClick={() => setActivationArray(() => {
                  return (
                    [!activationArray[0], activationArray[1], activationArray[2],
                    activationArray[3], activationArray[4], activationArray[5],
                    activationArray[6], activationArray[7]]
                  )
                })}
              >
                #philosophy
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={activationArray[1] ? `${ComponentStyling.inputLabel} 
                ${ComponentStyling.toggleButton}` : `${ComponentStyling.inputLabel}`}
                htmlFor='checkbox'
                onClick={() => setActivationArray(() => {
                  return (
                    [activationArray[0], !activationArray[1], activationArray[2],
                    activationArray[3], activationArray[4], activationArray[5],
                    activationArray[6], activationArray[7]]
                  )
                })}
              >
                #food
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={activationArray[2] ? `${ComponentStyling.inputLabel} 
                ${ComponentStyling.toggleButton}` : `${ComponentStyling.inputLabel}`}
                htmlFor='checkbox'
                onClick={() => setActivationArray(() => {
                  return (
                    [activationArray[0], activationArray[1], !activationArray[2],
                    activationArray[3], activationArray[4], activationArray[5],
                    activationArray[6], activationArray[7]]
                  )
                })}
              >
                #fast
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={activationArray[3] ? `${ComponentStyling.inputLabel} 
                ${ComponentStyling.toggleButton}` : `${ComponentStyling.inputLabel}`}
                htmlFor='checkbox'
                onClick={() => setActivationArray(() => {
                  return (
                    [activationArray[0], activationArray[1], activationArray[2],
                    !activationArray[3], activationArray[4], activationArray[5],
                    activationArray[6], activationArray[7]]
                  )
                })}
              >
                #web
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={activationArray[4] ? `${ComponentStyling.inputLabel} 
                ${ComponentStyling.toggleButton}` : `${ComponentStyling.inputLabel}`}
                htmlFor='checkbox'
                onClick={() => setActivationArray(() => {
                  return (
                    [activationArray[0], activationArray[1], activationArray[2],
                    activationArray[3], !activationArray[4], activationArray[5],
                    activationArray[6], activationArray[7]]
                  )
                })}
              >
                #cloud
                </label>
            </div>
            <div onClick={ClickedButton} className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label
                type="button"
                className={activationArray[5] ? `${ComponentStyling.inputLabel} 
                ${ComponentStyling.toggleButton}` : `${ComponentStyling.inputLabel}`}
                htmlFor='checkbox'
                onClick={() => setActivationArray(() => {
                  return (
                    [activationArray[0], activationArray[1], activationArray[2],
                    activationArray[3], activationArray[4], !activationArray[5],
                    activationArray[6], activationArray[7]]
                  )
                })}
              >
                #humor
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={activationArray[6] ? `${ComponentStyling.inputLabel} 
                ${ComponentStyling.toggleButton}` : `${ComponentStyling.inputLabel}`}
                htmlFor='checkbox'
                onClick={() => setActivationArray(() => {
                  return (
                    [activationArray[0], activationArray[1], activationArray[2],
                    activationArray[3], activationArray[4], activationArray[5],
                    !activationArray[6], activationArray[7]]
                  )
                })}
              >
                #football
                </label>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <input name='checkbox' type='checkbox' className={ComponentStyling.inputCheckbox} />
              <label type="button"
                className={activationArray[7] ? `${ComponentStyling.inputLabel} 
                ${ComponentStyling.toggleButton}` : `${ComponentStyling.inputLabel}`}
                htmlFor='checkbox'
                onClick={() => setActivationArray(() => {
                  return (
                    [activationArray[0], activationArray[1], activationArray[2],
                    activationArray[3], activationArray[4], activationArray[5],
                    activationArray[6], !activationArray[7]]
                  )
                })}
              >
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
  );
};

export { MainContent };
