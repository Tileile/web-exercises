
import { useState, useEffect } from "react";
import JobListing from "./JobListing";


const JobListings = ({jobs}) => {

  return (
    <div className="job-list">
      {jobs.map((job) => {
        return <JobListing key={job.id} {...job} />
      })
      }
    </div>
  );
};

export default JobListings;
