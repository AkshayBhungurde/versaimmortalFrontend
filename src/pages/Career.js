// // // import { useEffect, useState } from "react";
// // // import { Helmet } from "react-helmet-async";
// // // import { Link } from "react-router-dom";
// // // import api from "../utils/axios";
// // // import "./Career.css";

// // // export default function Career() {
// // //   const [jobs, setJobs] = useState([]);
// // //   const [filteredJobs, setFilteredJobs] = useState([]);
// // //   const [filter, setFilter] = useState("All");
// // //   const [search, setSearch] = useState("");
// // //   const [visibleCount, setVisibleCount] = useState(5);

// // //   useEffect(() => {
// // //     api.get("/jobs")
// // //       .then(res => {
// // //         setJobs(res.data);
// // //         setFilteredJobs(res.data);
// // //       })
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   useEffect(() => {
// // //     let temp = [...jobs];
// // //     if (filter !== "All") {
// // //       temp = temp.filter(j => j.location === filter || j.department === filter);
// // //     }
// // //     if (search.trim()) {
// // //       temp = temp.filter(j => j.title.toLowerCase().includes(search.toLowerCase()));
// // //     }
// // //     setFilteredJobs(temp);
// // //     setVisibleCount(5);
// // //   }, [filter, search, jobs]);

// // //   const uniqueFilters = ["All", ...new Set(jobs.flatMap(j => [j.location, j.department]).filter(Boolean))];

// // //   return (
// // //     <>
// // //       <Helmet>
// // //         <title>Careers | VersaImmortal Pvt. Ltd.</title>
// // //         <meta
// // //           name="description"
// // //           content="Join VersaImmortal Pvt. Ltd.! Explore job openings, filter by location or department, search by role, and apply online."
// // //         />
// // //       </Helmet>

// // //       <div className="career-page container">
// // //         <h1>Careers at VersaImmortal</h1>
// // //         <p>Explore current job openings, filter, search, and apply online.</p>

// // //         <div className="job-search">
// // //           <input
// // //             type="text"
// // //             placeholder="Search jobs by title..."
// // //             value={search}
// // //             onChange={e => setSearch(e.target.value)}
// // //           />
// // //         </div>

// // //         <div className="job-filters">
// // //           {uniqueFilters.map(f => (
// // //             <button
// // //               key={f}
// // //               className={filter === f ? "active" : ""}
// // //               onClick={() => setFilter(f)}
// // //             >
// // //               {f}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {filteredJobs.length === 0 && <p>No jobs match your criteria.</p>}

// // //         <div className="job-list">
// // //           {filteredJobs.slice(0, visibleCount).map(job => (
// // //             <div key={job._id} className="job-card">
// // //               <div className="job-info">
// // //                 <h3>{job.title}</h3>
// // //                 <p>{job.description}</p>
// // //                 <i>{job.location} | {job.department}</i>
// // //               </div>
// // //               <Link to={`/careers/${job.slug}`} className="apply-btn">View / Apply</Link>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {visibleCount < filteredJobs.length && (
// // //           <div className="load-more-container">
// // //             <button className="load-more-btn" onClick={() => setVisibleCount(v => v + 5)}>
// // //               Load More Jobs
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </>
// // //   );
// // // }



// // import { useEffect, useState } from "react";
// // import { Helmet } from "react-helmet-async";
// // import { Link } from "react-router-dom";
// // import api from "../utils/axios";
// // import "./Career.css";

// // export default function Career() {
// //   const [jobs, setJobs] = useState([]);
// //   const [filteredJobs, setFilteredJobs] = useState([]);
// //   const [filter, setFilter] = useState("All");
// //   const [search, setSearch] = useState("");
// //   const [visibleCount, setVisibleCount] = useState(5);

// //   useEffect(() => {
// //     api
// //       .get("/jobs")
// //       .then((res) => {
// //         setJobs(res.data);
// //         setFilteredJobs(res.data);
// //       })
// //       .catch((err) => console.error(err));
// //   }, []);

// //   useEffect(() => {
// //     let temp = [...jobs];
// //     if (filter !== "All") {
// //       temp = temp.filter(
// //         (j) => j.location === filter || j.department === filter
// //       );
// //     }
// //     if (search.trim()) {
// //       temp = temp.filter((j) =>
// //         j.title.toLowerCase().includes(search.toLowerCase())
// //       );
// //     }
// //     setFilteredJobs(temp);
// //     setVisibleCount(5);
// //   }, [filter, search, jobs]);

// //   const uniqueFilters = [
// //     "All",
// //     ...new Set(
// //       jobs.flatMap((j) => [j.location, j.department]).filter(Boolean)
// //     ),
// //   ];

// //   return (
// //     <>
// //       <Helmet>
// //         <title>Careers | VersaImmortal Pvt. Ltd.</title>
// //         <meta
// //           name="description"
// //           content="Join VersaImmortal Pvt. Ltd.! Explore job openings, filter by location or department, search by role, and apply online."
// //         />
// //       </Helmet>

// //       <section className="career-page container">
// //         <header className="career-header">
// //           <h1>Careers at VersaImmortal</h1>
// //           <p>
// //             Explore current job openings, filter, search, and apply online.
// //           </p>
// //         </header>

// //         <div className="job-controls">
// //           <div className="job-search">
// //             <input
// //               type="text"
// //               placeholder="Search jobs by title..."
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //             />
// //           </div>

// //           <div className="job-filters">
// //             {uniqueFilters.map((f) => (
// //               <button
// //                 key={f}
// //                 className={filter === f ? "active" : ""}
// //                 onClick={() => setFilter(f)}
// //               >
// //                 {f}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {filteredJobs.length === 0 && (
// //           <p className="no-jobs-msg">No jobs match your criteria.</p>
// //         )}

// //         <div className="job-list">
// //           {filteredJobs.slice(0, visibleCount).map((job) => (
// //             <div key={job._id} className="job-card">
// //               <div className="job-info">
// //                 <h3>{job.title}</h3>
// //                 <p>{job.description}</p>
// //                 <span className="job-meta">
// //                   {job.location} | {job.department || "General"}
// //                 </span>
// //               </div>
// //               <Link to={`/careers/${job.slug}`} className="apply-btn">
// //                 View / Apply
// //               </Link>
// //             </div>
// //           ))}
// //         </div>

// //         {visibleCount < filteredJobs.length && (
// //           <div className="load-more-container">
// //             <button
// //               className="load-more-btn"
// //               onClick={() => setVisibleCount((v) => v + 5)}
// //             >
// //               Load More Jobs
// //             </button>
// //           </div>
// //         )}
// //       </section>
// //     </>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
// import api from "../utils/axios";
// import "./Career.css";

// export default function Career() {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [workModeFilter, setWorkModeFilter] = useState("All");
//   const [employmentFilter, setEmploymentFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const [visibleCount, setVisibleCount] = useState(5);

//   useEffect(() => {
//     api.get("/jobs")
//       .then(res => {
//         setJobs(res.data);
//         setFilteredJobs(res.data);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   useEffect(() => {
//     let temp = [...jobs];

//     // Filter by location or department
//     if (filter !== "All") {
//       temp = temp.filter(j => j.location === filter || j.department === filter);
//     }

//     // Filter by Employment Type
//     if (employmentFilter !== "All") {
//       temp = temp.filter(j => j.employmentType === employmentFilter);
//     }

//     // Filter by Work Mode
//     if (workModeFilter !== "All") {
//       temp = temp.filter(j => j.workMode === workModeFilter);
//     }

//     // Filter by search
//     if (search.trim()) {
//       temp = temp.filter(j => j.title.toLowerCase().includes(search.toLowerCase()));
//     }

//     setFilteredJobs(temp);
//     setVisibleCount(5);
//   }, [filter, employmentFilter, workModeFilter, search, jobs]);

//   // Unique filters
//   const locationDeptFilters = ["All", ...new Set(jobs.flatMap(j => [j.location, j.department]).filter(Boolean))];
//   const employmentTypes = ["All", "FULL_TIME", "PART_TIME", "CONTRACT", "INTERN"];
//   const workModes = ["All", "ONSITE", "REMOTE", "HYBRID"];

//   return (
//     <>
//       <Helmet>
//         <title>Careers | VersaImmortal Pvt. Ltd.</title>
//         <meta
//           name="description"
//           content="Join VersaImmortal Pvt. Ltd.! Explore job openings, filter by location, department, employment type, work mode, search by role, and apply online."
//         />
//       </Helmet>

//       <div className="career-page container">
//         <h1>Careers at VersaImmortal</h1>
//         <p>Explore current job openings, filter, search, and apply online.</p>

//         {/* Search */}
//         <div className="job-search">
//           <input
//             type="text"
//             placeholder="Search jobs by title..."
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//           />
//         </div>

//         {/* Filters */}
//         <div className="job-filters">
//           <strong>Location / Department:</strong>
//           {locationDeptFilters.map(f => (
//             <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}</button>
//           ))}
//         </div>

//         <div className="job-filters">
//           <strong>Employment Type:</strong>
//           {employmentTypes.map(f => (
//             <button key={f} className={employmentFilter === f ? "active" : ""} onClick={() => setEmploymentFilter(f)}>
//               {f.replace("_", " ")}
//             </button>
//           ))}
//         </div>

//         <div className="job-filters">
//           <strong>Work Mode:</strong>
//           {workModes.map(f => (
//             <button key={f} className={workModeFilter === f ? "active" : ""} onClick={() => setWorkModeFilter(f)}>
//               {f.charAt(0) + f.slice(1).toLowerCase()}
//             </button>
//           ))}
//         </div>

//         {filteredJobs.length === 0 && <p>No jobs match your criteria.</p>}

//         <div className="job-list">
//           {filteredJobs.slice(0, visibleCount).map(job => (
//             <div key={job._id} className="job-card">
//               <div className="job-info">
//                 <h3>{job.title}</h3>
//                 <p>{job.description}</p>
//                 <i>
//                   {job.location} | {job.department} | {job.employmentType.replace("_", " ")} | {job.workMode.charAt(0) + job.workMode.slice(1).toLowerCase()}
//                 </i>
//               </div>
//               <Link to={`/careers/${job.slug}`} className="apply-btn">View / Apply</Link>
//             </div>
//           ))}
//         </div>

//         {visibleCount < filteredJobs.length && (
//           <div className="load-more-container">
//             <button className="load-more-btn" onClick={() => setVisibleCount(v => v + 5)}>
//               Load More Jobs
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }



// Career.jsx
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import api from "../utils/axios";
import "./Career.css";

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  // Fetch jobs from API
  useEffect(() => {
    api.get("/jobs")
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Apply filters and search
  useEffect(() => {
    let temp = [...jobs];

    if (filter !== "All") {
      temp = temp.filter(
        (j) =>
          j.location === filter ||
          j.department === filter ||
          j.employmentType === filter
      );
    }

    if (search.trim()) {
      temp = temp.filter((j) =>
        j.title?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredJobs(temp);
    setVisibleCount(5);
  }, [filter, search, jobs]);

  // Create unique filters for buttons
  const uniqueFilters = [
    "All",
    ...new Set(
      jobs.flatMap((j) => [
        j.location,
        j.department,
        j.employmentType,
      ])
      .filter(Boolean)
    ),
  ];

  // Helper function to safely format text
  const formatText = (text) => (text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "N/A");

  return (
    <>
      <Helmet>
        <title>Careers | VersaImmortal Pvt. Ltd.</title>
        <meta
          name="description"
          content="Join VersaImmortal Pvt. Ltd.! Explore job openings, filter by location, department, or work type, search by role, and apply online."
        />
      </Helmet>

      <div className="career-page container">
        <h1>Careers at VersaImmortal</h1>
        <p>Explore current job openings, filter, search, and apply online.</p>

        {/* Search Bar */}
        <div className="job-search">
          <input
            type="text"
            placeholder="Search jobs by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="job-filters">
          {uniqueFilters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {formatText(f)}
            </button>
          ))}
        </div>

        {filteredJobs.length === 0 && <p>No jobs match your criteria.</p>}

        {/* Job List */}
        <div className="job-list">
          {filteredJobs.slice(0, visibleCount).map((job) => (
            <div key={job._id} className="job-card">
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <i>
                  {formatText(job.location)} |{" "}
                  {formatText(job.department)} |{" "}
                  {job.employmentType
                    ? job.employmentType.replace("_", " ")
                    : "N/A"} |{" "}
                  {formatText(job.workMode)}
                </i>
              </div>
              <Link to={`/careers/${job.slug}`} className="apply-btn">
                View / Apply
              </Link>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredJobs.length && (
          <div className="load-more-container">
            <button
              className="load-more-btn"
              onClick={() => setVisibleCount((v) => v + 5)}
            >
              Load More Jobs
            </button>
          </div>
        )}
      </div>
    </>
  );
}
