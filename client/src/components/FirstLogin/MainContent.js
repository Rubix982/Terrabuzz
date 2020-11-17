import React from 'react';
import ComponentStyling from '../../style/FirstLogin/MainContent.module.css';

const MainContent = ({ children, style }) => {

    // let buttonList = document.getElementsByClassName('toggleButton');

    // document.addEventListener(buttonList, () => { 
    //     for ( button in buttonList ) 
    //     {
    //         /* If button was seletcted */
    //     }
    // });

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
                    <button classname={ComponentStyling.toggleButton} id='philosophy'>philosophy</button>
                    <button classname={ComponentStyling.toggleButton} id='food'>food</button>
                    <button classname={ComponentStyling.toggleButton} id='cricket'>cricket</button>
                    <button classname={ComponentStyling.toggleButton} id='football'>football</button>
                    <button classname={ComponentStyling.toggleButton} id='webdev'>webdev</button>
                    <button classname={ComponentStyling.toggleButton} id='microsoft'>microsoft</button>
                    <button classname={ComponentStyling.toggleButton} id='fast'>fast</button>
                    <button classname={ComponentStyling.toggleButton} id='technology'>technology</button>
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