import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {addContact} from "../../fetchContact/FetchContact";

const AddContact = () => {
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        image: "",
        birth: "",
    });

    // add new contact
    const queryClient = useQueryClient();
    const {mutate, isLoading, isError} = useMutation(addContact, {
        onSuccess: () => queryClient.invalidateQueries("contact"),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(contact);
        navigate("/");
    };

    return (
        <section>
            <button 
                onClick={() => navigate(-1)}
                className="absolute top-[2rem] left-[4rem] button px-5 text-sm">
                Go Back
            </button>

            <div className="flex items-center justify-center h-screen">
                <form
                    onSubmit={handleSubmit}
                    className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:m-0">
                    <h1 className="text-center text-xl font-medium">Add Contact</h1>
                    <input
                        value={contact.fullName} 
                        onChange={(e) => 
                            setContact({...contact, fullName: e.target.value})
                        }
                        className="input" 
                        type="text"
                        placeholder="Full Name..." 
                    />
                    <input 
                        value={contact.email} 
                        onChange={(e) => 
                            setContact({...contact, email: e.target.value})}
                        className="input"
                        type="email"
                        placeholder="Email..." 
                    />
                    <input 
                        value={contact.phoneNumber} 
                        onChange={(e) => 
                            setContact({...contact, phoneNumber: e.target.value})
                        }
                        className="input"
                        type="text" 
                        placeholder="Phone Number..." 
                    />
                    <input
                        value={contact.birth} 
                        onChange={(e) => 
                            setContact({...contact, birth: e.target.value})
                        }
                        className="input" 
                        type="Date" />
                    <input
                        onChange={(e) => 
                            setContact({...contact, image: e.target.files[0] })
                        }
                        type="file" />

                    <button className="button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddContact;
