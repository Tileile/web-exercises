import React, { useState } from 'react';
import Contact from './Contact';

const ContactListManager = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const addContact = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim() && email.trim()) {
      setContacts([...contacts, { name: name, phone: phone, email: email }]);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert('All fields are required');
    }
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2x1 font-bold mb-4 p-2">Contact List Manager</h1>
      <form className="contact-form mb-4 bg-grey p-2" onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-400 text-white p-2 rounded w-full hover:bg-blue-500 transition duration-200">Add Contact</button>
      </form>
      <div className="contacts-container bg-gray-100 p-2 rounded">
        <h1 className="text-x1 font-bold mb-4">Contacts</h1>
        <ol className="list-decimal pl-5 flex flex-col">
          {contacts.map((contact, index) => (
            <Contact key={index} contact={contact} index={index} deleteContact={deleteContact} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ContactListManager;
