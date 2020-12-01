import React from 'react';
import ComponentStyling from '../../style/FirstLogin/MainContent.module.css';

const MainContent = ({ children, style }) => {

    const changeColor = (e) => {
        var classNames = String(e.target.className)
        if (classNames.includes("AddColorToClickedButton")) {
            classNames = classNames.split(' ');

            const classNameToReplace = classNames[1].replace("AddColorToClickedButton", "RemoveColorToClickedButton");
            console.log(classNameToReplace);
            // e.target.classList.remove(classNames[1]);
            // e.target.classList.add('RemoveColorToClickedButton');
        }
        // else if (classNames.includes("RemoveColorToClickedButton")) {
        //     // console.log("here 2");
            
        //     e.target.classList.add('AddColorToClickedButton');
        //     e.target.classList.remvoe('RemoveColorToClickedButton');
        // }
    }

    const ActivatedButton = `${ComponentStyling.ToggleInterest} ${ComponentStyling.AddColorToClickedButton}`;

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
                            <button type='button' className={ActivatedButton} onClick={changeColor}>#philosophy</button>
                        </div>
                        <div className={ComponentStyling.OuterToggleInterest}>
                            <button type='button' className={ActivatedButton} onClick={changeColor}>#food</button>
                        </div>
                        <div className={ComponentStyling.OuterToggleInterest}>
                            <button type='button' className={ActivatedButton} onClick={changeColor}>#cricket</button>
                        </div>
                        <div className={ComponentStyling.OuterToggleInterest}>
                            <button type='button' className={ActivatedButton} onClick={changeColor}>#football</button>
                        </div>
                        <div className={ComponentStyling.OuterToggleInterest}>
                            <button type='button' className={ActivatedButton} onClick={changeColor}>#webdev</button>
                        </div>
                        <div className={ComponentStyling.OuterToggleInterest}>
                            <button type='button' className={ActivatedButton} onClick={changeColor}>#microsoft</button>
                        </div>
                        <div className={ComponentStyling.OuterToggleInterest}>
                            <button type='button' className={ActivatedButton} onClick={changeColor}>#fast</button>
                        </div>
                        <div className={ComponentStyling.OuterToggleInterest}>
                            <button type='button' className={ActivatedButton} onClick={changeColor}>#technology</button>
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