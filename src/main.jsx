// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// React
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Navigate } from "react-router-dom";

// Components
import App from "./App.jsx";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import AddJob from "./Pages/Jobs/AddJob.jsx";
import JobDetails from "./Pages/Jobs/JobDetails.jsx";
import AllJobs from "./Pages/Jobs/AllJobs.jsx";
import ClientProfile from "./Pages/Profiles/ClientProfile.jsx";
import SavedUsers from "./Pages/Profiles/SavedUsers.jsx";
import Profiles from "./Pages/Profiles/Profiles.jsx";
import FreelancerProfile from "./Pages/Profiles/FreelancerProfile.jsx";
import ThemeProvider from "./Contexts/ThemeContext.jsx";
import NotFound from "./Pages/NotFound.jsx";
import AuthProvider from "./Contexts/AuthContext.jsx";
import EditProfile from "./Pages/Profiles/EditProfile.jsx";
import UserManagement from "./Pages/Profiles/UserManagement .jsx";
import TermsOfService from "./Pages/TermsOfService.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "Register",
        Component: Register,
      },
      {
        path: "Login",
        Component: Login,
      },
      {
        path: "Users",
        Component: Profiles,
      },
      {
        path: "EditProfile",
        Component: EditProfile,
      },
      {
        path: "AddJob",
        Component: AddJob,
      },
      {
        path: "JobDetails/:JobID",
        Component: JobDetails,
      },
      {
        path: "AllJobs",
        Component: AllJobs,
      },
      {
        path: "SavedUsers",
        Component: SavedUsers,
      },
      {
        path: "ClientProfile/:ClientName",
        Component: ClientProfile,
      },
      {
        path: "FreelancerProfile/:FreelancerName",
        Component: FreelancerProfile,
      },
      {
        path: "NotFound",
        Component: NotFound,
      },
      {
        path: "userManagement",
        Component: UserManagement,
      },
      {
        path: "TermsOfService",
        Component: TermsOfService,
      },
      {
        path: "PrivacyPolicy",
        Component: PrivacyPolicy,
      },
      {
        path: "*",
        Component: () => <Navigate to="/NotFound" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  // </StrictMode>
);


