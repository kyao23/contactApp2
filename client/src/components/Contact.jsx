import React from "react";
import {FaTrashAlt} from "react-icons/fa";
//import {FaEdit} from "react-icons/fa";
import {useMutation, useQueryClient} from "react-query";
import {removeContact} from "../fetchContact/FetchContact";

const Contact = ({contact}) => {
    const {fullName, email, phoneNumber, image, birth, _id} = contact;

    const folder = import.meta.env.VITE_IMAGE_URL;

    // remove contact
    const queryClient = useQueryClient();
    const {mutate, isLoading, isError} = useMutation(
        ["contact", _id], 
        removeContact, 
        {
            onSucess : () => queryClient.invalidateQueries("contact"),
        }
    );
    
    return (
        <div className="w-[17rem] shawdow-md shadow-gray-400 overflow-hidden rounded-lg">
            <img className="w-full h-[12rem] object-cover" src={folder + image} alt="contactImg" />

            <div className="p-3 text-sm flex flex-col gap-1">
                <p>Full Name: {fullName}</p>
                <p>Email: {email}</p>
                <p>Phone: {phoneNumber}</p>
                <p>Date of Birth: {birth}</p>
                    </div>

                    <div className="p-3 flex items-center justify-end gap-2">
                        <button 
                            onClick={() => mutate(_id)}
                            className="text-red-700 hover:opacity-75">
                            <FaTrashAlt/>
                        </button>
                        {/* <button className="text-xl text-blue-600 hover:opacity-75">
                            <FaEdit/>
                        </button> */}
                    </div>
    </div>
    );
};

export default Contact;