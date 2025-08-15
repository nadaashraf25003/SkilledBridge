// Style
import "/src/index.css";
import "./Components.css";

// React
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import UserSetting from "./UserSetting";

// Components
import { ThemeContext } from "../Contexts/ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top scrolled"
        data-bs-theme={theme}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="logo-icon">
              <i className="fas fa-handshake" />
            </span>
            <span className="logo-text">SkilledBridge</span>
          </a>

          {/* Combined toggle for both navbar and user settings on mobile */}
          <div className="d-flex align-items-center">
            {isAuth && (
              <div className="d-lg-none me-2">
                <UserSetting mobileView={true} />
              </div>
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AllJobs">
                  Browse Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Users">
                  Users
                </Link>
              </li>
            </ul>

            <div className="auth-buttons-container">
              {!isAuth && (
                <>
                  <Link to="/Login">
                    <button className="button me-2" id="loginBtn">
                      Login
                    </button>
                  </Link>
                  <Link to="/Register">
                    <button className="button" id="registerBtn">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* User settings for desktop view */}
            {isAuth && (
              <div className="d-none d-lg-block ms-3">
                <UserSetting mobileView={false} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
