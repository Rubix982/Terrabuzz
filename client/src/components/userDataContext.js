import React, { useContext, createContext, useEffect, useState } from 'react';
import API from '../API/API';
import { loginUserContext } from './LoginUserContext';

export const userContext = createContext();

const UserProvider = (props) => {
    const { login } = useContext(loginUserContext);
    const [userName, setUserName] = useState('');
    const [imageSource, setImageSource] = useState('');
    const [userHandle, setUserHandle] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
      if (login.state) {
        try {
          const response = await API.getRequest(`${process.env.REACT_APP_API_URL}/navbar`);
          setUserHandle(response.Handle);
          setUserName(response.Username);
          setImageSource('/assets/img/profile_pictures/' + response.ProfilePicture);
          return setImageSource;
        } catch (error) {
          alert(error.message);
        }
      }
    }, [login.state]);

    return (
        <userContext.Provider value={{
            userName: { state: userName, setter: setUserName },
            imageSource: { state: imageSource, setter: setImageSource },
            handle: { state: userHandle, setter: setUserHandle },
        }}>
            {props.children}
        </userContext.Provider>
    );
}

export default UserProvider;