import API from '../API/API';

export const makeRequestToChangePassword = async (__formdata) => {
    try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/changepassword`, __formdata);
    } catch (error) {
        throw new Error(`Unable to make client service for change password, due to error "${error.message}"`)
    }
};