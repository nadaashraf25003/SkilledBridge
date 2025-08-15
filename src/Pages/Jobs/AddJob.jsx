// Style
import "/src/index.css";
import "./Job.css";

// React
import { Link, useNavigate } from "react-router";

// Components
import Navbar from "./../../Components/Navbar";
import Footer from "../../Components/Footer";

function AddJob() {
  const navigate = useNavigate();
  const onPost = (e) => {
    const jobId = `job-${Date.now().toString(36)}`;
    e.preventDefault();
    const formData = new FormData(e.target);
    const PostData = {
      id: `job-${Date.now().toString(36)}`,
      publication_date: `${Date.now().toString(36)}`,
      title: formData.get("JobTitle"),
      description: formData.get("JobDescription"),
      category: formData.get("JobCategory"),
      tags: formData
        .get("RequiredSkills")
        ?.split(",")
        .map((tag) => tag.trim()),
      // slug: formData.get("ExpectedDuration"),
      // budgetType: formData.get("BudgetType"),
      // budgetAmount: formData.get("BudgetAmount"),
      // applicationDeadline: formData.get("ApplicationDeadline"),
      attachments: formData.get("Attachments"),
      jobVisibility: formData.get("JobVisibility"),
      company_name: formData.get("company_name"),
      company_logo: formData.get("company_logo"),
      candidate_required_location: formData.get("candidate_required_location"),
      job_type: formData.get("job_type"),
      salary: `${formData.get("salary")}$`,
      // publication_date: `${new Date().toISOString().slice(0, 19)}`,
      url: formData.get("url"),
    };

    localStorage.setItem(jobId, JSON.stringify(PostData));
    alert("Job Posted Successfully");
    e.target.reset();
    setTimeout(() => navigate("/"), 1000);
  };
  return (
    <>
      <Navbar />
      {/* Post Job Form Section */}
      <section
        className="job-form-section container"
        style={{ marginBottom: "2rem", marginTop: "5rem" }}
      >
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card form-card">
                <div
                  className="card-header form-header p-3"
                  style={{
                    background: "rgba(108, 99, 255, 0.95)",
                    textAlign: "center",
                  }}
                >
                  <h2 style={{ color: "white" }}>
                    <i className="fas fa-briefcase me-2" /> Post a New Job
                  </h2>
                  <p className="mb-0" style={{ color: "white" }}>
                    Fill out the form below to post your job and find the
                    perfect freelancer
                  </p>
                </div>
                <div className="card-body p-4">
                  <form id="jobPostingForm" onSubmit={onPost}>
                    {/* Basic Job Information */}
                    <div className="mb-4">
                      <h5 className="mb-3 text-gradient">Basic Information</h5>
                      <div className="mb-3">
                        <label htmlFor="jobTitle" className="form-label">
                          Job Title*
                        </label>
                        <input
                          name="JobTitle"
                          type="text"
                          className="form-control"
                          id="jobTitle"
                          placeholder="e.g. Need a React developer"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="jobDescription" className="form-label">
                          Job Description*
                        </label>
                        <textarea
                          name="JobDescription"
                          className="form-control"
                          id="jobDescription"
                          rows={5}
                          placeholder="Describe the job in detail..."
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="jobCategory" className="form-label">
                            Category*
                          </label>
                          <select
                            name="JobCategory"
                            className="form-select"
                            id="jobCategory"
                            required
                          >
                            <option value="" disabled selected>
                              Select a category
                            </option>
                            <option value="web-development">
                              Web Development
                            </option>
                            <option value="mobile-development">
                              Mobile Development
                            </option>
                            <option value="design-creative">
                              Design & Creative
                            </option>
                            <option value="writing-translation">
                              Writing & Translation
                            </option>
                            <option value="digital-marketing">
                              Digital Marketing
                            </option>
                            <option value="video-animation">
                              Video & Animation
                            </option>
                            <option value="music-audio">Music & Audio</option>
                            <option value="business">Business</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="jobSkills" className="form-label">
                            Required Skills*
                          </label>
                          <input
                            name="RequiredSkills"
                            type="text"
                            className="form-control"
                            id="jobSkills"
                            placeholder="e.g. React, Node.js"
                            required
                          />
                          <div
                            className="form-text"
                            style={{ color: "#4cc9f0" }}
                          >
                            Separate skills with commas
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    {/* <div className="mb-4">
                      <h5 className="mb-3 text-gradient">Budget & Timeline</h5>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Budget Type*</label>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="BudgetType"
                              id="fixedBudget"
                              value="fixed"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="fixedBudget"
                            >
                              Fixed Price
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="BudgetType"
                              id="hourlyBudget"
                              value="hourly"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hourlyBudget"
                            >
                              Hourly Rate
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="budgetAmount" className="form-label">
                            Budget Amount*
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                              name="BudgetAmount"
                              type="number"
                              className="form-control"
                              id="budgetAmount"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label
                            htmlFor="projectDuration"
                            className="form-label"
                          >
                            Expected Duration*
                          </label>
                          <select
                            name="ExpectedDuration"
                            className="form-select"
                            id="projectDuration"
                            required
                          >
                            <option value="" disabled selected>
                              Select duration
                            </option>
                            <option value="less-than-1week">
                              Less than 1 week
                            </option>
                            <option value="1-to-2weeks">1 to 2 weeks</option>
                            <option value="1-to-3months">1 to 3 months</option>
                            <option value="3-to-6months">3 to 6 months</option>
                            <option value="more-than-6months">
                              More than 6 months
                            </option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="jobDeadline" className="form-label">
                            Application Deadline
                          </label>
                          <input
                            name="ApplicationDeadline"
                            type="date"
                            className="form-control"
                            id="jobDeadline"
                          />
                        </div>
                      </div>
                    </div> */}

                    {/* Company Info */}
                    <div className="mb-4">
                      <h5 className="mb-3 text-gradient">
                        Company Information
                      </h5>
                      <div className="mb-3">
                        <label htmlFor="companyName" className="form-label">
                          Company Name
                        </label>
                        <input
                          name="company_name"
                          type="text"
                          className="form-control"
                          id="companyName"
                          placeholder="e.g. Tech Innovators Ltd."
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="companyLogo" className="form-label">
                          Company Logo URL
                        </label>
                        <input
                          name="company_logo"
                          type="url"
                          className="form-control"
                          id="companyLogo"
                          placeholder="https://example.com/logo.png"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="candidateLocation"
                          className="form-label"
                        >
                          Candidate Required Location
                        </label>
                        <input
                          name="candidate_required_location"
                          type="text"
                          className="form-control"
                          id="candidateLocation"
                          placeholder="e.g. Remote or Egypt only"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="jobType" className="form-label">
                          Job Type
                        </label>
                        <select
                          name="job_type"
                          className="form-select"
                          id="jobType"
                        >
                          <option value="" selected disabled>
                            Select job type
                          </option>
                          <option value="full-time">Full-Time</option>
                          <option value="part-time">Part-Time</option>
                          <option value="contract">Contract</option>
                          <option value="freelance">Freelance</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="salary" className="form-label">
                          Salary (if any)
                        </label>
                        <input
                          name="salary"
                          type="text"
                          className="form-control"
                          id="salary"
                          placeholder="e.g. $3000/month"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="jobURL" className="form-label">
                          Reference or Apply URL
                        </label>
                        <input
                          name="url"
                          type="url"
                          className="form-control"
                          id="jobURL"
                          placeholder="https://..."
                        />
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mb-4">
                      <h5 className="mb-3 text-gradient">
                        Additional Information
                      </h5>
                      {/* <div className="mb-3">
                        <label htmlFor="jobAttachments" className="form-label">
                          Attachments
                        </label>
                        <input
                          name="Attachments"
                          className="form-control"
                          type="file"
                          id="jobAttachments"
                          multiple
                        />
                        <div className="form-text">
                          Upload files (max 5MB each)
                        </div>
                      </div> */}
                      <div className="mb-3">
                        <label htmlFor="jobVisibility" className="form-label">
                          Job Visibility
                        </label>
                        <select
                          name="JobVisibility"
                          className="form-select"
                          id="jobVisibility"
                        >
                          <option value="public" selected>
                            Public (Visible to all freelancers)
                          </option>
                          <option value="private">Private (Invite-only)</option>
                        </select>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Link to="/">
                        <button type="submit" className="button">
                          Cancel
                        </button>
                      </Link>
                      <button type="submit" className="button">
                        <i className="fas fa-paper-plane me-2" /> Post Job
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AddJob;
