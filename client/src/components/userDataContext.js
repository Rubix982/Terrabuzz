import React, {useState} from 'react';
const UserContext = React.createContext();

export const UserProvider = (props) => {

    const [userName , setUserName ] = useState('Tashik Moin');
    const [imageSource , setImageSource ] = useState('/assets/img/profile_pictures/boy(3).svg');

    return(
        <UserContext.Provider value={{userName, imageSource}}>
            {props.children}
        </UserContext.Provider>
    );
}


export default UserContext;