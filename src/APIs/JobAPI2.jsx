// Style
import "/src/index.css";
import "./api.css";

// React
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import JobCard from "./../Pages/Jobs/JobCard";

function JobAPI() {
  const [jobsAPI, setJobs] = useState([]);
  const [jobsAdded, setjobsAdded] = useState([]);
  useEffect(() => {
    axios
      .get("https://remotive.com/api/remote-jobs")
      // .get("https://www.arbeitnow.com/api/job-board-api?visa_sponsorship=true")
      .then((response) => {
        setJobs(response.data.jobs);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("j")) {
        let value;
        try {
          value = JSON.parse(localStorage.getItem(key));
        } catch (err) {
          // Skip values that are not valid JSON
          continue;
        }
        setjobsAdded((prevJobs) => [...prevJobs, value]);
      }
    }
  }, []);

  // To controll the number of jobs that appear in home page
  const limitedJobs = location.pathname === "/" ? jobsAPI.slice(0, 4) : jobsAPI;
  const limitedAddedJobs =
    location.pathname === "/" ? jobsAdded.slice(0, 1) : jobsAdded;

  return (
    <>
      {jobsAPI.length > 0 ? (
        <div className="job-list">
          {limitedAddedJobs.map((job) => {
            return <JobCard job={job} />;
          })}
          {limitedJobs
            .filter((job) => job.id !== 1000) // Exclude job with id 1000
            .slice(0, 100) // Limit to first 100 jobs
            .map((job) => (
              <JobCard key={job.id} job={job} />
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
          No Jobs Found
        </p>
      )}
    </>
  );
}
// company_name: "Kaufland e-commerce" ==
// ​​
// created_at: 1753810144 ==
// ​​
// description == : `<h2>Anstellungsdetails</h2>\n<p>Permanent Contract, Full- or Part-Time, Remote or Cologne / Darmstadt / Düsseldorf / Berlin  </p>\n<h2>Info</h2>\n<h2>Who we are</h2>\n<p>We operate the international <a href="https://www.kaufland.de/?utm_source=Stellenausschreibung&#x26;utm_medium=landing+page&#x26;utm_campaign=Kaufland&#x26;utm_id=120525">online marketplaces</a> of Kaufland: Several thousand sellers and millions of products make us one of the fastest growing online marketplaces. Ours is a dynamic corporate culture that merges a start-up mentality with the opportunities offered by a large corporation. We combine knowledge and many years of experience in e-commerce with flat hierarchies and a highly motivated team.   </p>\n<p>We love flexibility! You have the freedom to choose whether you want to work remotely (within Germany) or at one of our offices in Cologne, Darmstadt, Düsseldorf, or in our co-working space in Berlin. You decide what works best for you!  </p>\n<p>Day by day, our Tech &#x26; Product Team of about 400 experts pursues the goal of creating the best possible customer shopping experience for our online marketplace. Through innovative technical developments, they not only create an outstanding shopping experience but also lay the foundation for an optimal selling experience for our sellers. Learn more about our division, areas, and cross-functional teams <a href="https://kaufland-ecommerce.com/en/team/tech/?utm_source=Stellenausschreibung&#x26;utm_medium=teampage&#x26;utm_campaign=TeamTech_EN&#x26;utm_id=120525">here</a>!  </p>\n<h2>Aufgaben</h2>\n<h2>Your tasks – this is what awaits you in detail</h2>\n<ul>\n<li>You help our fast-growing mobile app to stay user-centered with meaningful data analysis</li>\n<li>You create analyses that directly impact product decisions</li>\n<li>You support product teams with conceptualizing analytics setups</li>\n<li>You support with A/B test design and analysis and are a key player in promoting a culture of experimentation</li>\n<li>You act as a fully integrated team member inside the product teams</li>\n</ul>\n<h2>Profil</h2>\n<h2>Your profile – this is what we expect from you</h2>\n<ul>\n<li>You have experience in Product Analytics</li>\n<li>You have a thorough understanding of analytics in a mobile app setting, preferably with Adobe Analytics</li>\n<li>You have strong communication skills and are capable of aligning different groups of stakeholders - from peers to non-technical business colleagues</li>\n<li>You have good knowledge of raw data processing (SQL) or Python</li>\n<li>Any knowledge of any other data, analysis or visualization technology is a plus (e.g. Tableau, MicroStrategy)</li>\n<li>You are willing to embrace our company culture and enjoy working in an international, English-speaking team</li>\n</ul>\n<h2>Benefits</h2>\n<h2>What we offer</h2>\n<ul>\n<li><strong>Create your own work-life balance:</strong> You have the flexibility to choose between working remotely (within Germany) or from one of our locations in Cologne, Darmstadt, Düsseldorf, or our co-working space in Berlin!</li>\n<li><strong>Do you want to move to Germany?</strong> No problem – we offer you an attractive relocation package to give you a smooth start.</li>\n<li><strong>Urban Sports Club and RSG Group Fitness Studios:</strong> Get top deals for fitness, swimming, yoga and more</li>\n<li><strong>Mental Well-Being:</strong> We support you on your well-being journey with special offerings such as Instahelp, the digital platform for online psychological counseling</li>\n<li><strong>Vacation &#x26; Sabbatical:</strong> Enjoy 30 days of vacation per year and the opportunity to take a sabbatical once you have been part of the team for a certain period!</li>\n<li><strong>Option for Pluxee restaurant vouchers:</strong> Buy Pluxee vouchers through us and benefit from tax-advantaged meal allowances!</li>\n<li><strong>‘Deutschlandticket’:</strong> We subsidise your train season ticket for more mobility</li>\n<li><strong>Corporate Benefits:</strong> We offer you attractive discounts with top brands</li>\n<li><strong>Free choice of operating system:</strong> MacOS or Ubuntu Linux, it's up to you</li>\n<li><strong>Boost your growth:</strong> Benefit from our online language learning programs, diverse in-house training, and our automated 360-degree feedback. We cover the costs for relevant conferences, training opportunities, and approved team workshops to strengthen personal interactions</li>\n<li><strong>This is who we are:</strong> Our dynamic culture combines flat hierarchies, a start-up mentality, an international team of over 65 nationalities, and the strength of the Schwarz Group to provide you an agile and secure working environment.</li>\n<li><strong>We are team players:</strong> From day one, you will connect not only with your team but also with others through our <a href="https://kaufland-ecommerce.com/en/blog/insights/digital-onboarding-with-our-welcome-day/">digital onboarding journey</a>, the <a href="https://kaufland-ecommerce.com/en/blog/insights/our-buddy-programme-for-a-perfect-onboarding-process/">buddy program</a>, and regular team and company events, all-hands meetings, <a href="https://kaufland-ecommerce.com/en/blog/insights/powerful-mornings/">powerful mornings</a>, and much more!</li>\n</ul>\n<p>Check out our <a href="https://kaufland-ecommerce.com/en/culture/">Principles</a> &#x26; our <a href="https://kaufland-ecommerce.com/en/blog/">blog</a> for even more insights into our company culture!  </p>\n<h2>Diversity at Kaufland e-commerce</h2>\n<p>We welcome applications from everyone, regardless of skin colour, sexual orientation, gender identity, age, disability, ethnic origin, religion and ideology. We are signatories to the Charta der Vielfalt (German Diversity Charter) – because we know that extraordinary things can only be achieved with diversity. Read more <a href="https://kaufland-ecommerce.com/en/diversity/">here</a>!  </p>\n<h2>Bewerben</h2>\n<p><strong>Why are you the perfect fit for this position?</strong><br>\nDon't bother with cover letters - we're interested in facts and figures!  </p>\n<p><strong>How would you like to be addressed?</strong><br>\nFeel free to add the following pronouns "she/her", "him/he" or "they/them" optionally (e.g. after your name) in your CV.  </p>\n<p>As we have very international teams, we would highly appreciate it to receive your CV or profile link in English.</p>\n<h2>Ansprechpartner</h2>\n<p>Your contact person: Kristina Heymann  </p>\n<p>Kaufland e-commerce Services GmbH &#x26; Co. KG<br>\nPostal address:<br>\nHabsburgerring 2<br>\n50674 Köln  </p>\n<p><strong>We are looking forward to your application!</strong></p>\n<p>Find more <a href="https://www.arbeitnow.com/english-speaking-jobs">English Speaking Jobs in Germany</a> on Arbeitnow</a>`
// ​​
// job_types: Array [ "professional / experienced" ]
// ​​
// location: "Cologne"  ==
// ​​
// remote: true
// ​​
// slug: "mobile-app-analyst-all-genders-cologne-285691" ==
// ​​
// tags: Array [ "Remote", "Software Development" ] ==
// ​​
// title: "Mobile App Analyst (all genders)" ==
// ​​
// url ==: "https://www.arbeitnow.com/jobs/companies/kaufland-e-commerce/mobile-app-analyst-all-genders-cologne-285691"
export default JobAPI;

// candidate_required_location: "Canada"
// ​​​
// category: "Sales / Business"
// ​​​
// company_logo: "https://remotive.com/job/2043553/logo"
// ​​​
// company_name: "CAN Canada"
// ​​​
// description: `<i>\n This description is a summary of our understanding of the job description. Click on 'Apply' button to find out more.\n</i>\n<br>\n<br>\n<p class="h2 tw-mt-4 remotive-text-bigger">\n Role Description\n</p>\n<p>\n This dynamic business development position is responsible for growing UPS Small Package business within the small customer segment.\n</p>\n<ul style="">\n<li style="">\n  Prospecting for new customers while working with existing clients to retain and grow revenue within an assigned book of business.\n </li>\n<li style="">\n  Exceptional relationship building and communication skills to effectively assess customer needs and present appropriate solutions.\n </li>\n<li style="">\n  Researching the competitive environment and using product knowledge to generate creative and unique solutions to meet customer needs and business objectives.\n </li>\n<li style="">\n  Flexibility to work in the time zone based on the territory assigned.\n </li>\n<li style="">\n  Successful completion of the UPS Sales Academy, a comprehensive training program delivered via a virtual format.\n </li>\n<li style="">\n  Potential career path to transition into an Account Executive role.\n </li>\n</ul>\n<p class="h2 tw-mt-4 remotive-text-bigger">\n Qualifications\n</p>\n<ul style="">\n<li style="">\n  English and French reading, writing and speaking are required.\n </li>\n<li style="">\n  Prior business development experience, specifically in the B2B segment.\n </li>\n<li style="">\n  Confident with strong communication and presentation skills.\n </li>\n<li style="">\n  Experience using Salesforce and MS Office, preferred.\n </li>\n</ul>\n<p class="h2 tw-mt-4 remotive-text-bigger">\n Requirements\n</p>\n<ul style="">\n<li style="">\n  Full-Time | Temporary (1 year contract with the possibility to transition into a permanent role).\n </li>\n<li style="">\n  Location: Montreal, QC.\n </li>\n<li style="">\n  Modality: Remote.\n </li>\n<li style="">\n  Workdays: Monday to Friday.\n </li>\n<li style="">\n  Work hours: 8:30 - 17:00.\n </li>\n<li style="">\n  Compensation: $19.19/hr.\n </li>\n</ul>\n<p class="h2 tw-mt-4 remotive-text-bigger">\n Benefits\n</p>\n<ul style="">\n<li style="">\n  Competitive compensation package including health and dental coverage.\n </li>\n<li style="">\n  Group insurance plan.\n </li>\n<li style="">\n  Paid vacation.\n </li>\n<li style="">\n  Employee stock purchase plan.\n </li>\n<li style="">\n  Unlimited opportunity to grow within the company.\n </li>\n<li style="">\n  Full training for all positions to ensure safety and compliance to policies and regulations.\n </li>\n<li style="">\n  Generous Benefits Package: extended health, dental, and vision benefits.\n </li>\n<li style="">\n  Promotion From Within: lots of room for advancement in many areas of the business.\n </li>\n<li style="">\n  Employee Discounts on UPS merchandise and other brands.\n </li>\n</ul>\n<img src="https://remotive.com/job/track/2043553/blank.gif?source=public_api" alt=""/>`
// ​​​
// id: 2043553
// ​​​
// job_type: "full_time"
// ​​​
// publication_date: "2025-08-04T12:50:35"
// ​​​
// salary: "$19.19/hr"
// ​​​
// tags: Array(3) [ "salesforce", "business development", "MS Office" ]
// ​​​
// title: "Inside Sales Representative"
// ​​​
// url: "https://remotive.com/remote-jobs/sales-business/inside-sales-representative-2043553"
