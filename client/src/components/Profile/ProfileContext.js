import React, {  useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API/API';

export const profileContext = createContext();

const ProfileProvider = ({ children }) => {
  const profileData = useState({});
  const loadingState = useState(true);
  const { handle } = useParams();

  useEffect(async () => {
    const { data } = await API.getRequest(`${process.env.REACT_APP_API_URL}/profile/${handle}`);
    (profileData[1])(data);
    (loadingState[1])(false);
  }, [])

  return (
    <profileContext.Provider value={{
      profile: {
        state: profileData[0],
        setter: profileData[1],
      },
      loading: {
        state: loadingState[0],
        setter: loadingState[1],
      }
    }}>
      {children}
    </profileContext.Provider>
  );
};

export default ProfileProvider;
