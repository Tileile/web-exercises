import { useParams, useNavigate, Link } from "react-router-dom";

import { useFetchJob } from '../hooks/useFetchJob';
import { deleteJob } from '../api/jobs';

function JobPage({ isAuthenticated }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const { job, isLoading, error } = useFetchJob(id)

    const onDeleteClick = async () => {
        const confirm = window.confirm("Confirm delete?")
        if (!confirm) {
            return
        }
        await deleteJob(id)
        if(!error)
            navigate("/")
    }

    return (
        <div className="job-preview">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h2>{job.title}</h2>
                    <p>Type: {job.type}</p>
                    <p>Description: {job.description}</p>
                    <p>Company: {job.company.name}</p>
                    <p>Email: {job.company.contactEmail}</p>
                    <p>Phone: {job.company.contactPhone}</p>
                    {isAuthenticated &&
                        <div>
                            <button onClick={() => onDeleteClick(job._id)}>delete</button>
                            <Link to={`/edit-job/${job.id}`}>Edit Job</Link>
                        </div>}
                </>
            )}
        </div>
    )
}

export default JobPage
