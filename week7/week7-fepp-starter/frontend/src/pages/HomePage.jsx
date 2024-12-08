import JobListings from "../components/JobListings";
import { useState, useEffect } from 'react'

import { useFetchAllJobs } from "../hooks/useFetchAllJobs";
const Home = () => {
  const {jobs, isLoading, error} = useFetchAllJobs()

  return (
    <div className="home">
      {isLoading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
          jobs.length ? <JobListings jobs={jobs} /> : <div>No jobs found</div>}
    </div>
  );
};

export default Home;
