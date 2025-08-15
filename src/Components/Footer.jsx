// Style
import "/src/index.css";
import "./Components.css";

// React
import { Link } from "react-router";

function Footer() {
  return (
    <>
      {/* Footer  */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="footer-brand">
                <span className="logo-icon">
                  <i className="fas fa-handshake" />
                </span>
                <span className="logo-text">SkilledBridge</span>
              </div>
              <p className="footer-about mt-3">
                SkillBridge connects businesses with top freelance talent
                worldwide. Our platform makes it easy to find, hire, and
                collaborate with skilled professionals.
              </p>
              <div className="social-links mt-4">
                <a
                  href="https://www.facebook.com/share/1Ld443mBgg/"
                  className="social-link"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nada-ashraf-386223287"
                  className="social-link"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="https://www.instagram.com/nada_ashraf252003?igsh=OTV1a2o1N25wYzd3"
                  className="social-link"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="https://www.youtube.com/@nadaashraf1217"
                  className="social-link"
                >
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="footer-heading">For Clients</h5>
              <ul className="footer-links">
                <li>
                  <Link to="/">How to Hire</Link>
                </li>
                <li>
                  <Link to="/Users">Talent Marketplace</Link>
                </li>
                <li>
                  <Link to="/AllJobs">Project Catalog</Link>
                </li>
                <li>
                  <Link to="/">Hire an Agency</Link>
                </li>
                <li>
                  <Link to="/">Enterprise Solutions</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="footer-heading">For Freelancers</h5>
              <ul className="footer-links">
                <li>
                  <Link to="/AllJobs">How to Find Work</Link>
                </li>
                <li>
                  <Link to="/">Membership Plans</Link>
                </li>
                <li>
                  <Link to="/">Learning Resources</Link>
                </li>
                <li>
                  <Link to="/Users">Community</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="footer-heading">Company</h5>
              <ul className="footer-links">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/Users">Careers</Link>
                </li>
                <li>
                  <Link to="/">Press</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="footer-heading">Resources</h5>
              <ul className="footer-links">
                <li>
                  <Link to="/TermsOfService">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/PrivacyPolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Payments</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-6">
                <p className="copyright-text">
                  © 2025 SkillBridge. All rights reserved.
                </p>
              </div>
              <div className="col-md-6">
                <div className="footer-payments">
                  <span>We accept:</span>
                  <i className="fab fa-cc-visa" />
                  <i className="fab fa-cc-mastercard" />
                  <i className="fab fa-cc-paypal" />
                  <i className="fab fa-cc-stripe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
