import API from '../API/API';
require('dotenv').config();

export const newPasswordGenerator = async (__email) => {
    if (!__email || !__password) {
        throw new Error('Email fields cannot be empty');
    }



    try {
        const data = await
            API.postRequest(`${process.env.REACT_APP_API_URL}/login`,
                { email: __email, password: __password });
        console.log(data.msg);
    } catch (error) {
        throw new Error(error.message);
    }
};