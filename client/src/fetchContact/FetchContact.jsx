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

// create a new contact
export const addContact = async (data) => {
    // first step uploading the image
    // second step upload the texts

    // if there is any inage in the useState
    if (data.image) {
        // we make form
        const form = new FormData();
        const imageName = Date.now() + data.image.name;
        // append it to the form
        form.append("name", imageName);
        form.append("file", data.image);
        // update the setState
        data.image = imageName;

        try {
            await axios.post(`${baseURL}/api/upload`, form);
        } catch (error) {
            throw Error(error);
        }
    }

    try {
        const res = await axios.post(`${baseURL}/api/contact/create`, data);
        return res.newContact;
    } catch (error) {
        throw Error(error);
    }
};

//delete contact
export const removeContact = async (id) => {
    try {
        await axios.delete(`${baseURL}/api/contact/delete/${id}`);
    } catch (error) {
        throw Error(error);
    }
};