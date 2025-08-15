// Style
import "/src/index.css";
import "./Pages.css";

// React
import { Link } from "react-router";

function NotFound() {
  return (
    <>
      {/* <Navigat to="/NotFound"> */}
      <div className="error-container">
        <div className="error-code">404</div>
        <div className="error-title">Oops! Page Not Found</div>
        <div className="error-message">
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </div>
        <svg
          className="error-image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#3498db"
            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 304c13.25 0 24-10.75 24-24v-128C280 138.8 269.3 128 256 128S232 138.8 232 152v128C232 293.3 242.8 304 256 304zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44C224.6 385.9 238.6 400 256 400s31.44-14.08 31.44-31.44C287.4 351.2 273.4 337.1 256 337.1z"
          />
        </svg>
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-home me-2" />
            Return Home
          </Link>
          <a href="contact.html" className="btn btn-outline-secondary">
            <i className="fas fa-envelope me-2" />
            Contact Support
          </a>
        </div>
      </div>
      {/* </Navigat> */}
    </>
  );
}

export default NotFound;
