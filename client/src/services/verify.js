import API from '../API/API';

export const verifyUser = async (__hash) => {
  try {
    const { status } = await API.postRequest(`${process.env.REACT_APP_API_URL}/verify`,
    { hash: __hash }
    );
    return (status);
  } catch (error) {
    throw new Error(error.message);
  }
};
