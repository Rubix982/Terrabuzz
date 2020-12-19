import React, { createContext, useState } from 'react';

export const searchContext = createContext();

const SearchProvider = ({ children }) => {
  const buttonActiveState = useState('Interested in');
  const loadingState = useState(true);
  
  return (
    <searchContext.Provider value={{
      buttonActive: {
        state: buttonActiveState[0],
        setter: buttonActiveState[1],
      }
    }}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
