// React
import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

// Components
import Navbar from "./../../Components/Navbar";
import Footer from "./../../Components/Footer";
import { AuthContext } from "../../Contexts/AuthContext";

function JobDetails() {
  const { isAuth } = useContext(AuthContext);
  // To recive data from the Button
  const location = useLocation();
  const job = location.state?.job;
  // const JobDate = location.state?.job.created_at;

  // Get date
  // const date = new Date(JobDate * 1000); // Convert seconds to milliseconds
  // const readableDate = date.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  if (!job) return <p>No job data found.</p>;

  return (
    <>
      <Navbar />
      <div className="container py-5 mt-5">
        {/* Back Button */}
        <div className="mb-4">
          <Link className="back-link" to="/AllJobs">
            <i className="fas fa-arrow-left me-2" />
            Back to all jobs
          </Link>
        </div>
        {/* Job Header */}
        <div className="job-header p-4 mb-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="job-title mb-2">{job.title}</h1>
              <div className="d-flex align-items-center mb-3">
                {/* <span className="company-name me-3">{job.slug}</span> */}
                <span className="location-badge">
                  <i className="fas fa-map-marker-alt me-1" />{" "}
                  {job.candidate_required_location}
                </span>
              </div>
              <div className="job-meta">
                <span className="me-3">
                  <i className="far fa-clock me-1" /> {job.publication_date}
                </span>
                <span>
                  <i className="fas fa-briefcase me-1" /> {job.job_type}
                </span>
              </div>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              {isAuth ? (
                <Link to={job.url ? job.url : "/NotFound"}>
                  <button className="apply-btn button  w-md-auto">
                    <i className="far fa-paper-plane me-2" /> Apply Now
                  </button>
                </Link>
              ) : (
                <Link to="/Login">
                  <button className="apply-btn button  w-md-auto">
                    <i className="far fa-paper-plane me-2" /> Apply Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* Job Content */}
        <div className="job-content p-4 mb-4">
          <div className="job-description">
            <h4 className="section-title mb-4">Job Description</h4>
            <div
              className="job-description"
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></div>
          </div>
        </div>
        {/* Apply Section */}
        <div className="text-center py-4">
          {isAuth ? (
            <Link to={job.url}>
              <button className="button">
                <i className="far fa-paper-plane me-2" /> Apply Now
              </button>
            </Link>
          ) : (
            <Link to="/Register">
              <button className="button">
                <i className="far fa-paper-plane me-2" /> Apply Now
              </button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobDetails;
