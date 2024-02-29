import React from 'react';
import Contact from "./Contact";
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import {getAllData} from "../fetchContact/FetchContact";

const Contacts = () => {
    const data1 = [
        {
            id: 1,
            fullName: "Kathy",
            email: "kathyyaoca@gmail.com",
            phoneNumber: 6472693918,
            image:
                "https://www.toronto.ca/wp-content/uploads/2024/01/8d46-home-skyline-2023-1500x700.jpg",
            birth: "03/23/2005",
        },
        {
            id: 2,
            fullName: "Kathy",
            email: "kathyyaoca@gmail.com",
            phoneNumber: 6472693918,
            image:
                "https://www.toronto.ca/wp-content/uploads/2024/01/8d46-home-skyline-2023-1500x700.jpg",
            birth: "03/23/2005",
        },
        {
            id: 3,
            fullName: "Amy",
            email: "amy@gmail.com",
            phoneNumber: 123456789,
            image:
                "https://www.toronto.ca/wp-content/uploads/2024/01/8d46-home-skyline-2023-1500x700.jpg",
            birth: "03/23/2005",
        },
        {
            id: 4,
            fullName: "Amy",
            email: "amy@gmail.com",
            phoneNumber: 123456789,
            image:
                "https://www.toronto.ca/wp-content/uploads/2024/01/8d46-home-skyline-2023-1500x700.jpg",
            birth: "03/23/2005",
        },
        {
            id: 5,
            fullName: "Amy",
            email: "amy@gmail.com",
            phoneNumber: 123456789,
            image:
                "https://www.toronto.ca/wp-content/uploads/2024/01/8d46-home-skyline-2023-1500x700.jpg",
            birth: "03/23/2005",
        },
    ];

    const {data, isLoading, isError} = useQuery("contact", getAllData);

    console.log(data)

    const navigate = useNavigate();
    return (
        <div className="w-[80%] mx-auto my=[3rem] border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg">
            <h1 className="p-6 text-center flex-1 text-2x1 font-bold text-gray-700">Contact Application</h1>

                <div className ="text-right mr-10">
                    <button 
                    onClick={() => navigate("/add")}
                    className="button text-sm px-4">Add Contact</button>
                </div>

            {/* map through our data */}
            <div className="p-4 lg:p-7 flex items-center flex-wrap gap-5 w-[95%] mx-auto">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Something went wrong!!!</p>}
                {data?.length === 0 ? (
                    <p>No contact exist</p>
                ) : (
                    data?.map((contact, i) => <Contact contact={contact} key ={i} />)
                )}
            </div>
        </div>
    );
};

export default Contacts;