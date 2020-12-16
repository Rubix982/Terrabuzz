import API from '../API/API';
require('dotenv').config();

export const sendForgetPasswordService = async (__email) => {
    if (!__email) {
        throw new Error('Email cannot be empty.');
    }
    
    try {
        const data = await
            API.postRequest(`${process.env.REACT_APP_API_URL}/forget-password`,
                { email: __email });
        console.log(data.msg);
    } catch (error) {
        throw new Error(error.message);
    }
};