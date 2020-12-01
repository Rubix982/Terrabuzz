import React, { createContext, useState } from 'react';

export const searchTypeContext = createContext();

const SearchTypeProvider = ({ children }) => {
  const [buttonActive, setButtonActive] = useState('Interested in');

  return (
    <searchTypeContext.Provider value={[buttonActive, setButtonActive]}>
      {children}
    </searchTypeContext.Provider>
  );
};

export default SearchTypeProvider;
