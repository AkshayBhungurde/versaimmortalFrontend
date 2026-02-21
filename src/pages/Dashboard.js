// // // // import { useEffect, useState } from "react";
// // // // import api from "../utils/axios";
// // // // import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";
// // // // import "./Dashboard.css";

// // // // export default function Dashboard() {
// // // //   const [tab, setTab] = useState("jobs"); // 'jobs', 'applications', 'messages'
// // // //   const [jobs, setJobs] = useState([]);
// // // //   const [applications, setApplications] = useState([]);
// // // //   const [messages, setMessages] = useState([]);

// // // //   // Added employmentType and workMode to the form state
// // // //   const [jobForm, setJobForm] = useState({ title: "", description: "", location: "", employmentType: "", workMode: "" });
// // // //   const [editingJobId, setEditingJobId] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// // // //   const authHeaders = { headers: { Authorization: localStorage.getItem("token") } };

// // // //   const logout = () => {
// // // //     localStorage.removeItem("token");
// // // //     localStorage.removeItem("refresh");
// // // //     window.location.href = "/admin";
// // // //   };

// // // //   // ---------------- FETCH DATA ----------------
// // // //   useEffect(() => {
// // // //     fetchData();
// // // //   }, []);

// // // //   const fetchData = () => {
// // // //     api.get("/admin/jobs", authHeaders)
// // // //       .then(res => setJobs(res.data))
// // // //       .catch(() => toast.error("Failed to fetch jobs"));

// // // //     api.get("/admin/job-applications", authHeaders)
// // // //       .then(res => setApplications(res.data))
// // // //       .catch(() => toast.error("Failed to fetch applications"));

// // // //     api.get("/admin/messages", authHeaders)
// // // //       .then(res => setMessages(res.data))
// // // //       .catch(() => toast.error("Failed to fetch messages"));
// // // //   };

// // // //   // ---------------- JOB FORM ----------------
// // // //   const handleJobSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     const { title, description, location, employmentType, workMode } = jobForm;
// // // //     if (!title || !description || !location || !employmentType || !workMode)
// // // //       return toast.error("All fields are required");
// // // //     setLoading(true);

// // // //     const apiCall = editingJobId
// // // //       ? api.put(`/admin/jobs/${editingJobId}`, jobForm, authHeaders)
// // // //       : api.post(`/admin/jobs`, jobForm, authHeaders);

// // // //     apiCall
// // // //       .then(res => {
// // // //         if (editingJobId) {
// // // //           setJobs(jobs.map(j => (j._id === editingJobId ? res.data : j)));
// // // //           toast.success("Job updated successfully");
// // // //         } else {
// // // //           setJobs([res.data, ...jobs]);
// // // //           toast.success("Job posted successfully");
// // // //         }
// // // //         resetJobForm();
// // // //       })
// // // //       .catch(() => toast.error("Failed to save job"))
// // // //       .finally(() => setLoading(false));
// // // //   };

// // // //   const resetJobForm = () => {
// // // //     setJobForm({ title: "", description: "", location: "", employmentType: "", workMode: "" });
// // // //     setEditingJobId(null);
// // // //   };

// // // //   const handleEditJob = (job) => {
// // // //     setJobForm({ 
// // // //       title: job.title, 
// // // //       description: job.description, 
// // // //       location: job.location, 
// // // //       employmentType: job.employmentType || "", 
// // // //       workMode: job.workMode || "" 
// // // //     });
// // // //     setEditingJobId(job._id);
// // // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // // //   };

// // // //   const handleDeleteJob = (id) => {
// // // //     if (!window.confirm("Are you sure you want to delete this job?")) return;
// // // //     api.delete(`/admin/jobs/${id}`, authHeaders)
// // // //       .then(() => {
// // // //         setJobs(jobs.filter(j => j._id !== id));
// // // //         toast.success("Job deleted");
// // // //       })
// // // //       .catch(() => toast.error("Failed to delete job"));
// // // //   };

// // // //   // ---------------- APPLICATIONS ----------------
// // // //   const handleApplicationAction = (id, action) => {
// // // //     api.put(`/admin/job-applications/${id}/${action}`, {}, authHeaders)
// // // //       .then(res => {
// // // //         setApplications(applications.map(a => (a._id === id ? res.data : a)));
// // // //         toast.success(`Application ${action}d`);
// // // //       })
// // // //       .catch(() => toast.error(`Failed to ${action} application`));
// // // //   };

// // // //   const handleDeleteApplication = (id) => {
// // // //     if (!window.confirm("Delete this application?")) return;
// // // //     api.delete(`/admin/job-applications/${id}`, authHeaders)
// // // //       .then(() => setApplications(applications.filter(a => a._id !== id)))
// // // //       .catch(() => toast.error("Failed to delete application"));
// // // //   };

// // // //   return (
// // // //     <div className="dashboard container">
// // // //       <ToastContainer position="top-right" autoClose={2000} />
// // // //       <div className="dashboard-header">
// // // //         <h2>Admin Dashboard</h2>
// // // //       </div>

// // // //       {/* Tabs */}
// // // //       <div className="tabs">
// // // //         <button className={tab === "jobs" ? "active" : ""} onClick={() => setTab("jobs")}>Jobs</button>
// // // //         <button className={tab === "applications" ? "active" : ""} onClick={() => setTab("applications")}>Applications</button>
// // // //         <button className={tab === "messages" ? "active" : ""} onClick={() => setTab("messages")}>Messages</button>
// // // //       </div>

// // // //       {/* ---------------- JOBS TAB ---------------- */}
// // // //       {tab === "jobs" && (
// // // //         <div className="tab-content">
// // // //           <div className="card job-form">
// // // //             <h3>{editingJobId ? "Edit Job" : "Post a New Job"}</h3>
// // // //             <form onSubmit={handleJobSubmit}>
// // // //               <input type="text" placeholder="Job Title" value={jobForm.title} onChange={e => setJobForm({...jobForm, title:e.target.value})} />
// // // //               <textarea placeholder="Job Description" value={jobForm.description} onChange={e => setJobForm({...jobForm, description:e.target.value})} />
// // // //               <input type="text" placeholder="Location" value={jobForm.location} onChange={e => setJobForm({...jobForm, location:e.target.value})} />

// // // //               {/* Employment Type */}
// // // //               <select value={jobForm.employmentType} onChange={e => setJobForm({...jobForm, employmentType:e.target.value})} required>
// // // //                 <option value="">Select Employment Type</option>
// // // //                 <option value="FULL_TIME">Full-time</option>
// // // //                 <option value="PART_TIME">Part-time</option>
// // // //                 <option value="CONTRACT">Contract</option>
// // // //                 <option value="INTERN">Internship</option>
// // // //               </select>

// // // //               {/* Work Mode */}
// // // //               <select value={jobForm.workMode} onChange={e => setJobForm({...jobForm, workMode:e.target.value})} required>
// // // //                 <option value="">Select Work Mode</option>
// // // //                 <option value="ONSITE">Onsite</option>
// // // //                 <option value="REMOTE">Remote</option>
// // // //                 <option value="HYBRID">Hybrid</option>
// // // //               </select>

// // // //               <button type="submit" disabled={loading}>{loading ? "Saving..." : editingJobId ? "Update Job" : "Post Job"}</button>
// // // //               {editingJobId && <button type="button" onClick={resetJobForm}>Cancel</button>}
// // // //             </form>
// // // //           </div>

// // // //           <table className="data-table">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Title</th>
// // // //                 <th>Description</th>
// // // //                 <th>Location</th>
// // // //                 <th>Employment Type</th>
// // // //                 <th>Work Mode</th>
// // // //                 <th>Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {jobs.map(j => (
// // // //                 <tr key={j._id}>
// // // //                   <td>{j.title}</td>
// // // //                   <td>{j.description}</td>
// // // //                   <td>{j.location}</td>
// // // //                   <td>{j.employmentType.replace("_", " ")}</td>
// // // //                   <td>{j.workMode}</td>
// // // //                   <td className="actions">
// // // //                     <FaEdit onClick={() => handleEditJob(j)} />
// // // //                     <FaTrash onClick={() => handleDeleteJob(j._id)} />
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}

// // // //       {/* ---------------- APPLICATIONS TAB ---------------- */}
// // // //       {tab === "applications" && (
// // // //         <div className="tab-content">
// // // //           <table className="data-table">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Job</th>
// // // //                 <th>Name</th>
// // // //                 <th>Email</th>
// // // //                 <th>Resume</th>
// // // //                 <th>Status</th>
// // // //                 <th>Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {applications.map(a => (
// // // //                 <tr key={a._id}>
// // // //                   <td>{a.jobId?.title}</td>
// // // //                   <td>{a.name}</td>
// // // //                   <td>{a.email}</td>
// // // //                   <td>{a.resumeUrl && <a href={`${API_BASE_URL}${a.resumeUrl}`} target="_blank" rel="noreferrer">View</a>}</td>
// // // //                   <td>{a.status || "Pending"}</td>
// // // //                   <td className="actions">
// // // //                     <FaCheck onClick={() => handleApplicationAction(a._id, "approve")} />
// // // //                     <FaTimes onClick={() => handleApplicationAction(a._id, "reject")} />
// // // //                     <FaTrash onClick={() => handleDeleteApplication(a._id)} />
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}

// // // //       {/* ---------------- MESSAGES TAB ---------------- */}
// // // //       {tab === "messages" && (
// // // //         <div className="tab-content">
// // // //           <table className="data-table">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Name</th>
// // // //                 <th>Email</th>
// // // //                 <th>Message</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {messages.map(m => (
// // // //                 <tr key={m._id}>
// // // //                   <td>{m.name}</td>
// // // //                   <td>{m.email}</td>
// // // //                   <td>{m.message}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }









// // // import { useEffect, useState } from "react";
// // // import api from "../utils/api"; // तुमच्या api.js चा अचूक पाथ तपासा
// // // //import api from "../utils/axios"
// // // import { FaEdit, FaTrash, FaCheck, FaTimes, FaSignOutAlt, FaExternalLinkAlt } from "react-icons/fa";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import "./Dashboard.css";

// // // export default function Dashboard() {
// // //   const [tab, setTab] = useState("jobs"); // 'jobs', 'applications', 'messages'
// // //   const [jobs, setJobs] = useState([]);
// // //   const [applications, setApplications] = useState([]);
// // //   const [messages, setMessages] = useState([]);

// // //   // Form State
// // //   const [jobForm, setJobForm] = useState({ 
// // //     title: "", 
// // //     description: "", 
// // //     location: "", 
// // //     employmentType: "", 
// // //     workMode: "" 
// // //   });
// // //   const [editingJobId, setEditingJobId] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   // Render वरून येणाऱ्या Resume साठी Base URL (गरज असल्यास)
// // //   const BACKEND_URL = "https://versaimmortal-api.onrender.com";

// // //   // ---------------- AUTH FUNCTIONS ----------------
// // //   const logout = () => {
// // //     localStorage.clear();
// // //     window.location.href = "/admin";
// // //   };

// // //   // ---------------- FETCH DATA ----------------
// // //   useEffect(() => {
// // //     fetchData();
// // //   }, []);

// // //   const fetchData = async () => {
// // //     try {
// // //       // Interceptor मुळे आता headers पाठवण्याची गरज नाही
// // //       const [jobsRes, appsRes, msgsRes] = await Promise.all([
// // //         api.get("/admin/jobs"),
// // //         api.get("/admin/job-applications"),
// // //         api.get("/admin/messages")
// // //       ]);

// // //       setJobs(jobsRes.data);
// // //       setApplications(appsRes.data);
// // //       setMessages(msgsRes.data);
// // //     } catch (err) {
// // //       console.error("Fetch Error:", err);
// // //       toast.error("Failed to sync with server");
// // //     }
// // //   };

// // //   // ---------------- JOB OPERATIONS ----------------
// // //   const handleJobSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const { title, description, location, employmentType, workMode } = jobForm;
// // //     if (!title || !description || !location || !employmentType || !workMode)
// // //       return toast.error("All fields are required");

// // //     setLoading(true);
// // //     try {
// // //       if (editingJobId) {
// // //         const res = await api.put(`/admin/jobs/${editingJobId}`, jobForm);
// // //         setJobs(jobs.map(j => (j._id === editingJobId ? res.data : j)));
// // //         toast.success("Job updated successfully");
// // //       } else {
// // //         const res = await api.post(`/admin/jobs`, jobForm);
// // //         setJobs([res.data, ...jobs]);
// // //         toast.success("Job posted successfully");
// // //       }
// // //       resetJobForm();
// // //     } catch (err) {
// // //       toast.error("Failed to save job");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const resetJobForm = () => {
// // //     setJobForm({ title: "", description: "", location: "", employmentType: "", workMode: "" });
// // //     setEditingJobId(null);
// // //   };

// // //   const handleEditJob = (job) => {
// // //     setJobForm({ 
// // //       title: job.title, 
// // //       description: job.description, 
// // //       location: job.location, 
// // //       employmentType: job.employmentType || "", 
// // //       workMode: job.workMode || "" 
// // //     });
// // //     setEditingJobId(job._id);
// // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // //   };

// // //   const handleDeleteJob = async (id) => {
// // //     if (!window.confirm("Are you sure you want to delete this job?")) return;
// // //     try {
// // //       await api.delete(`/admin/jobs/${id}`);
// // //       setJobs(jobs.filter(j => j._id !== id));
// // //       toast.success("Job deleted");
// // //     } catch (err) {
// // //       toast.error("Delete failed");
// // //     }
// // //   };

// // //   // ---------------- APPLICATION OPERATIONS ----------------
// // //   const handleApplicationAction = async (id, action) => {
// // //     try {
// // //       const res = await api.put(`/admin/job-applications/${id}/${action}`);
// // //       setApplications(applications.map(a => (a._id === id ? res.data : a)));
// // //       toast.success(`Application ${action === 'approve' ? 'Approved' : 'Rejected'}`);
// // //     } catch (err) {
// // //       toast.error(`Action failed`);
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard container">
// // //       <ToastContainer position="top-right" autoClose={2000} />
      
// // //       <div className="dashboard-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0" }}>
// // //         <h2>Admin Dashboard</h2>
// // //         <button onClick={logout} className="logout-btn" style={{ background: "#dc3545", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
// // //           <FaSignOutAlt /> Logout
// // //         </button>
// // //       </div>

// // //       {/* Tabs */}
// // //       <div className="tabs">
// // //         <button className={tab === "jobs" ? "active" : ""} onClick={() => setTab("jobs")}>Jobs</button>
// // //         <button className={tab === "applications" ? "active" : ""} onClick={() => setTab("applications")}>Applications</button>
// // //         <button className={tab === "messages" ? "active" : ""} onClick={() => setTab("messages")}>Messages</button>
// // //       </div>

// // //       {/* ---------------- JOBS TAB ---------------- */}
// // //       {tab === "jobs" && (
// // //         <div className="tab-content">
// // //           <div className="card job-form">
// // //             <h3>{editingJobId ? "Edit Job Posting" : "Create New Job"}</h3>
// // //             <form onSubmit={handleJobSubmit}>
// // //               <input type="text" placeholder="Job Title" value={jobForm.title} onChange={e => setJobForm({...jobForm, title:e.target.value})} />
// // //               <textarea placeholder="Job Description" value={jobForm.description} onChange={e => setJobForm({...jobForm, description:e.target.value})} />
// // //               <input type="text" placeholder="Location" value={jobForm.location} onChange={e => setJobForm({...jobForm, location:e.target.value})} />

// // //               <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
// // //                 <select style={{ flex: 1 }} value={jobForm.employmentType} onChange={e => setJobForm({...jobForm, employmentType:e.target.value})}>
// // //                   <option value="">Employment Type</option>
// // //                   <option value="FULL_TIME">Full-time</option>
// // //                   <option value="PART_TIME">Part-time</option>
// // //                   <option value="CONTRACT">Contract</option>
// // //                   <option value="INTERN">Internship</option>
// // //                 </select>

// // //                 <select style={{ flex: 1 }} value={jobForm.workMode} onChange={e => setJobForm({...jobForm, workMode:e.target.value})}>
// // //                   <option value="">Work Mode</option>
// // //                   <option value="ONSITE">Onsite</option>
// // //                   <option value="REMOTE">Remote</option>
// // //                   <option value="HYBRID">Hybrid</option>
// // //                 </select>
// // //               </div>

// // //               <button type="submit" disabled={loading} className="btn-primary">
// // //                 {loading ? "Processing..." : editingJobId ? "Update Listing" : "Post Job"}
// // //               </button>
// // //               {editingJobId && <button type="button" onClick={resetJobForm} className="btn-secondary">Cancel</button>}
// // //             </form>
// // //           </div>

// // //           <table className="data-table">
// // //             <thead>
// // //               <tr>
// // //                 <th>Title</th>
// // //                 <th>Location</th>
// // //                 <th>Type / Mode</th>
// // //                 <th>Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {jobs.map(j => (
// // //                 <tr key={j._id}>
// // //                   <td><strong>{j.title}</strong></td>
// // //                   <td>{j.location}</td>
// // //                   <td>{j.employmentType?.replace("_", " ")} | {j.workMode}</td>
// // //                   <td className="actions">
// // //                     <FaEdit className="edit-btn" onClick={() => handleEditJob(j)} title="Edit" />
// // //                     <FaTrash className="delete-btn" onClick={() => handleDeleteJob(j._id)} title="Delete" />
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}

// // //       {/* ---------------- APPLICATIONS TAB ---------------- */}
// // //       {tab === "applications" && (
// // //         <div className="tab-content">
// // //           <table className="data-table">
// // //             <thead>
// // //               <tr>
// // //                 <th>Candidate</th>
// // //                 <th>Applied For</th>
// // //                 <th>Resume</th>
// // //                 <th>Status</th>
// // //                 <th>Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {applications.map(a => (
// // //                 <tr key={a._id}>
// // //                   <td>
// // //                     <div>{a.name}</div>
// // //                     <small>{a.email}</small>
// // //                   </td>
// // //                   <td>{a.jobId?.title || "Deleted Job"}</td>
// // //                   <td>
// // //                     {a.resumeUrl && (
// // //                       <a href={`${BACKEND_URL}${a.resumeUrl}`} target="_blank" rel="noreferrer" className="resume-link">
// // //                         <FaExternalLinkAlt /> View PDF
// // //                       </a>
// // //                     )}
// // //                   </td>
// // //                   <td><span className={`status-badge ${a.status}`}>{a.status}</span></td>
// // //                   <td className="actions">
// // //                     <FaCheck className="approve-btn" onClick={() => handleApplicationAction(a._id, "approve")} title="Approve" />
// // //                     <FaTimes className="reject-btn" onClick={() => handleApplicationAction(a._id, "reject")} title="Reject" />
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}

// // //       {/* ---------------- MESSAGES TAB ---------------- */}
// // //       {tab === "messages" && (
// // //         <div className="tab-content">
// // //           <table className="data-table">
// // //             <thead>
// // //               <tr>
// // //                 <th>Sender</th>
// // //                 <th>Email</th>
// // //                 <th>Message</th>
// // //                 <th>Date</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {messages.map(m => (
// // //                 <tr key={m._id}>
// // //                   <td>{m.name}</td>
// // //                   <td>{m.email}</td>
// // //                   <td>{m.message}</td>
// // //                   <td>{new Date(m.createdAt).toLocaleDateString()}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }














// // import { useEffect, useState } from "react";
// // import api from "../api"; 
// // import { FaEdit, FaTrash, FaCheck, FaTimes, FaSignOutAlt, FaExternalLinkAlt } from "react-icons/fa";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import "./Dashboard.css";

// // export default function Dashboard() {
// //   const [tab, setTab] = useState("jobs");
// //   const [jobs, setJobs] = useState([]);
// //   const [applications, setApplications] = useState([]);
// //   const [messages, setMessages] = useState([]);

// //   const [jobForm, setJobForm] = useState({ 
// //     title: "", 
// //     description: "", 
// //     location: "", 
// //     employmentType: "", 
// //     workMode: "" 
// //   });
// //   const [editingJobId, setEditingJobId] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const BACKEND_URL = "https://versaimmortal-api.onrender.com";

// //   const logout = () => {
// //     localStorage.clear();
// //     window.location.href = "/admin";
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const [jobsRes, appsRes, msgsRes] = await Promise.all([
// //         api.get("/admin/jobs"),
// //         api.get("/admin/job-applications"),
// //         api.get("/admin/messages")
// //       ]);
// //       setJobs(jobsRes.data);
// //       setApplications(appsRes.data);
// //       setMessages(msgsRes.data);
// //     } catch (err) {
// //       toast.error("Failed to sync with server");
// //     }
// //   };

// //   const handleJobSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       if (editingJobId) {
// //         const res = await api.put(`/admin/jobs/${editingJobId}`, jobForm);
// //         setJobs(jobs.map(j => (j._id === editingJobId ? res.data : j)));
// //         toast.success("Job updated");
// //       } else {
// //         const res = await api.post(`/admin/jobs`, jobForm);
// //         setJobs([res.data, ...jobs]);
// //         toast.success("Job posted");
// //       }
// //       resetJobForm();
// //     } catch (err) {
// //       toast.error("Error saving job");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const resetJobForm = () => {
// //     setJobForm({ title: "", description: "", location: "", employmentType: "", workMode: "" });
// //     setEditingJobId(null);
// //   };

// //   return (
// //     <div className="dashboard container">
// //       <ToastContainer position="top-right" autoClose={2000} />
      
// //       <div className="dashboard-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0" }}>
// //         <h2>Admin Dashboard</h2>
// //         <button onClick={logout} className="logout-btn">
// //           <FaSignOutAlt /> Logout
// //         </button>
// //       </div>

// //       <div className="tabs">
// //         <button className={tab === "jobs" ? "active" : ""} onClick={() => setTab("jobs")}>Jobs</button>
// //         <button className={tab === "applications" ? "active" : ""} onClick={() => setTab("applications")}>Applications</button>
// //         <button className={tab === "messages" ? "active" : ""} onClick={() => setTab("messages")}>Messages</button>
// //       </div>

// //       {tab === "jobs" && (
// //         <div className="tab-content">
// //           <div className="card job-form">
// //             <h3>{editingJobId ? "Edit Job" : "Create New Job"}</h3>
// //             <form onSubmit={handleJobSubmit}>
              
// //               {/* Job Title Field */}
// //               <div className="form-group">
// //                 <label htmlFor="jobTitle">Job Title</label>
// //                 <input 
// //                   id="jobTitle"
// //                   name="title"
// //                   type="text" 
// //                   placeholder="Enter Job Title" 
// //                   value={jobForm.title} 
// //                   onChange={e => setJobForm({...jobForm, title:e.target.value})} 
// //                   required
// //                 />
// //               </div>

// //               {/* Job Description Field */}
// //               <div className="form-group">
// //                 <label htmlFor="jobDesc">Description</label>
// //                 <textarea 
// //                   id="jobDesc"
// //                   name="description"
// //                   placeholder="Enter Job Description" 
// //                   value={jobForm.description} 
// //                   onChange={e => setJobForm({...jobForm, description:e.target.value})} 
// //                   required
// //                 />
// //               </div>

// //               {/* Location Field */}
// //               <div className="form-group">
// //                 <label htmlFor="jobLoc">Location</label>
// //                 <input 
// //                   id="jobLoc"
// //                   name="location"
// //                   type="text" 
// //                   placeholder="e.g. Pune, Hybrid" 
// //                   value={jobForm.location} 
// //                   onChange={e => setJobForm({...jobForm, location:e.target.value})} 
// //                   required
// //                 />
// //               </div>

// //               <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
// //                 {/* Employment Type */}
// //                 <div className="form-group" style={{ flex: 1 }}>
// //                   <label htmlFor="empType">Employment Type</label>
// //                   <select 
// //                     id="empType"
// //                     name="employmentType"
// //                     value={jobForm.employmentType} 
// //                     onChange={e => setJobForm({...jobForm, employmentType:e.target.value})}
// //                     required
// //                   >
// //                     <option value="">Select Type</option>
// //                     <option value="FULL_TIME">Full-time</option>
// //                     <option value="PART_TIME">Part-time</option>
// //                     <option value="CONTRACT">Contract</option>
// //                     <option value="INTERN">Internship</option>
// //                   </select>
// //                 </div>

// //                 {/* Work Mode */}
// //                 <div className="form-group" style={{ flex: 1 }}>
// //                   <label htmlFor="workMode">Work Mode</label>
// //                   <select 
// //                     id="workMode"
// //                     name="workMode"
// //                     value={jobForm.workMode} 
// //                     onChange={e => setJobForm({...jobForm, workMode:e.target.value})}
// //                     required
// //                   >
// //                     <option value="">Select Mode</option>
// //                     <option value="ONSITE">Onsite</option>
// //                     <option value="REMOTE">Remote</option>
// //                     <option value="HYBRID">Hybrid</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               <button type="submit" disabled={loading} className="btn-primary">
// //                 {loading ? "Saving..." : editingJobId ? "Update Job" : "Post Job"}
// //               </button>
// //               {editingJobId && <button type="button" onClick={resetJobForm} className="btn-secondary">Cancel</button>}
// //             </form>
// //           </div>

// //           {/* ... Rest of the tables (Jobs, Applications, Messages) remain same ... */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import api from "../utils/axios"; // तुमच्या api.js चा मार्ग तपासा
// import { FaEdit, FaTrash, FaCheck, FaTimes, FaSignOutAlt, FaExternalLinkAlt } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Dashboard.css";

// export default function Dashboard() {
//   const [tab, setTab] = useState("jobs");
//   const [jobs, setJobs] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [messages, setMessages] = useState([]);

//   // Form State
//   const [jobForm, setJobForm] = useState({ 
//     title: "", 
//     description: "", 
//     location: "", 
//     employmentType: "", 
//     workMode: "" 
//   });
//   const [editingJobId, setEditingJobId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Backend URL for PDF View
//   const BACKEND_URL = "https://versaimmortal-api.onrender.com";

//   // Logout function
//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/admin";
//   };

//   // Fetch all data
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [jobsRes, appsRes, msgsRes] = await Promise.all([
//         api.get("/admin/jobs"),
//         api.get("/admin/job-applications"),
//         api.get("/admin/messages")
//       ]);
//       setJobs(jobsRes.data);
//       setApplications(appsRes.data);
//       setMessages(msgsRes.data);
//     } catch (err) {
//       toast.error("Failed to sync with server");
//     }
//   };

//   // Form Submit (Create or Update)
//   const handleJobSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (editingJobId) {
//         const res = await api.put(`/admin/jobs/${editingJobId}`, jobForm);
//         setJobs(jobs.map(j => (j._id === editingJobId ? res.data : j)));
//         toast.success("Job updated successfully");
//       } else {
//         const res = await api.post(`/admin/jobs`, jobForm);
//         setJobs([res.data, ...jobs]);
//         toast.success("Job posted successfully");
//       }
//       resetJobForm();
//     } catch (err) {
//       toast.error("Error saving job");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetJobForm = () => {
//     setJobForm({ title: "", description: "", location: "", employmentType: "", workMode: "" });
//     setEditingJobId(null);
//   };

//   const handleEditJob = (job) => {
//     setJobForm({ 
//       title: job.title, 
//       description: job.description, 
//       location: job.location, 
//       employmentType: job.employmentType || "", 
//       workMode: job.workMode || "" 
//     });
//     setEditingJobId(job._id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDeleteJob = async (id) => {
//     if (!window.confirm("Are you sure?")) return;
//     try {
//       await api.delete(`/admin/jobs/${id}`);
//       setJobs(jobs.filter(j => j._id !== id));
//       toast.success("Job deleted");
//     } catch (err) {
//       toast.error("Failed to delete job");
//     }
//   };

//   const handleApplicationAction = async (id, action) => {
//     try {
//       const res = await api.put(`/admin/job-applications/${id}/${action}`);
//       setApplications(applications.map(a => (a._id === id ? res.data : a)));
//       toast.success(`Application ${action}d`);
//     } catch (err) {
//       toast.error("Action failed");
//     }
//   };

//   return (
//     <div className="dashboard container">
//       <ToastContainer position="top-right" autoClose={2000} />
      
//       <div className="dashboard-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0" }}>
//         <h2>Admin Dashboard</h2>
//         <button onClick={logout} className="logout-btn">
//           <FaSignOutAlt /> Logout
//         </button>
//       </div>

//       <div className="tabs">
//         <button className={tab === "jobs" ? "active" : ""} onClick={() => setTab("jobs")}>Jobs</button>
//         <button className={tab === "applications" ? "active" : ""} onClick={() => setTab("applications")}>Applications</button>
//         <button className={tab === "messages" ? "active" : ""} onClick={() => setTab("messages")}>Messages</button>
//       </div>

//       {/* JOBS TAB */}
//       {tab === "jobs" && (
//         <div className="tab-content">
//           <div className="card job-form">
//             <h3>{editingJobId ? "Edit Job" : "Create New Job"}</h3>
//             <form onSubmit={handleJobSubmit}>
              
//               <div className="form-group">
//                 <label htmlFor="title">Job Title</label>
//                 <input 
//                   id="title"
//                   name="title"
//                   type="text" 
//                   placeholder="Enter Job Title" 
//                   value={jobForm.title} 
//                   onChange={e => setJobForm({...jobForm, title: e.target.value})} 
//                   required 
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <textarea 
//                   id="description"
//                   name="description"
//                   placeholder="Enter Job Description" 
//                   value={jobForm.description} 
//                   onChange={e => setJobForm({...jobForm, description: e.target.value})} 
//                   required 
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="location">Location</label>
//                 <input 
//                   id="location"
//                   name="location"
//                   type="text" 
//                   placeholder="e.g. Pune, Remote" 
//                   value={jobForm.location} 
//                   onChange={e => setJobForm({...jobForm, location: e.target.value})} 
//                   required 
//                 />
//               </div>

//               <div className="form-row" style={{ display: "flex", gap: "15px" }}>
//                 <div className="form-group" style={{ flex: 1 }}>
//                   <label htmlFor="employmentType">Employment Type</label>
//                   <select 
//                     id="employmentType"
//                     name="employmentType"
//                     value={jobForm.employmentType} 
//                     onChange={e => setJobForm({...jobForm, employmentType: e.target.value})}
//                     required
//                   >
//                     <option value="">Select Type</option>
//                     <option value="FULL_TIME">Full-time</option>
//                     <option value="PART_TIME">Part-time</option>
//                     <option value="CONTRACT">Contract</option>
//                     <option value="INTERN">Internship</option>
//                   </select>
//                 </div>

//                 <div className="form-group" style={{ flex: 1 }}>
//                   <label htmlFor="workMode">Work Mode</label>
//                   <select 
//                     id="workMode"
//                     name="workMode"
//                     value={jobForm.workMode} 
//                     onChange={e => setJobForm({...jobForm, workMode: e.target.value})}
//                     required
//                   >
//                     <option value="">Select Mode</option>
//                     <option value="ONSITE">Onsite</option>
//                     <option value="REMOTE">Remote</option>
//                     <option value="HYBRID">Hybrid</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-actions">
//                 <button type="submit" className="btn-save" disabled={loading}>
//                   {loading ? "Saving..." : editingJobId ? "Update Job" : "Post Job"}
//                 </button>
//                 {editingJobId && <button type="button" className="btn-cancel" onClick={resetJobForm}>Cancel</button>}
//               </div>
//             </form>
//           </div>

//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Location</th>
//                 <th>Type</th>
//                 <th>Mode</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {jobs.map(j => (
//                 <tr key={j._id}>
//                   <td>{j.title}</td>
//                   <td>{j.location}</td>
//                   <td>{j.employmentType?.replace("_", " ")}</td>
//                   <td>{j.workMode}</td>
//                   <td className="actions">
//                     <FaEdit className="icon-edit" onClick={() => handleEditJob(j)} title="Edit" />
//                     <FaTrash className="icon-delete" onClick={() => handleDeleteJob(j._id)} title="Delete" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* APPLICATIONS TAB */}
//       {tab === "applications" && (
//         <div className="tab-content">
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Candidate</th>
//                 <th>Job Title</th>
//                 <th>Resume</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.map(a => (
//                 <tr key={a._id}>
//                   <td>
//                     <div>{a.name}</div>
//                     <small>{a.email}</small>
//                   </td>
//                   <td>{a.jobId?.title || "N/A"}</td>
//                   <td>
//                     {a.resumeUrl ? (
//                       <a href={`${BACKEND_URL}${a.resumeUrl}`} target="_blank" rel="noreferrer" className="link-pdf">
//                         <FaExternalLinkAlt /> View PDF
//                       </a>
//                     ) : "No PDF"}
//                   </td>
//                   <td><span className={`badge ${a.status}`}>{a.status}</span></td>
//                   <td className="actions">
//                     <FaCheck className="icon-approve" onClick={() => handleApplicationAction(a._id, "approve")} title="Approve" />
//                     <FaTimes className="icon-reject" onClick={() => handleApplicationAction(a._id, "reject")} title="Reject" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* MESSAGES TAB */}
//       {tab === "messages" && (
//         <div className="tab-content">
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Message</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {messages.map(m => (
//                 <tr key={m._id}>
//                   <td>{m.name}</td>
//                   <td>{m.email}</td>
//                   <td>{m.message}</td>
//                   <td>{new Date(m.createdAt).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
















import { useEffect, useState } from "react";
import api from "../utils/axios"; // तुमच्या api.js चा मार्ग तपासा
import { FaEdit, FaTrash, FaCheck, FaTimes, FaSignOutAlt, FaExternalLinkAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";

export default function Dashboard() {
  const [tab, setTab] = useState("jobs");
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);

  // Form State
  const [jobForm, setJobForm] = useState({ 
    title: "", 
    description: "", 
    location: "", 
    employmentType: "", 
    workMode: "" 
  });
  const [editingJobId, setEditingJobId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Backend URL for Resume View
  const BACKEND_URL = process.env.REACT_APP_API_URL;

  // Logout function
  const logout = () => {
    localStorage.clear();
    window.location.href = "/admin";
  };

  // Fetch all data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [jobsRes, appsRes, msgsRes] = await Promise.all([
        api.get("/admin/jobs"),
        api.get("/admin/job-applications"),
        api.get("/admin/messages")
      ]);
      setJobs(jobsRes.data);
      setApplications(appsRes.data);
      setMessages(msgsRes.data);
    } catch (err) {
      toast.error("Failed to fetch data from server");
    }
  };

  // Form Submit (Create or Update)
  const handleJobSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingJobId) {
        const res = await api.put(`/admin/jobs/${editingJobId}`, jobForm);
        setJobs(jobs.map(j => (j._id === editingJobId ? res.data : j)));
        toast.success("Job updated successfully");
      } else {
        const res = await api.post(`/admin/jobs`, jobForm);
        setJobs([res.data, ...jobs]);
        toast.success("Job posted successfully");
      }
      resetJobForm();
    } catch (err) {
      toast.error("Error saving job");
    } finally {
      setLoading(false);
    }
  };

  const resetJobForm = () => {
    setJobForm({ title: "", description: "", location: "", employmentType: "", workMode: "" });
    setEditingJobId(null);
  };

  const handleEditJob = (job) => {
    setJobForm({ 
      title: job.title, 
      description: job.description, 
      location: job.location, 
      employmentType: job.employmentType || "", 
      workMode: job.workMode || "" 
    });
    setEditingJobId(job._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await api.delete(`/admin/jobs/${id}`);
      setJobs(jobs.filter(j => j._id !== id));
      toast.success("Job deleted");
    } catch (err) {
      toast.error("Failed to delete job");
    }
  };

  const handleApplicationAction = async (id, action) => {
    try {
      const res = await api.put(`/admin/job-applications/${id}/${action}`);
      setApplications(applications.map(a => (a._id === id ? res.data : a)));
      toast.success(`Application ${action}d`);
    } catch (err) {
      toast.error("Action failed");
    }
  };

  return (
    <div className="dashboard container">
      <ToastContainer position="top-right" autoClose={2000} />
      
      <div className="dashboard-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0" }}>
        <h2>Admin Dashboard</h2>
        <button onClick={logout} className="logout-btn" aria-label="Logout from dashboard">
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <nav className="tabs" aria-label="Dashboard navigation tabs">
        <button className={tab === "jobs" ? "active" : ""} onClick={() => setTab("jobs")}>Jobs</button>
        <button className={tab === "applications" ? "active" : ""} onClick={() => setTab("applications")}>Applications</button>
        <button className={tab === "messages" ? "active" : ""} onClick={() => setTab("messages")}>Messages</button>
      </nav>

      {/* JOBS TAB */}
      {tab === "jobs" && (
        <div className="tab-content">
          <section className="card job-form">
            <h3>{editingJobId ? "Edit Job Posting" : "Post a New Job"}</h3>
            <form onSubmit={handleJobSubmit}>
              
              <div className="form-group">
                <label htmlFor="job-title-input">Job Title</label>
                <input 
                  id="job-title-input"
                  name="title"
                  type="text" 
                  placeholder="e.g. Full Stack Developer" 
                  value={jobForm.title} 
                  onChange={e => setJobForm({...jobForm, title: e.target.value})} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="job-description-input">Job Description</label>
                <textarea 
                  id="job-description-input"
                  name="description"
                  placeholder="Enter role details and requirements" 
                  value={jobForm.description} 
                  onChange={e => setJobForm({...jobForm, description: e.target.value})} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="job-location-input">Location</label>
                <input 
                  id="job-location-input"
                  name="location"
                  type="text" 
                  placeholder="e.g. Pune, Maharashtra / Remote" 
                  value={jobForm.location} 
                  onChange={e => setJobForm({...jobForm, location: e.target.value})} 
                  required 
                />
              </div>

              <div className="form-row" style={{ display: "flex", gap: "15px" }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label htmlFor="employment-type-select">Employment Type</label>
                  <select 
                    id="employment-type-select"
                    name="employmentType"
                    value={jobForm.employmentType} 
                    onChange={e => setJobForm({...jobForm, employmentType: e.target.value})}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="FULL_TIME">Full-time</option>
                    <option value="PART_TIME">Part-time</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="INTERN">Internship</option>
                  </select>
                </div>

                <div className="form-group" style={{ flex: 1 }}>
                  <label htmlFor="work-mode-select">Work Mode</label>
                  <select 
                    id="work-mode-select"
                    name="workMode"
                    value={jobForm.workMode} 
                    onChange={e => setJobForm({...jobForm, workMode: e.target.value})}
                    required
                  >
                    <option value="">Select Mode</option>
                    <option value="ONSITE">Onsite</option>
                    <option value="REMOTE">Remote</option>
                    <option value="HYBRID">Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-save" disabled={loading}>
                  {loading ? "Saving..." : editingJobId ? "Update Job" : "Post Job"}
                </button>
                {editingJobId && <button type="button" className="btn-cancel" onClick={resetJobForm}>Cancel</button>}
              </div>
            </form>
          </section>

          <table className="data-table">
            <caption>Active Job Listings</caption>
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Type</th>
                <th>Mode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(j => (
                <tr key={j._id}>
                  <td>{j.title}</td>
                  <td>{j.location}</td>
                  <td>{j.employmentType?.replace("_", " ")}</td>
                  <td>{j.workMode}</td>
                  <td className="actions">
                    <button onClick={() => handleEditJob(j)} title="Edit Job" className="action-btn edit"><FaEdit /></button>
                    <button onClick={() => handleDeleteJob(j._id)} title="Delete Job" className="action-btn delete"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* APPLICATIONS TAB */}
      {tab === "applications" && (
        <div className="tab-content">
          <table className="data-table">
            <caption>Job Applications Received</caption>
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Job Applied</th>
                <th>Resume</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(a => (
                <tr key={a._id}>
                  <td>
                    <div>{a.name}</div>
                    <small>{a.email}</small>
                  </td>
                  <td>{a.jobId?.title || "Position Deleted"}</td>
                  <td>
                    {a.resumeUrl ? (
                      <a href={`${BACKEND_URL}${a.resumeUrl}`} target="_blank" rel="noreferrer" className="link-pdf">
                        <FaExternalLinkAlt /> View PDF
                      </a>
                    ) : "No File"}
                  </td>
                  <td><span className={`badge ${a.status}`}>{a.status || "Pending"}</span></td>
                  <td className="actions">
                    <button onClick={() => handleApplicationAction(a._id, "approve")} title="Approve"><FaCheck className="icon-approve" /></button>
                    <button onClick={() => handleApplicationAction(a._id, "reject")} title="Reject"><FaTimes className="icon-reject" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* MESSAGES TAB */}
      {tab === "messages" && (
        <div className="tab-content">
          <table className="data-table">
            <caption>Contact Form Submissions</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message Snippet</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(m => (
                <tr key={m._id}>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.message}</td>
                  <td>{new Date(m.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}