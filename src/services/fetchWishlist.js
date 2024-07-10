import axios from "axios";
import { GET_WISHLIST } from "./constants/constants.js";

const fetchWishlist = async (membershipId) => {
    const userRootUrl = import.meta.env.VITE_APP_USER_ROOT_URL_2;
    const getWishlist = GET_WISHLIST;

    try {
        const response = await axios.get(`${userRootUrl}/${getWishlist}/${membershipId}`);
        console.log(response);
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            throw new Error(error.response.data.message || 'Error getting the library cards');
        } else if (error.request) {
            console.error('Error request:', error.request);
            throw new Error('No response received while getting the library cards');
        } else {
            console.error('Error message:', error.message);
            throw new Error(error.message || 'Error getting the library cards');
        }
    }
}

fetchWishlist('m_01010')

export default fetchWishlist;