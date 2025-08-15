// Style
import "/src/index.css";
import "./Pages.css";

// React
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";

// Components
import { AuthContext } from "../Contexts/AuthContext";
import { ThemeContext } from "../Contexts/ThemeContext";
import Navbar from "./../Components/Navbar";
import Footer from "../Components/Footer";

function Login() {
  const { log } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const checkUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userEmail = formData.get("userEmail");
    const userPassword = formData.get("userPassword");
    try {
      const res = await axios.get(
        `http://localhost:3005/RegisteredUsers?email=${userEmail}`
      );
      if (res.data.length > 0 && res.data[0].password === userPassword) {
        localStorage.setItem("loggedUser", JSON.stringify(res.data[0]));
        console.log("Login");
        alert("Login successful! Welcome to our website");
        setLoginError(""); // Clear previous errors
        e.target.reset();
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
        log(true);
        // window.location.reload(); // Reload the page to update the UI
      } else {
        setLoginError("Invalid email or password. Please try again.");
        e.target.reset();
      }
    } catch (err) {
      console.error("Error checking email:", err);
      return false;
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container mt-5" data-bs-theme={theme}>
        <div className="auth-card">
          <div className="auth-header">
            <h2>
              <i className="fas fa-sign-in-alt me-2" /> Welcome Back
            </h2>
            <p className="mb-0" style={{ color: "white" }}>
              Sign in to access your account
            </p>
          </div>
          <div className="auth-body">
            <form id="loginForm" onSubmit={checkUser}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">
                  Email Address
                </label>
                <input
                  name="userEmail"
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3 position-relative">
                <label htmlFor="loginPassword" className="form-label">
                  Password
                </label>
                <input
                  name="userPassword"
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Error message */}
              {loginError && (
                <div className="alert alert-danger mt-2">{loginError}</div>
              )}

              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <div className="forgot-password">
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="button w-100 py-2 mb-3">
                <i className="fas fa-sign-in-alt me-2" /> Sign In
              </button>

              <div className="divider">
                <span className="divider-text">OR</span>
              </div>

              <Link to="/Login" className="social-btn">
                <i className="fab fa-google text-danger" /> Continue with Google
              </Link>
              <Link to="/Login" className="social-btn">
                <i className="fab fa-linkedin text-primary" /> Continue with
                LinkedIn
              </Link>
              <Link to="/Login" className="social-btn">
                <i className="fab fa-github" /> Continue with GitHub
              </Link>
            </form>
          </div>
          <div className="auth-footer">
            <p className="mb-0">
              Don't have an account? <Link to="/Register">Register now</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
