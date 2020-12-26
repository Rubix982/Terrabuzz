import React, { createContext, useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../API/API';
import { loginUserContext } from '../LoginUserContext';

export const postContext = createContext();

const PostProvider = ({ children }) => {
  const postState = useState({});
  const likeState = useState(false);
  const loadingState = useState(true);
  const { id } = useParams();
  const [loggedIn] = useContext(loginUserContext);

  useEffect(async () => {
    try {
      const { data } = await API.getRequest(`${process.env.REACT_APP_API_URL}/post/${id}`);
      (postState[1])(data); 
      
      if (loggedIn) {
        const { status } = await API.getRequest(`${process.env.REACT_APP_API_URL}/like/${id}`);
        (likeState[1])(status);
        return (loadingState[1])(false);
      }

      return (loadingState[1])(false);
    } catch (error) {
      alert(`No post for this link can be found anymore. Sorry!`)
    }
  }, [likeState[0]]);

  return (
    <postContext.Provider value={{
      post: { state: postState[0], setter: postState[1] },
      like: { state: likeState[0], setter: likeState[1] },
      loading: { state: loadingState[0], setter: loadingState[1] }
    }}>
      {children}
    </postContext.Provider>
  );
};

export default PostProvider;