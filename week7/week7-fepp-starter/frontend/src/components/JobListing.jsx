import {Link} from "react-router-dom"

const JobListing = ({title, type, description, company, id}) => {
  return (
    <div className="job-preview">
      <h2>{title}</h2>
      <p>Type: {type}</p>
      <p>Description: {description}</p>
      <p>Company: company {company.name}</p>
      <Link to={`/jobs/${id}`}>View Job</Link>
    </div>
  );
};

export default JobListing;
