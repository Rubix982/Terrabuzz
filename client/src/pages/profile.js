import React from 'react';

import Navbar from '../components/Navbar'

const Profile = ({ children, style }) => {
    return (
        <div>
            <Navbar first_name="Tashik" title={"Terrabuzz"} />
            PROFILE HERE
        </div>
    );
};

export default Profile;