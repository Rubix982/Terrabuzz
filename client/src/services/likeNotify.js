import API from '../API/API.js';

export const postLikeNotify = async(__id, __notificationSchemaForm) => {
    try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/notification`, __notificationSchemaForm);
        const { status } = await API.postRequest(`${process.env.REACT_APP_API_URL}/like/${id}`);
        return status;        
    } catch(error) {
        throw new Error(`Failure to make request to backend to post a like notification, due to error ${error.message}`)
    }
}