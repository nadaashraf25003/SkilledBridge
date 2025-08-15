// Style
import "/src/index.css";
import "./Profiles.css";

// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

// Components
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function EditProfile() {
  const [email, setEmail] = useState("");
  const [editedProfile, setEditedProfile] = useState({});
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) return;
    setUserType(loggedUser.userType); // Save userType

    const email = loggedUser.email;
    setEmail(email);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      // "email": email,
      // "userType": userType,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get user by email
      const res = await axios.get(
        `http://localhost:3005/RegisteredUsers?email=${email}`
      );
      if (res.data.length === 0) {
        alert("User not found");
        return;
      }
      // Update user
      const userId = res.data[0].id;
      localStorage.setItem(
        "loggedUser",
        JSON.stringify({ ...res.data[0], ...editedProfile })
      );
      // Update user by ID
      await axios.put(`http://localhost:3005/RegisteredUsers/${userId}`, {
        ...res.data[0],
        ...editedProfile,
      });

      alert("Profile updated!");
      e.target.reset();
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  //       Name
  //       title
  //       Location
  //       AboutMe:"",
  //       Languages:"",
  //       MemberSince:"",
  //       Links:"",
  //       Skills:"",
  //       Hourly Rate
  //       Availability
  //       ProfessionalOverview:"",
  //       WorkProcess:"",
  //       MyPortfolio:"",
  //       WorkExperience:"",
  //       Reviews:"",

  //        Name
  //        Location
  //        title
  //        AboutCompany:"",
  //        Company Overview
  //        WhatWeOffer:"",
  //        OpenPositions:"",
  //        reviews
  // Fields based on userType
  const freelancerFields = [
    "Img",
    "name",
    "Title",
    "Location",
    "AboutMe",
    "Skills", // array
    "MyPortfolio", // object {title:"", time:"", details:""}
  ];

  const clientFields = [
    "Img",
    "name",
    "Location",
    "Title",
    "AboutCompany",
    "employees",
    "founded",
    "website",
    "Glance", // object {rating:"", Jobs:"",Hired:""}
  ];

  // Determine which fields to show
  const fieldsToRender =
    userType === "Freelancer" ? freelancerFields : clientFields;

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} style={{ margin: "5rem auto" }}>
        <h2>Edit Your Profile ({userType})</h2>

        {fieldsToRender.map((field) => {
          if (field === "Skills") {
            return (
              <div key={field} style={{ marginBottom: "15px" }}>
                <label>Skills (comma-separated):</label>
                <input
                  type="text"
                  name={field}
                  value={editedProfile[field]?.join(", ") || ""}
                  onChange={(e) =>
                    setEditedProfile((prev) => ({
                      ...prev,
                      [field]: e.target.value.split(",").map((s) => s.trim()),
                    }))
                  }
                  style={{ width: "100%" }}
                />
              </div>
            );
          }

          if (field === "MyPortfolio") {
            const portfolio = editedProfile[field] || [
              { title: "", time: "", details: "" },
              { title: "", time: "", details: "" },
            ];
            return (
              <div key={field} style={{ marginBottom: "15px" }}>
                <label>Portfolio:</label>
                {portfolio.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "10px",
                      border: "1px solid #ccc",
                      marginTop: "10px",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Title"
                      value={item.title}
                      onChange={(e) => {
                        const updated = [...portfolio];
                        updated[i].title = e.target.value;
                        setEditedProfile((prev) => ({
                          ...prev,
                          [field]: updated,
                        }));
                      }}
                      style={{ width: "100%", marginBottom: "5px" }}
                    />
                    <input
                      type="text"
                      placeholder="Time"
                      value={item.time}
                      onChange={(e) => {
                        const updated = [...portfolio];
                        updated[i].time = e.target.value;
                        setEditedProfile((prev) => ({
                          ...prev,
                          [field]: updated,
                        }));
                      }}
                      style={{ width: "100%", marginBottom: "5px" }}
                    />
                    <textarea
                      placeholder="Details"
                      value={item.details}
                      onChange={(e) => {
                        const updated = [...portfolio];
                        updated[i].details = e.target.value;
                        setEditedProfile((prev) => ({
                          ...prev,
                          [field]: updated,
                        }));
                      }}
                      rows="3"
                      style={{ width: "100%" }}
                    />
                  </div>
                ))}
              </div>
            );
          }

          if (field === "Glance") {
            const glance = editedProfile[field] || {
              rating: "",
              Jobs: "",
              Hired: "",
            };
            return (
              <div key={field} style={{ marginBottom: "15px" }}>
                <label>Company Glance:</label>
                <input
                  type="number"
                  placeholder="Rating"
                  value={glance.rating}
                  onChange={(e) =>
                    setEditedProfile((prev) => ({
                      ...prev,
                      [field]: { ...glance, rating: e.target.value },
                    }))
                  }
                  style={{ width: "100%", marginBottom: "5px" }}
                />
                <input
                  type="number"
                  placeholder="Jobs"
                  value={glance.Jobs}
                  onChange={(e) =>
                    setEditedProfile((prev) => ({
                      ...prev,
                      [field]: { ...glance, Jobs: e.target.value },
                    }))
                  }
                  style={{ width: "100%", marginBottom: "5px" }}
                />
                <input
                  type="number"
                  placeholder="Hired"
                  value={glance.Hired}
                  onChange={(e) =>
                    setEditedProfile((prev) => ({
                      ...prev,
                      [field]: { ...glance, Hired: e.target.value },
                    }))
                  }
                  style={{ width: "100%" }}
                />
              </div>
            );
          }

          if (field === "Img") {
            return (
              <div key={field} style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", fontWeight: "bold" }}>
                  Profile Image URL:
                </label>
                <input
                  type="text"
                  name={field}
                  value={editedProfile[field] || ""}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  placeholder="Paste image URL here"
                />
                {/* {editedProfile[field] && (
        <img
          src={editedProfile[field]}
          alt="Preview"
          style={{ marginTop: "10px", width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%", border: "1px solid #ccc" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/src/assets/User.png"; // fallback image
          }}
        />
      )} */}
              </div>
            );
          }

          return (
            <div key={field} style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>
                {field.replace(/([A-Z])/g, " $1")}:
              </label>
              {[
                "AboutMe",
                // "ProfessionalOverview",
                // "WorkExperience",
                // "Reviews",
                // "WhatWeOffer",
                // "CompanyOverview",
                // "WorkProcess",
              ].includes(field) ? (
                <textarea
                  name={field}
                  value={editedProfile[field] || ""}
                  onChange={handleChange}
                  rows="4"
                  style={{ width: "100%" }}
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  value={editedProfile[field] || ""}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              )}
            </div>
          );
        })}

        <button type="submit" className="button">
          Save Changes
        </button>
      </form>
      <Footer />
    </>
  );
}

export default EditProfile;
