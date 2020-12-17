import API from '../API/API';
require('dotenv').config();

export const newPasswordGenerator = async (__hashed) => {
    if (!__hashed) {
        throw new Error('Hash field cannot be empty');
    }

    try {
        const data = await API.getRequest(`${process.env.REACT_APP_API_URL}/newPassword/${__hashed}`)
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const changePasswordWithHandle = async (__hashed, __handle, __toChangePasswordWith) => {
    if (!__hashed || !__handle || !__toChangePasswordWith) {
        throw new Error('Required fields cannot be empty!');
    }

    try {
        return await API.postRequest(`${process.env.REACT_APP_API_URL}/newPassword/${__hashed}`, {
            handle: __handle,
            password: __toChangePasswordWith
        });
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message);
    }
}