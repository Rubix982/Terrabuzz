import API from '../API/API'
require('dotenv').config();

export const publishPost = async (__title, __content) => {
  if(!__title || !__content ) {
    throw new Error('Required fields cannot be empty!');
  }

  try {
    const data = await API.postRequest(`${process.env.REACT_APP_API_URL}/publish`, { title: __title, content: __content });
    console.log(data.msg);
  } catch (error) {
    throw new Error(error.message);
  }
};