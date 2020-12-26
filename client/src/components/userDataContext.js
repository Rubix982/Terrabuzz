import React, {useEffect, useState} from 'react';
const UserContext = React.createContext();
import API from '../API/API';
require('dotenv').config();

export const UserProvider = (props) => {

    const [userName , setUserName ] = useState('Tashik Moin');
    const [imageSource , setImageSource ] = useState('/assets/img/profile_pictures/boy(3).svg');

    useEffect( async () => {
        try {
            const response = await API.getRequest(`${process.env.REACT_APP_API_URL}/feed`);
            const [data] = response[0];
            setUserName(data.Username);
            setImageSource('/assets/img/profile_pictures/'+data.ProfilePicture);
        } catch (error) {
            throw new Error(error.message);
        }
    },[]);

    return(
        <UserContext.Provider value={{userName, imageSource}}>
            {props.children}
        </UserContext.Provider>
    );
}


export default UserContext;