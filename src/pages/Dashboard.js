import { useEffect, useState } from "react";
import api from "../utils/axios";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";

export default function Dashboard() {
  const [tab, setTab] = useState("jobs"); // 'jobs', 'applications', 'messages'
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);

  // Added employmentType and workMode to the form state
  const [jobForm, setJobForm] = useState({ title: "", description: "", location: "", employmentType: "", workMode: "" });
  const [editingJobId, setEditingJobId] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const authHeaders = { headers: { Authorization: localStorage.getItem("token") } };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    window.location.href = "/admin";
  };

  // ---------------- FETCH DATA ----------------
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    api.get("/admin/jobs", authHeaders)
      .then(res => setJobs(res.data))
      .catch(() => toast.error("Failed to fetch jobs"));

    api.get("/admin/job-applications", authHeaders)
      .then(res => setApplications(res.data))
      .catch(() => toast.error("Failed to fetch applications"));

    api.get("/admin/messages", authHeaders)
      .then(res => setMessages(res.data))
      .catch(() => toast.error("Failed to fetch messages"));
  };

  // ---------------- JOB FORM ----------------
  const handleJobSubmit = (e) => {
    e.preventDefault();
    const { title, description, location, employmentType, workMode } = jobForm;
    if (!title || !description || !location || !employmentType || !workMode)
      return toast.error("All fields are required");
    setLoading(true);

    const apiCall = editingJobId
      ? api.put(`/admin/jobs/${editingJobId}`, jobForm, authHeaders)
      : api.post(`/admin/jobs`, jobForm, authHeaders);

    apiCall
      .then(res => {
        if (editingJobId) {
          setJobs(jobs.map(j => (j._id === editingJobId ? res.data : j)));
          toast.success("Job updated successfully");
        } else {
          setJobs([res.data, ...jobs]);
          toast.success("Job posted successfully");
        }
        resetJobForm();
      })
      .catch(() => toast.error("Failed to save job"))
      .finally(() => setLoading(false));
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

  const handleDeleteJob = (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    api.delete(`/admin/jobs/${id}`, authHeaders)
      .then(() => {
        setJobs(jobs.filter(j => j._id !== id));
        toast.success("Job deleted");
      })
      .catch(() => toast.error("Failed to delete job"));
  };

  // ---------------- APPLICATIONS ----------------
  const handleApplicationAction = (id, action) => {
    api.put(`/admin/job-applications/${id}/${action}`, {}, authHeaders)
      .then(res => {
        setApplications(applications.map(a => (a._id === id ? res.data : a)));
        toast.success(`Application ${action}d`);
      })
      .catch(() => toast.error(`Failed to ${action} application`));
  };

  const handleDeleteApplication = (id) => {
    if (!window.confirm("Delete this application?")) return;
    api.delete(`/admin/job-applications/${id}`, authHeaders)
      .then(() => setApplications(applications.filter(a => a._id !== id)))
      .catch(() => toast.error("Failed to delete application"));
  };

  return (
    <div className="dashboard container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={tab === "jobs" ? "active" : ""} onClick={() => setTab("jobs")}>Jobs</button>
        <button className={tab === "applications" ? "active" : ""} onClick={() => setTab("applications")}>Applications</button>
        <button className={tab === "messages" ? "active" : ""} onClick={() => setTab("messages")}>Messages</button>
      </div>

      {/* ---------------- JOBS TAB ---------------- */}
      {tab === "jobs" && (
        <div className="tab-content">
          <div className="card job-form">
            <h3>{editingJobId ? "Edit Job" : "Post a New Job"}</h3>
            <form onSubmit={handleJobSubmit}>
              <input type="text" placeholder="Job Title" value={jobForm.title} onChange={e => setJobForm({...jobForm, title:e.target.value})} />
              <textarea placeholder="Job Description" value={jobForm.description} onChange={e => setJobForm({...jobForm, description:e.target.value})} />
              <input type="text" placeholder="Location" value={jobForm.location} onChange={e => setJobForm({...jobForm, location:e.target.value})} />

              {/* Employment Type */}
              <select value={jobForm.employmentType} onChange={e => setJobForm({...jobForm, employmentType:e.target.value})} required>
                <option value="">Select Employment Type</option>
                <option value="FULL_TIME">Full-time</option>
                <option value="PART_TIME">Part-time</option>
                <option value="CONTRACT">Contract</option>
                <option value="INTERN">Internship</option>
              </select>

              {/* Work Mode */}
              <select value={jobForm.workMode} onChange={e => setJobForm({...jobForm, workMode:e.target.value})} required>
                <option value="">Select Work Mode</option>
                <option value="ONSITE">Onsite</option>
                <option value="REMOTE">Remote</option>
                <option value="HYBRID">Hybrid</option>
              </select>

              <button type="submit" disabled={loading}>{loading ? "Saving..." : editingJobId ? "Update Job" : "Post Job"}</button>
              {editingJobId && <button type="button" onClick={resetJobForm}>Cancel</button>}
            </form>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Employment Type</th>
                <th>Work Mode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(j => (
                <tr key={j._id}>
                  <td>{j.title}</td>
                  <td>{j.description}</td>
                  <td>{j.location}</td>
                  <td>{j.employmentType.replace("_", " ")}</td>
                  <td>{j.workMode}</td>
                  <td className="actions">
                    <FaEdit onClick={() => handleEditJob(j)} />
                    <FaTrash onClick={() => handleDeleteJob(j._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ---------------- APPLICATIONS TAB ---------------- */}
      {tab === "applications" && (
        <div className="tab-content">
          <table className="data-table">
            <thead>
              <tr>
                <th>Job</th>
                <th>Name</th>
                <th>Email</th>
                <th>Resume</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(a => (
                <tr key={a._id}>
                  <td>{a.jobId?.title}</td>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.resumeUrl && <a href={`${API_BASE_URL}${a.resumeUrl}`} target="_blank" rel="noreferrer">View</a>}</td>
                  <td>{a.status || "Pending"}</td>
                  <td className="actions">
                    <FaCheck onClick={() => handleApplicationAction(a._id, "approve")} />
                    <FaTimes onClick={() => handleApplicationAction(a._id, "reject")} />
                    <FaTrash onClick={() => handleDeleteApplication(a._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ---------------- MESSAGES TAB ---------------- */}
      {tab === "messages" && (
        <div className="tab-content">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(m => (
                <tr key={m._id}>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
