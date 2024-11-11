import { useState } from "react";

// src/ContactUs.jsx
function ContactUs() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneType, setPhoneType] = useState('')
  const [comments, setComments] = useState('')
  const updateName = (e) => {
    setName(() => e.target.value);
  }
  const updateEmail = (e) => {
    setEmail(() => e.target.value)
  }

  const updatePhone = (e) => {
    setPhone(() => e.target.value)
  }

  const onSubmit = e => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();
    // Create a new object for the contact information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };
    // Reset the form state.
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');

    console.log(contactUsInformation)
  };


  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' value={name} onChange={updateName} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' value={email} onChange={updateEmail} />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='text' value={phone} onChange={updatePhone} />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>

        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;