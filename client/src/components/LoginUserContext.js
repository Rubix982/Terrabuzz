import React, { createContext, useState, useEffect } from 'react';
import API from '../API/API';

export const loginUserContext = createContext();

const LoginUserProvider = ({ children }) => {
  const loginState = useState(false);
  // const userName = useState('');
  // const profilePicturePath = useState('');


  useEffect(() => {
    (loginState[1])((localStorage.getItem('loggedIn') === 'true') ? true : false);
    // if(loginState[0] === true) 
    // {
    //   try {
    //     const response = await API.getRequest(`${process.env.REACT_APP_API_URL}/feed`);
    //     const [data] = response[0];
    //     return data;
    //   } catch (error) {
    //       throw new Error(error.message);
    //   }
    // }
  }, [loginState[0]])

  return (
    <loginUserContext.Provider value={loginState}>
      {children}
    </loginUserContext.Provider>
  );
};

export default LoginUserProvider;