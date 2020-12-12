import API from '../API/API'
require('dotenv').config();

export const publishPost = async (__title, __content, __interest) => {

  if (!__title) {
    throw new Error("Title cannot be empty!");
  }

  if (!__interest) {
    throw new Error('Interest cannot be empty!');
  }

  if (!__content) {
    throw new Error('Content cannot be empty!');
  }

  if (!__title || !__content || !__interest) {
    throw new Error('Required fields cannot be empty!');
  }

  try {
    const data = await API.postRequest(`${process.env.REACT_APP_API_URL}/publish`, { title: __title, content: __content, interest: __interest });
    console.log(data.msg);
  } catch (error) {
    throw new Error(error.message);
  }
};