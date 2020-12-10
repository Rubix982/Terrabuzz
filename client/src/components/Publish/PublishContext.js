import React, { createContext, useState } from 'react'

export const publishContext = createContext();

const PublishProvider = ({ children }) => {
  const titleState = useState('');
  const contentState = useState('');

  return (
    <publishContext.Provider value={[titleState, contentState]}>
      {children}
    </publishContext.Provider>
  );
};

export default PublishProvider;