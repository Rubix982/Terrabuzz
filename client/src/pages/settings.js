import React from 'react';

import Navbar from '../components/Navbar'

const Settings = ({ children, style }) => {
    return (
        <div>
          <Navbar first_name="Tashik" title={"Terrabuzz"} />
            SETTINGS HERE
        </div>
    )
};

export default Settings;