import API from '../API/API';
require('dotenv').config()

export const registerUserDetails = async (__email, __password, __cpassword, __username, __userhandler) => {

    if (!__email || !__password || !__cpassword || !__userhandler) {
        throw new Error('Required fields cannot be empty!');
    }

    try {
        const data = await
            API.postRequest(`${process.env.REACT_APP_API_URL}/register`, {
                email: __email,
                password: __password,
                cpassword: __cpassword,
                username: __username,
                userhandler: __userhandler
            });
        console.log(data.msg)
    } catch (error) {
        throw new Error(error.message);
    }
}