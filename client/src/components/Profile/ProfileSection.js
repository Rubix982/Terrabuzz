import React from 'react';

import ProfileSectionStyling from '../../style/Profile/ProfileSection.module.css'

const ProfileSection = ({ children, style }) => {
    return (
        <div className={ProfileSectionStyling.flexLayout}>
            <div className={ProfileSectionStyling.layoutClass}>
                <p className={ProfileSectionStyling.UserName}>{children.UserName}</p>
                <p className={ProfileSectionStyling.UserHandle}>{children.UserHandle}</p>
                <p className={ProfileSectionStyling.Location}>{children.Location}</p>
                <div className={ProfileSectionStyling.borderRadius}>
                    <div className={ProfileSectionStyling.ConnectionPostBreaker}>
                        <p className={ProfileSectionStyling.Connections} style={{ display: 'inline-block' }}>{children.Connections} Connections</p>
                        <p className={ProfileSectionStyling.Posts} style={{ display: 'inline-block' }}>{children.Posts} Posts</p>
                    </div>
                    <p className={ProfileSectionStyling.Biography}>{children.Biography}</p>
                </div>
                <div className={ProfileSectionStyling.FixSpacingIssue}>
                    <p className={ProfileSectionStyling.ActivityHeader}>Activity</p>
                    <p className={ProfileSectionStyling.Activities}>{children.Activities}</p>
                    <p className={ProfileSectionStyling.InterestHeader}>Interest</p>
                    <p className={ProfileSectionStyling.Interest}>{children.Interest}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;