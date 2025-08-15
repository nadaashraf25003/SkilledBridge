// Components
import Navbar from "./../../Components/Navbar";
import Footer from "./../../Components/Footer";
import JobAPI from "./../../APIs/JobAPI";

function AllJobs() {
  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ marginTop: "7rem", marginBottom: "2rem" }}
      >
        <h2 className="section-title">
          Featured <span className="text-gradient">Jobs</span>
        </h2>
        <JobAPI />
      </div>
      <Footer />
    </>
  );
}

export default AllJobs;
