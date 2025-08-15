// Style
import "/src/index.css";
import "./Pages.css";

// React
import { useState, useEffect } from "react";
import { object, string, ref, boolean } from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [hints, setHints] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    termsCheck: false,
  });

  const userSchema = object({
    name: string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .matches(
        /^[A-Za-z\s]+$/,
        "Name should not contain numbers or special characters"
      ),
    email: string()
      .required("Email is required")
      .email("Enter a valid email")
      .matches(".@"),
    password: string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(18, "Password must be at most 18 characters"),
    confirmPassword: string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Passwords must match"),
    userType: string().required("Please select account type"),
    termsCheck: boolean().oneOf([true], "You must accept the terms"),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    const validateField = async (fieldName, value) => {
      try {
        await userSchema.validateAt(fieldName, { [fieldName]: value });
        setHints((prev) => ({ ...prev, [fieldName]: "" }));
      } catch (err) {
        if (err.path === fieldName) {
          setHints((prev) => ({ ...prev, [fieldName]: err.message }));
        }
      }
    };
    if (formData.name) validateField("name", formData.name);
    if (formData.email) validateField("email", formData.email);
    if (formData.password) validateField("password", formData.password);

    if (formData.confirmPassword) {
      try {
        userSchema.validateSyncAt("confirmPassword", {
          confirmPassword: formData.confirmPassword,
          password: formData.password,
        });
        setHints((prev) => ({ ...prev, confirmPassword: "" }));
      } catch (err) {
        setHints((prev) => ({ ...prev, confirmPassword: err.message }));
      }
    }
  }, [formData]);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await userSchema.validate(formData, { abortEarly: false });
    setErrors({});

    // Check if email already exists
    const res = await axios.get(`http://localhost:3005/RegisteredUsers?email=${formData.email}`);
    if (res.data.length > 0) {
      alert("This email already exists");
      setErrors({ email: "This email already exists" });
      return; // stop execution
    }

    //  Generate userID and post to db.json
    const userID = `User${Date.now()}`;
    await axios.post(`http://localhost:3005/RegisteredUsers`, {
      id: userID,
      ...formData
    });

    alert("Registration successful! Redirecting to login...");
    setTimeout(() => navigate("/Login"), 2000);
    
  } catch (err) {
    const newErrors = {};
    err.inner?.forEach((e) => {
      newErrors[e.path] = e.message;
    });
    setErrors(newErrors);
  }
};


  return (
    <>
      <Navbar />
      <div className="auth-container mt-5">
        <div className="auth-card">
          <div className="auth-header">
            <h2>
              <i className="fas fa-user-plus me-2" /> Create Account
            </h2>
            <p className="mb-0" style={{ color: "white" }}>
              Join our platform to find your dream job
            </p>
          </div>
          <div className="auth-body">
            <form id="registerForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
                {hints.name && !errors.name && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {hints.name}
                  </div>
                )}
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="userEmail"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {hints.email && !errors.email && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {hints.email}
                  </div>
                )}
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                />
                {hints.password && !errors.password && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {hints.password}
                  </div>
                )}
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {hints.confirmPassword && !errors.confirmPassword && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {hints.confirmPassword}
                  </div>
                )}
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="userType" className="form-label">
                  I am a...
                </label>
                <select
                  name="userType"
                  className={`form-select ${
                    errors.userType ? "is-invalid" : ""
                  }`}
                  id="userType"
                  value={formData.userType}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select account type
                  </option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Client">Client</option>
                </select>
                {errors.userType && (
                  <div className="invalid-feedback">{errors.userType}</div>
                )}
              </div>
              <div className="form-check mb-4">
                <input
                  name="termsCheck"
                  className={`form-check-input ${
                    errors.termsCheck ? "is-invalid" : ""
                  }`}
                  type="checkbox"
                  id="termsCheck"
                  checked={formData.termsCheck}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  I agree to the <a href="#">Terms of Service</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
                {errors.termsCheck && (
                  <div className="invalid-feedback">{errors.termsCheck}</div>
                )}
              </div>
              <button type="submit" className="button w-100 py-2 mb-3">
                <i className="fas fa-user-plus me-2" /> Register
              </button>
              <div className="divider">
                <span className="divider-text">OR</span>
              </div>
              <Link to="/Register" className="social-btn">
                <i className="fab fa-google text-danger" /> Continue with Google
              </Link>
              <Link to="/Register" className="social-btn">
                <i className="fab fa-linkedin text-primary" /> Continue with
                LinkedIn
              </Link>
              <Link to="/Register" className="social-btn">
                <i className="fab fa-github" /> Continue with GitHub
              </Link>
            </form>
          </div>
          <div className="auth-footer">
            <p className="mb-0">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;

