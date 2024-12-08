import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { createJob } from '../api/jobs';
const AddJobPage = () => {
  const [title, setTitle] = useState("")
  const [type, setType] = useState("Full-Time")
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    const newJob = {
      title,
      type,
      description,
      company: {
        name,
        contactEmail,
        contactPhone
      }
    }
    console.log("submitForm called");
    const createdJob = await createJob(newJob)
    if (createdJob) {
      navigate('/')
    }
    else
      console.error("Failed to create job")
  };

  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form onSubmit={submitForm}>
        <label>Job title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Job type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>

        <label>Job Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Company Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Contact Email:</label>
        <input
          type="text"
          required
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
        <label>Contact Phone:</label>
        <input
          type="text"
          required
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />
        <button>Add Job</button>
      </form>
    </div>
  );
};

export default AddJobPage;
