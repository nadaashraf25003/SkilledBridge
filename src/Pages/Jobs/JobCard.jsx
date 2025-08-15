// Style
import "/src/index.css";
import "./Job.css";

// React
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function JobCard({ job }) {
  // To send data to Job Details
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate(`/JobDetails/${job.title}`, { state: { job } });
  };

  // Convert to "time ago" format
  dayjs.extend(relativeTime);
  const timeAgo = dayjs(job.publication_date).fromNow();
  
  return (
    <>
      {/* Job cards will be dynamically loaded here */}
      <div className="job-card">
        <div className="job-logo">
          <img src={job.company_logo} alt="" />
        </div>
        <div className="job-details">
          <h3 className="job-title">{job.title}</h3>
          {/* <p className="job-description">
            <div
              className="job-description"
              dangerouslySetInnerHTML={{ __html: job.description.split('. ')[0] }}
            ></div>
           
            </p> */}
          <p className="job-company">{timeAgo}</p>
          <div className="job-tags">
            {job.tags
              ? job.tags.map((tag) => <span class="job-tag">{tag}</span>)
              : ""}
          </div>
          <div className="job-meta d-flex justify-content-between">
            <div>
              <span className="job-type">
                {job.candidate_required_location}
              </span>
              <span className="job-salary" style={{ marginTop: "1rem" }}>
                {job.salary}
              </span>
            </div>
            <button className="button" onClick={handleDetailsClick}>
              Job Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
