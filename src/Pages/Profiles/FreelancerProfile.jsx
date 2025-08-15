// Style
import "/src/index.css";
import "./Profiles.css";

// Assets
import userPhoto from "/src/assets/User.png";

// React
import { useLocation } from "react-router-dom";
import axios from "axios";

// Components
import Navbar from "../../Components/Navbar";

function FreelancerProfile() {
  const FreelancerEmail =
    JSON.parse(localStorage.getItem("loggedUser") || "null")?.email ||
    "https://www.google.com";
  const location = useLocation();
  // location.state?user => come from userSetting && UsersAPI
  // location.state?profile => come from profilecard
  const Freelancer_of_the_Day =
    location.pathname === "/FreelancerProfile/SarahJohnson" ? true : false;
  const userprofile = location.state?.user || location.state?.profile;
  // const userprofile = location.state?.user || {};
  const {
    Img,
    name,
    Title,
    Location,
    AboutMe,
    Skills, // array
    MyPortfolio, // object {title:"", time:"", details:""}
    Languages,
    MemberSince,
    Links,
    HourlyRate,
    Availability,
    ProfessionalOverview,
    WorkProcess,
    WorkExperience,
    Reviews,
  } = userprofile || {};
  const addToSaved = async () => {
    try {
      const email = JSON.parse(localStorage.getItem("loggedUser")).email;
      const res = await axios.get(
        `http://localhost:3005/RegisteredUsers?email=${email}`
      );

      if (res.data.length === 0) {
        alert("User not found");
        return;
      }

      const userId = res.data[0].id;
      const existingSaved = res.data[0].savedUsers || [];

      // Check if already saved (by id or email)
      const alreadySaved = existingSaved.some(
        (saved) => saved.id === userprofile.id // or saved.email === userprofile.email
      );

      if (alreadySaved) {
        alert("This user is already in your saved list");
        return;
      }

      // Add new user to savedUsers
      const updatedSavedUsers = [...existingSaved, userprofile];

      // Update localStorage
      localStorage.setItem(
        "loggedUser",
        JSON.stringify({ ...res.data[0], savedUsers: updatedSavedUsers })
      );

      // Update db.json
      await axios.put(`http://localhost:3005/RegisteredUsers/${userId}`, {
        ...res.data[0],
        savedUsers: updatedSavedUsers,
      });

      alert("User Saved");
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  return (
    <>
      <Navbar />
      {Freelancer_of_the_Day ? (
        <div className="profile-container mt-5">
          {/* Profile Header */}
          <div className="profile-header d-flex flex-column align-items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="profile-avatar"
            />
            <h1>Sarah Johnson</h1>
            <h3>Senior Web Developer</h3>
            <div className="profile-location">
              <i className="fas fa-map-marker-alt" />{" "}
              {Location ? Location : "Freelancer Location"}
            </div>
            <div className="profile-actions">
              <button className="button">
                <a
                  href={`mailto:${FreelancerEmail}`}
                  style={{ color: "white" }}
                >
                  {" "}
                  <i className="fas fa-envelope" /> Contact
                </a>
              </button>
              <button className="button ms-2" onClick={addToSaved}>
                Save
              </button>
            </div>
          </div>
          {/* Profile Content */}
          <div className="profile-content">
            {/* About Section */}
            <div className="profile-section">
              <h2>About Me</h2>
              <p>
                I am a passionate web developer with over 8 years of experience
                building scalable, high-performance web applications. I
                specialize in JavaScript frameworks like React and Node.js, and
                I love creating intuitive, user-friendly designs.
              </p>
            </div>
            {/* Skills Section */}
            <div className="profile-section">
              <h2>Skills</h2>
              <div className="skills">
                <span className="skill-badge">React</span>
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">MongoDB</span>
                <span className="skill-badge">TypeScript</span>
                <span className="skill-badge">GraphQL</span>
              </div>
            </div>
            {/* Experience Section */}
            <div className="profile-section">
              <h2>Experience</h2>
              <div className="experience-item">
                <h3>Senior Web Developer - TechSolutions Inc.</h3>
                <p className="company">2019 - Present</p>
                <p>
                  Led a team of 5 developers in creating custom SaaS products
                  for enterprise clients. Optimized application performance,
                  reducing load times by 40%.
                </p>
              </div>
              <div className="experience-item">
                <h3>Full-Stack Developer - CreativeApps</h3>
                <p className="company">2015 - 2019</p>
                <p>
                  Built responsive web apps using MERN stack. Collaborated with
                  design teams to create seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="profile-container mt-5">
          {/* Profile Header */}
          <div className="profile-header d-flex flex-column align-items-center">
            <img
              src={Img ? Img : userPhoto}
              alt="Profile"
              className="profile-avatar"
            />
            <h1>{name ? name : "User Name"}</h1>
            {/* <h1>{Name ? Name : userprofile.name}</h1> */}
            <h3>{Title ? Title : "Freelancer Title"}</h3>
            <div className="profile-location">
              <i className="fas fa-map-marker-alt" />{" "}
              {Location ? Location : "Freelancer Location"}
            </div>
            <div className="profile-actions">
              <button className="button">
                <a
                  href={`mailto:${FreelancerEmail}`}
                  style={{ color: "white" }}
                >
                  {" "}
                  <i className="fas fa-envelope" /> Contact
                </a>
              </button>
              <button className="button ms-2" onClick={addToSaved}>
                Save
              </button>
            </div>
          </div>
          {/* Profile Content */}
          <div className="profile-content">
            {/* About Section */}
            <div className="profile-section">
              <h2>About Me</h2>
              <p>{AboutMe ? AboutMe : "About Freelancer "}</p>
            </div>
            {/* Skills Section */}
            <div className="profile-section">
              <h2>Skills</h2>
              <div className="skills">
                {Skills
                  ? Skills.map((skill) => (
                      <span className="skill-badge">{skill}</span>
                    ))
                  : "No Skills Added "}
              </div>
            </div>
            {/* Experience Section */}
            <div className="profile-section">
              <h2>Experience</h2>
              {MyPortfolio
                ? MyPortfolio.map((item) => (
                    <div className="experience-item">
                      <h3>{item.title}</h3>
                      <p className="company">{item.time}</p>
                      <p>{item.details}</p>
                    </div>
                  ))
                : "No Experience Added"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default FreelancerProfile;
