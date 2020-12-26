import React , { createContext , useState , useEffect } from 'react';
export const userContext = createContext();


const userContextProvider = ({ children }) => {

    const [_userName, setUserName] = useState('Tashik Moin');
    const [_imageSource, setImageSource] = useState('/assets/img/profile_pictures/boy(3).svg');
    const userData = { userName: _userName , imageSource: _imageSource} ;

    useEffect( () => {

    } , [] );

    return (
        <userContext.Provider value = {userData}>
            { children }
        </userContext.Provider>
    );
}

export default userContextProvider;
