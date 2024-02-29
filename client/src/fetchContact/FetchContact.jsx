import axios from "axios";

// base url
const baseURL = import.meta.env.VITE_BASEURL;

// get all data from the api
export const getAllData = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/contact`);
        return res.data.allContacts;
    } catch (error) {
        console.log(error);
    }
};
