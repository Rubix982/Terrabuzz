import React, { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../API/API';

export const postContext = createContext();

const PostProvider = ({ children }) => {
  const postState = useState({});
  const commentState = useState([{}]);
  const loadingState = useState(true);
  const { id } = useParams();

  useEffect(async () => {
    const { data } = await API.getRequest(`${process.env.REACT_APP_API_URL}/post/${id}`);
    (postState[1])(data);
    (loadingState[1])(false);
  }, []);

  return (
    <postContext.Provider value={[postState, commentState, loadingState]}>
      {children}
    </postContext.Provider>
  );
};

export default PostProvider;