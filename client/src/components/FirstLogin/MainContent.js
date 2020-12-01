import React from 'react';
import ComponentStyling from '../../style/FirstLogin/MainContent.module.css';

const MainContent = ({ children, style }) => {
    return (
        // <div className={ComponentStyling.ScrollbarEffect}>
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
                            maxLength="50"
                        ></textarea>
                    </div>
                    <div className={`${ComponentStyling.FieldBox}`}>
                        <label>Interests</label>
                        <div className={ComponentStyling.GridSystemForInterests}>
                            <div className={ComponentStyling.OuterToggleInterest}>
                                <button className={ComponentStyling.ToggleInterest}>#philosophy</button>
                            </div>
                            <div className={ComponentStyling.OuterToggleInterest}>
                                <button className={ComponentStyling.ToggleInterest}>#food</button>
                            </div>
                            <div className={ComponentStyling.OuterToggleInterest}>
                                <button className={ComponentStyling.ToggleInterest}>#cricket</button>
                            </div>
                            <div className={ComponentStyling.OuterToggleInterest}>
                                <button className={ComponentStyling.ToggleInterest}>#football</button>
                            </div>
                            <div className={ComponentStyling.OuterToggleInterest}>
                                <button className={ComponentStyling.ToggleInterest}>#webdev</button>
                            </div>
                            <div className={ComponentStyling.OuterToggleInterest}>
                                <button className={ComponentStyling.ToggleInterest}>#microsoft</button>
                            </div>
                            <div className={ComponentStyling.OuterToggleInterest}>
                                <button className={ComponentStyling.ToggleInterest}>#fast</button>
                            </div>
                            <div className={ComponentStyling.OuterToggleInterest}>
                                <button className={ComponentStyling.ToggleInterest}>#technology</button>
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