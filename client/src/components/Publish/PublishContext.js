import React, { createContext, useState } from 'react'

export const publishContext = createContext();

const PublishProvider = ({ children }) => {
  const titleState = useState('');
  const contentState = useState('');
  const interestState = useState('');

  return (
    <publishContext.Provider value={[titleState, contentState, interestState]}>
      {children}
    </publishContext.Provider>
  );
};

export default PublishProvider;