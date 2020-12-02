import React from 'react';
import ComponentStyling from '../../style/FirstLogin/MainContent.module.css';

const MainContent = () => {
  const activationArr = [];
  for (let i = 0; i < 8; i += 1) activationArr[i] = false;

  return (
    <div className={ComponentStyling.content}>
      <h1>Welcome!</h1>
      <h2>This looks like your first login!</h2>
      <h4>To get your started with your profile, let&apos;s go to some basic information</h4>
      <form className={ComponentStyling.formlogin}>
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
          <label>Interests</label>
          <div className={ComponentStyling.GridSystemForInterests}>
            <div className={ComponentStyling.OuterToggleInterest}>
              <button
                type="button"
                className={activationArr[0] ? `${ComponentStyling.AddColorToClickedButton}` : `${ComponentStyling.RemoveColorToClickedButton}`}
                onClick={() => {
                  // console.log(activationArr[0]);
                  activationArr[0] = !activationArr[0];
                  // console.log(activationArr[0]);
                }}
              >
                #philosophy
              </button>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <button
                type="button"
                className={activationArr[1] ? `${ComponentStyling.AddColorToClickedButton}` : `${ComponentStyling.RemoveColorToClickedButton}`}
                onClick={() => {
                  activationArr[1] = !activationArr[1];
                }}
              >
                #food
              </button>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <button
                type="button"
                className={activationArr[2] ? `${ComponentStyling.AddColorToClickedButton}` : `${ComponentStyling.RemoveColorToClickedButton}`}
                onClick={() => {
                  activationArr[2] = !activationArr[2];
                }}
              >
                #fast
              </button>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <button
                type="button"
                className={activationArr[3] ? `${ComponentStyling.AddColorToClickedButton}` : `${ComponentStyling.RemoveColorToClickedButton}`}
                onClick={() => {
                  activationArr[3] = !activationArr[3];
                }}
              >
                #web
              </button>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <button
                type="button"
                className={activationArr[4] ? `${ComponentStyling.AddColorToClickedButton}` : `${ComponentStyling.RemoveColorToClickedButton}`}
                onClick={() => {
                  activationArr[4] = !activationArr[4];
                }}
              >
                #cloud
              </button>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <button
                type="button"
                className={activationArr[5] ? `${ComponentStyling.AddColorToClickedButton}` : `${ComponentStyling.RemoveColorToClickedButton}`}
                onClick={() => {
                  activationArr[5] = !activationArr[5];
                }}
              >
                #humor
              </button>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <button
                type="button"
                className={activationArr[6] ? `${ComponentStyling.AddColorToClickedButton}` : `${ComponentStyling.RemoveColorToClickedButton}`}
                onClick={() => {
                  activationArr[6] = !activationArr[6];
                }}
              >
                #football
              </button>
            </div>
            <div className={ComponentStyling.OuterToggleInterest}>
              <button
                type="button"
                className={activationArr[7] ? `${ComponentStyling.AddColorToClickedButton}` : `${ComponentStyling.RemoveColorToClickedButton}`}
                onClick={() => {
                  activationArr[7] = !activationArr[7];
                }}
              >
                #karachi
              </button>
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

export default MainContent;
