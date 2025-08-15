// Style
import "/src/index.css";
import "./Pages.css";

// React
import { Link } from "react-router-dom";
import { useContext } from "react";

// Components
import Jobs from "../Components/Jobs";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Contexts/AuthContext";

function Home() {
  const { isAuth, userType } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      {/* Hero Section  */}
      <section className="hero-section" id="home">
        <div className="hero-overlay" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title animate__animated animate__fadeInDown">
                Build Your Dreams With{" "}
                <span className="text-gradient">Top Talent</span>
              </h1>
              <p className="hero-subtitle animate__animated animate__fadeInDown animate__delay-1s">
                The most trusted platform to find skilled freelancers or
                showcase your expertise to global clients.
              </p>
              <div className="hero-buttons animate__animated animate__fadeInUp animate__delay-2s">
                {userType === "Client" ? (
                  <Link to="/Users">
                    <button className="btn btn-primary btn-lg btn-glow me-3">
                      <i className="fas fa-search me-2" /> Find Talent
                    </button>
                  </Link>
                ) : !isAuth ? (
                  <Link to="/Register">
                    <button className="btn btn-primary btn-lg btn-glow me-3">
                      <i className="fas fa-search me-2" /> Find Talent
                    </button>
                  </Link>
                ) : (
                  ""
                )}

                {userType === "Freelancer" ? (
                  <Link to="/AllJobs">
                    <button className="btn btn-outline-light btn-lg btn-glow">
                      <i className="fas fa-user-tie me-2" /> Start Freelancing
                    </button>
                  </Link>
                ) : !isAuth ? (
                  <Link to="/Register">
                    <button className="btn btn-outline-light btn-lg btn-glow">
                      <i className="fas fa-user-tie me-2" /> Start Freelancing
                    </button>
                  </Link>
                ) : (
                  ""
                )}
              </div>
              <div className="hero-stats animate__animated animate__fadeIn animate__delay-3s">
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Freelancers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30K+</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">$10M+</div>
                  <div className="stat-label">Earned</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container animate__animated animate__fadeInRight animate__delay-1s">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  // alt="Freelancers working together"
                  className="hero-image"
                />
                <div className="floating-badge designers">
                  <i className="fas fa-paint-brush" />
                  <span>Designers</span>
                </div>
                <div className="floating-badge developers">
                  <i className="fas fa-code" />
                  <span>Developers</span>
                </div>
                <div className="floating-badge marketers">
                  <i className="fas fa-bullhorn" />
                  <span>Marketers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="currentColor"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="currentColor"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      <Jobs />
      {/* How It Works Section  */}
      <section className="how-it-works py-5" id="how-it-works">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h6 className="section-subtitle">OUR PROCESS</h6>
            <h2 className="section-title">
              How <span className="text-gradient">SkillBridge</span> Works
            </h2>
            <p className="section-description">
              Simple steps to get your project started with top freelance talent
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-container left">
              <div className="timeline-content">
                <div className="step-number">1</div>
                <h4>Post a Project</h4>
                <p>
                  Describe your project requirements and set your budget. Our
                  system will match you with suitable freelancers.
                </p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="timeline-content">
                <div className="step-number">2</div>
                <h4>Review Proposals</h4>
                <p>
                  Receive competitive bids from qualified freelancers. Compare
                  profiles, portfolios, and reviews.
                </p>
              </div>
            </div>
            <div className="timeline-container left">
              <div className="timeline-content">
                <div className="step-number">3</div>
                <h4>Hire the Best</h4>
                <p>
                  Select the perfect freelancer for your job and start
                  collaborating through our secure platform.
                </p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="timeline-content">
                <div className="step-number">4</div>
                <h4>Pay Securely</h4>
                <p>
                  Release payments only when you're satisfied with the work. Our
                  protection system ensures fair transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section   */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="cta-box">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="cta-title">Ready to Get Started?</h2>
                <p className="cta-text">
                  Join thousands of businesses and freelancers who are already
                  collaborating on SkillBridge
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                {userType === "Client" ? (
                  <Link to="/Users">
                    <button className="btn btn-light btn-lg me-3 mt-2">
                      Hire Talent
                    </button>
                  </Link>
                ) : !isAuth ? (
                  <Link to="/Register">
                    <button className="btn btn-light btn-lg me-3 mt-2">
                      Hire Talent
                    </button>
                  </Link>
                ) : (
                  ""
                )}

                {userType === "Freelancer" ? (
                  <Link to="/AllJobs">
                    <button className="btn btn-light btn-lg mt-2">
                      Start Freelancing
                    </button>
                  </Link>
                ) : !isAuth ? (
                  <Link to="/Register">
                    <button className="btn btn-light btn-lg mt-2">
                      Start Freelancing
                    </button>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
