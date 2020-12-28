import React, { useState, useEffect, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import API from '../../API/API';

export const profileContext = createContext();

const ProfileProvider = ({ children }) => {
  const profileData = useState({});
  const followState = useState(false);
  const loadingState = useState(true);
  const history = useHistory();
  const { handle } = useParams();

  useEffect(async () => {

    // TODO: Find a way to default render an error page when the data returned
    // is null, that is, no user exists with a given userhandle
    try {
      const { data } = await API.getRequest(`${process.env.REACT_APP_API_URL}/profile/${handle}`);
      const { status } = await API.getRequest(`${process.env.REACT_APP_API_URL}/follow/${handle}`);
      (profileData[1])(data);
      (followState[1])(status);
      (loadingState[1])(false);
    } catch (error) {
      alert('No user exists with the given handle');
      history.push('/feed');
    }
  }, [])

  return (
    <profileContext.Provider value={{
      profile: {
        state: profileData[0],
        setter: profileData[1],
      },
      follow: {
        state: followState[0],
        setter: followState[1],
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
