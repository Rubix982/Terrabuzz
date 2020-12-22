import API from '../API/API';

export const logMeOutService = async () => {
    try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/logout`)
    } catch (error) {
        throw new Error(`Unable to log user out, with error "${error.message}"`)
    }
};
