import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function SignupPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

  const checkValidity = e => {
    e.preventDefault();


  }

  const handleSubmit = e => {
    e.preventDefault();

    if (emailRegex.test(email) && passwordRegex.test(password)) {
      

      const info = {
        email,
        password,
        nationality
      };

      setEmail("");
      setPassword("");
      setNationality("");
      setEmailMessage("Email accepted");
      setPasswordMessage("Password accepted")

      if (nationality == "FI") {
        console.log("kaikki ok");
        setResultMessage("Moi. \nAccount created. \nYour email address is: " + email + ". Your email address is correct!");
      }

      if (nationality == "EN") {
        console.log("kaikki ok");
        setResultMessage("Hello. \nAccount created. \nYour email address is: " + email + ". Your email address is correct!");
      }

      if (nationality == "DE") {
        console.log("kaikki ok");
        setResultMessage("Hallo. \nAccount created. \nYour email address is: " + email + ". Your email address is correct!");
      }

      if (nationality == "FR") {
        console.log("kaikki ok");
        setResultMessage("Bonjour. \nAccount created. \nYour email address is: " + email + ". Your email address is correct!");
      }

    }
    if (!passwordRegex.test(password)) {
      setPasswordMessage("Password not valid");
      setResultMessage("Account not created, password too weak. Atleast 8 characters, atleast one number");
    }
    if (!emailRegex.test(email)) {
      setEmailMessage("Email not valid");
      setResultMessage("Account not created, email not valid");
    }

    info = null;


  
  
}


  return (
    <div className='rounded-md flex flex-col justify-center align-middle items-center'>
      <h2 className='pl-4 text-2xl'>Sign up</h2>

      <form onSubmit={handleSubmit} className='flex flex-col justify-center'>

        <div className='shadow-md w-full justify-center'>
          <label htmlFor="email"> Email: </label>
          <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          <p>{emailMessage}</p>
        </div>

        <div className='shadow-md'>
          <label htmlFor="password"> Password: </label>
          <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
          <p>{passwordMessage}</p>
        </div>
        

        <div className='shadow-md'>
          <label htmlFor="nationality"> Nationality: </label>
          <select id="nationality"
          onChange={e => setNationality(e.target.value)}
          required
          >
            <option value="">Select your nationality</option>
            <option value="FI">Finland</option>
            <option value="EN">England</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
          </select>
        </div>

        <div className='flex w-full'>
          <button type="submit" className="border border-lg border-black p-2 bg-gray-200 hover:bg-gray-400 rounded-lg"> Submit </button>
          <p className='p-2'>{resultMessage}</p>
        </div>
      
      </form>
    </div>
  )
}

export default SignupPage
