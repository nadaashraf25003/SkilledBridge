// Style
import "/src/index.css";
import "./api.css";

// React
import { useState } from "react";

const AdminOverlay = ({ onSuccess, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Authentication failed");

      const { access_token } = await res.json();

      const profileRes = await fetch(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (!profileRes.ok) throw new Error("Failed to fetch profile");

      const profile = await profileRes.json();

      // Check if this is the authorized admin
      if (profile.email === "john@mail.com") {
        onSuccess();
      } else {
        throw new Error("Unauthorized user");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="overlay">
        <div className="form-container">
          <h2 className="title">Admin Authentication</h2>
          <form onSubmit={handleLogin} className="form">
            <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /></div>
             <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /></div>
            <div className="d-flex justify-content-between">
            <button className="button" type="submit">Login</button>
            <button className="button" type="submit" onClick={onClose}>
              Cancel
            </button></div>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default AdminOverlay;
