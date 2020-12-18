import API from '../API/API';
require('dotenv').config();

export const firstLoginCheck = async () => {

    let result;
    try {
        result = await API.getRequest(`${process.env.REACT_APP_API_URL}/feed`);
        return (result);
    } catch(error) {
        throw new Error('Unable to check for confirmation for the first login page.')
    }
};