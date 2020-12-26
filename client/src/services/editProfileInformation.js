import API from '../API/API';

export const postEditProfileComponent = async (__editInfoComponentForm) => {
    try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/externalLinks`, __editInfoComponentForm);
    } catch (error) {
        throw new Error(`Unable to send information to the backend, due to error, ${error.message}`)
    }
}