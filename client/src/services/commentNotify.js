import API from '../API/API.js';

export const postCommentNotify = async (__id, __data, __commentNotificationSchemaForm) => {
    try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/post/${__id}`, __data);
        await API.postRequest(`${process.env.REACT_APP_API_URL}/notification-comment`, __commentNotificationSchemaForm);
    } catch (error) {
        throw new Error(`Failure to make request to backend to post a comment notification, due to error ${error.message}`)
    }
}