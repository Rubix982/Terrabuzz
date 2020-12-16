import API from '../API/API';
require('dotenv').config();

export const loginUser = async (__email, __password) => {
  if (!__email || !__password) {
    throw new Error('Required fields cannot be empty!');
  }

  console.log(__email, __password);

  try {
    const data = await
      API.postRequest(`${process.env.REACT_APP_API_URL}/login`,
        { email: __email, password: __password });
    console.log(data.msg);
  } catch (error) {
    throw new Error(error.message);
  }
};