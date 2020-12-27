import API from '../API/API';
require('dotenv').config();

export const getCommentList = async () => {
    try {
        const data = await
            API.getRequest(`${process.env.REACT_APP_API_URL}/notification-comment`);
        return data;
    } catch (error) {
        throw new Error(`Unable to fetch notifications from route, due to error "${error.message}"`);
    }
};

export const getLikeList = async () => {
    try {
        const data = await
            API.getRequest(`${process.env.REACT_APP_API_URL}/notification-like`)
        return data;
    } catch (error) {
        throw new Error(`Unable to fetch notifications from route, due to error "${error.message}"`);
    }
}