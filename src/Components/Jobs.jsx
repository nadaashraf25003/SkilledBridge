// Style
import "/src/index.css";
import "./Components.css";

// React
import { Link } from "react-router";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import JobAPI from "../APIs/JobAPI";
import { AuthContext } from "../Contexts/AuthContext";

function Jobs() {
  const navigate = useNavigate();
  const { isAuth, userType } = useContext(AuthContext);
  return (
    <>
      <section className="featured-jobs-section py-5 bg-light mt-5" id="browse">
        <div className="container">
          <div className="section-header d-flex justify-content-between align-items-center mb-5">
            <div>
              <h6 className="section-subtitle">LATEST OPPORTUNITIES</h6>
              <h2 className="section-title">
                Featured <span className="text-gradient">Jobs</span>
              </h2>
            </div>
            <Link to="/AllJobs" className="button button2">
              <i class="fa-solid fa-angles-right"></i>
            </Link>
          </div>
          <div className="row">
            <div className="col-lg-8">
              {/* Job cards will be dynamically loaded here */}
              <JobAPI />
            </div>
            <div className="col-lg-4">
              {userType === "Client" || !isAuth ? (
                <div className="side-card mb-4">
                  <div className="card-header">
                    <h5>
                      <i className="fas fa-briefcase me-2" /> Post a Job
                    </h5>
                  </div>
                  <div className="card-body">
                    <p>
                      Need work done? Post your job and get competitive bids
                      from freelancers within minutes.
                    </p>
                    {isAuth ? (
                      <Link to="/AddJob">
                        <button className="button w-100">
                          <i className="fas fa-plus-circle me-2" /> Post a Job
                        </button>
                      </Link>
                    ) : (
                      <Link to="/Register">
                        <button className="button w-100">
                          <i className="fas fa-plus-circle me-2" /> Post a Job
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="side-card">
                <div className="card-header">
                  <h5>
                    <i className="fas fa-star me-2" /> Freelancer of the Day
                  </h5>
                </div>
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="rounded-circle mb-3 freelancer-avatar"
                    alt="Freelancer"
                  />
                  <h5>Sarah Johnson</h5>
                  <p className="text-muted">Senior Web Developer</p>
                  <div className="rating mb-3">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="ms-1">4.7</span>
                  </div>
                  <div className="skills mb-3">
                    <span className="skill-badge">React</span>
                    <span className="skill-badge">Node.js</span>
                    <span className="skill-badge">MongoDB</span>
                  </div>
                  {isAuth ? (
                    // <Link to="/FreelancerProfile/SarahJohnson">
                      <button className="button w-100" onClick={()=>navigate("/FreelancerProfile/SarahJohnson")}>
                        <i className="fas fa-eye me-2" /> View Profile
                      </button>
                    // </Link>
                  ) : (
                    
                    <Link to="/Register">
                      <button className="button w-100" >
                        <i className="fas fa-eye me-2" /> View Profile
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jobs;
