import API from '../API/API';

const logMeOutService = async () => {
    // No arguments needed

    try {
        const status = await API.postRequest(`${REACT_APP_API_URL}/logout`, {})
        console.log(`Logged out user with status, ${status}`)
    } catch (error) {
        console.log(`Logging user out service`)
    }
};

module.exports.logMeOutService = logMeOutService;