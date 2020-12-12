import React, { createContext, useState, useEffect } from 'react';

export const loginUserContext = createContext();

const LoginUserProvider = ({ children }) => {
  const loginState = useState(false);

  useEffect(() => {
    (loginState[1])((localStorage.getItem('loggedIn') === 'true') ? true : false);
  }, [loginState[0]])

  return (
    <loginUserContext.Provider value={loginState}>
      {children}
    </loginUserContext.Provider>
  );
};

export default LoginUserProvider;