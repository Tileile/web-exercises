import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useFetchJob } from '../hooks/useFetchJob'
import { updateJob } from '../api/jobs'

function EditJobPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { job, isLoading, error } = useFetchJob(id)
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactPhone, setContactPhone] = useState("")

    useEffect(() => {
        if (job) {
            setTitle(job.title)
            setType(job.type)
            setDescription(job.description)
            setName(job.company.name);
            setContactEmail(job.company.contactEmail);
            setContactPhone(job.company.contactPhone);
        }
    }, [job])

    const onSubmitJob = async (e) => {
        e.preventDefault()
        const updatedJob = {
            title,
            type,
            description,
            company: {
                name,
                contactEmail,
                contactPhone
            }
        }
        const updated = await updateJob(id, updatedJob)
        if (updated)
            navigate("/")
        else {
            console.error("Fill in all the fields")
        }
    }

    return (<div className='create'>

        {isLoading ? (<p>Loading</p>) :
            error ? (<p></p>) :
                title ? <>
                    <h2>Update Job</h2>
                    <form onSubmit={onSubmitJob}>
                        <label>Title</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Set Type </label>
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Remote">Remote</option>
                            <option value="Intership">Intership</option>
                        </select>
                        <label>Set description</label>
                        <textarea
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label>Set Company Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Set Contact Email</label>
                        <input
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                        />
                        <label>Set Contact Phone</label>
                        <input
                            type="text"
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                        />
                        <button>Save Job</button>
                    </form>
                </>
                    : <p>No jobs found.</p>}
    </div>
    )
}

export default EditJobPage
