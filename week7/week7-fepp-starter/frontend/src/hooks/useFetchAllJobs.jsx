import {useState, useEffect} from 'react'
export const useFetchAllJobs = () => {
    
  const [jobs, setJobs] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('api/jobs/')
        if (!res.ok) {
          throw Error("Fetching jobs failed")
        }
        const data = await res.json()
        setJobs(data)
      } catch (err) {
        setError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchJobs()
  }, [])

    return {jobs, isLoading, error}
}