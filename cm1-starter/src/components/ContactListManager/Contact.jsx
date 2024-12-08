import React from 'react';

const Contact = ({ contact, index, deleteContact }) => {
    return (
        <li className="mb-2 flex justify-between items-center">
            <span className="font-semibold">{contact.name}</span> ({contact.phone}, {contact.email})
            <button
                className="bg-red-400 text-white p-1 rounded ml-auto hover:bg-red-500 transition duration-200"
                onClick={() => deleteContact(index)}
            >
                Delete
            </button>
        </li>
    );
};

export default Contact;