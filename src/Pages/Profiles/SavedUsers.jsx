// Style
import "/src/index.css";
import "./Profiles.css";

// React
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./../../Components/Navbar";
import Footer from "./../../Components/Footer";
import ProfileCard from "./ProfileCard";
function SavedUsers() {
  const [savedusers, setsavedusers] = useState([]);
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const emailKey = loggedUser.email;
    // Get user by email
    const fetchProfile = async () => {
      const res = await axios.get(
        `http://localhost:3005/RegisteredUsers?email=${emailKey}`
      );
      if (res.data.length === 0) {
        alert("User not found");
        return;
      } else {
        setsavedusers(res.data[0].savedUsers); // return the array of objects of the users
      }
    };
    fetchProfile();
  }, []);
  console.log("saved users", savedusers);
  const savedFreelancers = savedusers?savedusers.filter(
    (user) => user.userType === "Freelancer"
  ):"";
  const savedClient = savedusers?savedusers.filter((user) => user.userType === "Client"):"";
  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ marginTop: "6rem", marginBottom: "5rem" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Saved Clients</h2>
        </div>
        {savedClient.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-center">
            {savedClient.map((profile) => (
              <ProfileCard profile={profile} />
            ))}
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            No Saved Clients Found
          </p>
        )}
      </div>
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <h2 className="section-title">Saved Freelancers</h2>
        <div className="d-flex flex-wrap justify-content-center ">
          {savedFreelancers.length > 0 ? (
            <div className="d-flex flex-wrap justify-content-center">
              {savedFreelancers.map((profile) => (
                <ProfileCard profile={profile} />
              ))}
            </div>
          ) : (
            <p
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              No Saved Freelancers Found
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SavedUsers;
