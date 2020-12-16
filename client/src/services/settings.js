import API from '../API/API';
require('dotenv').confg()

export const getSettings = async(__handler) => {

    if ( !__handler ) {
        throw new Error('Handler cannot be empty!');
    }

    try {
        const data = await API.getRequest(`${process.env.REACT_APP_API_URL}/settings?Handle=${__handler}`)
    } catch (error) {
        throw new Error(error.message);
    }
}