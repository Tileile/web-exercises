import { useEffect, useState } from 'react'

export const useFetchJob = (id) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [job, setJob] = useState(null)
    useEffect(() => {
        const fetchJob = async () => {
            try {
                console.log("ID", id)
                const res = await fetch(`/api/jobs/${id}`)
                if (!res.ok) {
                    throw Error("Fetching job failed")
                }
                const data = await res.json()
                setJob(data)
            } catch (err) {
                setError(err.message);
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchJob()
    }, [id])

    return {job, isLoading, error}
}
