import API from '../API/API';
require('dotenv').config()

export const getSettings = async() => {

    try {
        const response = await API.getRequest(`${process.env.REACT_APP_API_URL}/settings`);
        const [data] = response[0];
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}