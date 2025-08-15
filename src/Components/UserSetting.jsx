// Style
import "/src/index.css";
import "./Components.css";

// Assets
import userPhoto from "/src/assets/User.png";

// React
import { Link } from "react-router";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

// Components
import { AuthContext } from "../Contexts/AuthContext";

function UserSetting() {
  const { log, userType } = useContext(AuthContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser || !loggedUser.email) return;

    const emailKey = loggedUser.email;
    // Get user by email
    const fetchProfiles = async () => {
      const res = await axios.get(
        `http://localhost:3005/RegisteredUsers?email=${emailKey}`
      );
      if (res.data.length === 0) {
        alert("User not found");
        return;
      } else {
        setUser(res.data[0]); // set the user state to the user data
      }
    };
    fetchProfiles();
  }, []);

  const LogOut = () => {
    localStorage.removeItem("loggedUser");
    log(false);
  };

  // To send data to Job Details
  const navigate = useNavigate();
  const showingProfile = () => {
    if (userType === "Freelancer") {
      navigate(`/FreelancerProfile/${user.name ? user.name : "User Name"}`, {
        state: { user },
      });
      // return <FreelancerProfile/>
    } else {
      console.log("loggedUseremail", user);
      navigate(`/ClientProfile/${user.name ? user.name : "User Name"}`, {
        state: { user },
      });
      // return <ClientProfile/>
    }
  };
  //  console.log("loggedUseremail", user);

  return (
    <>
      <div className="user-dropdown-container">
        <DropdownButton
          id="dropdown-basic-button"
          title={
            <div className="user-avatar-img">
              <img
                src={user.Img ? user.Img : userPhoto}
                alt="User profile"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzkgMiAyIDYuNDc5IDIgMTJzNC40NzkgMTAgMTAgMTAgMTAtNC40NzkgMTAtMTBTMTcuNTIxIDIgMTIgMnptMCAzYzEuODc3IDAgMy40MTcgMS4yNzkgMy44MTEgM0g4LjE4OUM4LjU4MyA2LjI3OSAxMC4xMjMgNSAxMiA1em0wLTRhMTEgMTEgMCAxMDExIDExQTExIDExIDAgMDAxMiAxeiIvPjwvc3ZnPg==";
                }}
              />
            </div>
          }
          className="circle-dropdown"
          align="end"
        >
          <Dropdown.Header className="dropdown-header">
            <div className="user-info">
              <div className="user-avatar">
                {
                  <div className="user-avatar-img">
                    <img
                      src={user.Img ? user.Img : userPhoto}
                      alt="User profile"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzkgMiAyIDYuNDc5IDIgMTJzNC40NzkgMTAgMTAgMTAgMTAtNC40NzkgMTAtMTBTMTcuNTIxIDIgMTIgMnptMCAzYzEuODc3IDAgMy40MTcgMS4yNzkgMy44MTEgM0g4LjE4OUM4LjU4MyA2LjI3OSAxMC4xMjMgNSAxMiA1em0wLTRhMTEgMTEgMCAxMDExIDExQTExIDExIDAgMDAxMiAxeiIvPjwvc3ZnPg==";
                      }}
                    />
                  </div>
                }
              </div>
              <div>
                <div className="user-name">
                  {user.name ? user.name : "User Name"}
                </div>
                <div className="user-name">
                  {user.userType}
                </div>
                <div className="user-email">
                  {user.email ? user.email : "john@example.com"}
                </div>
              </div>
            </div>
          </Dropdown.Header>
          <Dropdown.Divider />
          {/* {userType === "Client" ? ( */}

          <Dropdown.Item onClick={showingProfile}>Profile</Dropdown.Item>

          <Dropdown.Item as={Link} to="/EditProfile">
            Edit Profile
          </Dropdown.Item>

          {userType === "Client" ? (
            <Dropdown.Item as={Link} to="/AddJob">
              Add Jobs
            </Dropdown.Item>
          ) : (
            <Dropdown.Item as={Link} to="/AllJobs">
              Apply Job
            </Dropdown.Item>
          )}
         
            <Dropdown.Item as={Link} to="/SavedUsers">
              Saved Users
            </Dropdown.Item>


          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/" onClick={LogOut}>
            Log out
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default UserSetting;
