import API from '../API/API';

export const getProfileSearchEntries = async (__content) => {
  try {    
    const {users: userProfiles} = await API.getRequest(`${process.env.REACT_APP_API_URL}/search-user?handle=${__content}`);
    return (userProfiles);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getInterestSearchEntries = async (__content) => {
  try {
  } catch (error) {
  }
}