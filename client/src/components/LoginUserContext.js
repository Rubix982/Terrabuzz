import React, { createContext, useState, useEffect } from 'react';

export const loginUserContext = createContext();

const LoginUserProvider = ({ children }) => {
  const loginState = useState((localStorage.getItem('loggedIn') === 'true') ? true : false);
  const firstLoginState = useState((localStorage.getItem('loggedIn') === 'true') ? true : false);
  const verifiedState = useState((localStorage.getItem('verified') === 'true') ? true : false);

  useEffect(() => {
    localStorage.setItem('loggedIn', loginState[0]);
    localStorage.setItem('firstLogin', firstLoginState[0]);
    localStorage.setItem('verified', verifiedState[0]);
  }, [loginState[0], firstLoginState[0], verifiedState[0]])

  return (
    <loginUserContext.Provider value={{
      login: {
        state: loginState[0],
        setter: loginState[1],
      },
      firstLogin: {
        state: firstLoginState[0],
        setter: firstLoginState[1],
      },
      verified: {
        state: verifiedState[0],
        setter: verifiedState[1],
      }
    }}>
      {children}
    </loginUserContext.Provider>
  );
};

export default LoginUserProvider;