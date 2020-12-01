import React from 'react';
import ComponentStyling from '../../style/FirstLogin/MainContent.module.css';

const MainContent = ({ children, style }) => {
    return (
        <div className={ComponentStyling.content}>
            <h1>Welcome!</h1>

            <h2>This looks like your first login!</h2>

            <h4>To get your started with your profile, let's go to some basic information</h4>

            <form className={ComponentStyling.formlogin}>

                <div className={`${ComponentStyling.FieldBox} ${ComponentStyling.Bio}`}>
                    <label>What should your biography look like?<span>( 200 characters max )</span></label>
                    <br />
                    <textarea
                        type="text"
                        name="biography"
                        aria-placeholder='I like sports! Or I’m a website designer!'
                        placeholder='I like sports! Or I’m a website designer!'
                        className={ComponentStyling.ForBioTextArea}
                        contentEditable="true"
                        maxLength="200"
                        rows='4' cols='50'
                        autoFocus
                    ></textarea>
                </div>

                <div className={`${ComponentStyling.FieldBox}`}>
                    <label>Activities</label>
                    <br />
                    <textarea
                        type="text"
                        name="activities"
                        placeholder="swimming, hiking, writing"
                        aria-placeholder='swimming, hiking, writing'
                        className={ComponentStyling.ForActivities}
                        contentEditable="true"
                        maxLength="50"
                    ></textarea>
                </div>

                <div className={`${ComponentStyling.FieldBox}`}>
                    <label>Interests</label>
                    <br />
                    <textarea
                        type="text"
                        name="activities"
                        placeholder="#football, #cricket, #hockey, #foodie, #music"
                        aria-placeholder='#football, #cricket, #hockey, #foodie, #music'
                        className={ComponentStyling.ForInterests}
                        contentEditable="true"
                        maxLength="50"
                    />
                </div>

                <input
                    className={ComponentStyling.login}
                    type="button"
                    value="Submit!"
                />
            </form>
        </div >
    );
};

export default MainContent;