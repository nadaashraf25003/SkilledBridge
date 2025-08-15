// Style
import "/src/index.css";
import "./Profiles.css";

// Assets
import userPhoto from "/src/assets/User.png";

// React
import { Card } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

// Components
import { AuthContext } from "../../Contexts/AuthContext";

function ProfileCard({ profile }) {
  const { userType } = useContext(AuthContext);
  const location = useLocation().pathname === "/SavedUsers" ? true : false;
  // console.log("location", location);
  const navigate = useNavigate();

  const showingUser = () => {
    if (profile.userType === "Freelancer") {
      navigate(
        `/FreelancerProfile/${profile.name ? profile.name : "User Name"}`,
        {
          state: { profile },
        }
      );
      // return <FreelancerProfile/>
    } else {
      // console.log("loggedUseremail", user);
      navigate(`/ClientProfile/${profile.name ? profile.name : "User Name"}`, {
        state: { profile },
      });
      // return <ClientProfile/>
    }
  };
  const deleteUser = async () => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      const email = loggedUser.email;

      // Get the logged-in user from db.json
      const res = await axios.get(
        `http://localhost:3005/RegisteredUsers?email=${email}`
      );

      if (res.data.length === 0) {
        alert("Logged-in user not found");
        return;
      }

      const userData = res.data[0];

      // Filter out the profile to be removed from savedUsers
      const updatedSavedUsers = (userData.savedUsers || []).filter(
        (saved) => saved.id !== profile.id
      );

      // Update in localStorage
      const updatedUserData = { ...userData, savedUsers: updatedSavedUsers };
      localStorage.setItem("loggedUser", JSON.stringify(updatedUserData));

      // Update in db.json
      await axios.put(
        `http://localhost:3005/RegisteredUsers/${userData.id}`,
        updatedUserData
      );

      alert("User removed from saved list");
      window.location.reload();
    } catch (err) {
      console.error("Error deleting saved user:", err);
      alert("Failed to delete saved user");
    }
  };

  return (
    <>
      <Card className="h-100 shadow-sm col-lg-3 m-2 theme-card">
        <Card.Body className="text-center d-flex flex-column">
          <div className="mb-3">
            <div className="mx-auto rounded-circle profile-avatar">
              {profile.logo ? (
                <img
                  src={profile.logo}
                  alt={profile.name}
                  className="img-fluid rounded-circle"
                />
              ) : (
                <img
                  src={userPhoto}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                />
              )}
            </div>
          </div>

          <Card.Title className="profile-name">
            {profile.name ? profile.name : "User Name"}
          </Card.Title>
          <Card.Subtitle className="mb-2 profile-type">
            {profile.userType}
          </Card.Subtitle>

          <div className="my-3 flex-grow-1">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <small className="profile-stats" style={{ color: "#6c757d" }}>
                {profile.jobsPosted || 0} jobs
                {profile.userType === "Freelancer" ? " started" : " posted"}
              </small>
            </div>
            <p className="profile-email">{profile.email}</p>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center mt-auto">
            {profile.userType === "Freelancer" ? (
              <button className="button" onClick={showingUser}>
                View {profile.userType}
              </button>
            ) : (
              <button className="button" onClick={showingUser}>
                View {profile.userType}
              </button>
            )}
            {location ? (
              <button className="remove-btn  mt-3" onClick={deleteUser}>
                Delete User
              </button>
            ) : (
              ""
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProfileCard;
