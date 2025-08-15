// Style
import "/src/index.css";
import "./api.css";
import "/src/Pages/Profiles/Profiles.css";

// Assets
import userPhoto from "/src/assets/User.png";

// React
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import capitalize from "@mui/utils/capitalize";

function UsersAPI() {
  const [UsersProfiles, setUsersProfiles] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Add userType to each user
        const updatedData = data.map((user) => ({
          ...user,
          userType: "Freelancer",
        }));
        setUsersProfiles(updatedData);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const navigate = useNavigate();
  // Came with data with these keys
  // if Freelancer
  // Img,
  // Name,
  // Title,
  // Location,
  // AboutMe,
  // Skills, // array
  // MyPortfolio, // object {title:"", time:"", details:""}
  // if client
  // Img,
  // Name,
  // Location,
  // Title,
  // AboutCompany,
  // employees,
  // founded,
  // website,
  // Glance, // object {rating:"", Jobs:"",Hired:""}
  // console.log("Form users api", UsersProfiles);
  return (
    <>
      {UsersProfiles.map((user) => (
        <Card className="h-100 shadow-sm col-lg-3 m-2 theme-card">
          <Card.Body className="text-center d-flex flex-column">
            <div className="mb-3">
              <div className="mx-auto rounded-circle profile-avatar">
                {user.logo ? (
                  <img
                    src={user.logo}
                    alt={user.username}
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
              {capitalize(user.name.firstname)} {capitalize(user.name.lastname)}
            </Card.Title>
            <Card.Subtitle className="mb-2 profile-type">
              {user.username}
            </Card.Subtitle>

            <div className="my-3 flex-grow-1">
              <div className="d-flex align-items-center justify-content-center mb-2">
                <small className="profile-stats" style={{ color: "#6c757d" }}>
                  {user.address.city}
                </small>
              </div>
              <p className="profile-email">{user.email}</p>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-auto">
              {/* <Link to={`/FreelancerProfile/${user.username}`}> */}
              <button
                className="button"
                onClick={() => {
                  user.usertype === ""
                    ? navigate(
                        `/FreelancerProfile/${
                          user.username ? user.username : "User Name"
                        }`,
                        {
                          state: { user },
                        }
                      )
                    : navigate(
                        `/ClientProfile/${
                          user.username ? user.username : "User Name"
                        }`,
                        {
                          state: { user },
                        }
                      );
                }}
              >
                View User
              </button>
              {/* </Link> */}
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default UsersAPI;
