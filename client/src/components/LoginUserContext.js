import React, { createContext, useState, useEffect } from 'react';

export const loginUserContext = createContext();

const LoginUserProvider = ({ children }) => {
  const loginState = useState(false);
  const firstLoginState = useState(true);

  useEffect(() => {
    (loginState[1])((localStorage.getItem('loggedIn') === 'true') ? true : false);
    (firstLoginState[1])((localStorage.getItem('firstLogin') === 'true') ? true : false);

  }, [loginState[0]])

  return (
    <loginUserContext.Provider value={{
      login: {
        state: loginState[0],
        setter: loginState[1],
      },
      firstLogin: {
        state: firstLoginState[0],
        setter: firstLoginState[1],
      }
    }}>
      {children}
    </loginUserContext.Provider>
  );
};

export default LoginUserProvider;