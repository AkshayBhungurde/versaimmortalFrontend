import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import api from "../utils/axios";
import "./JobDetail.css";

export default function JobDetail() {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    resume: null,
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/jobs/slug/${slug}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.error(err));
  }, [slug]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (!formData.name || !formData.email || !formData.mobile || !formData.resume) {
      return setErrorMsg("All fields including resume are required.");
    }

    const data = new FormData();
    data.append("jobId", job._id);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("message", formData.message);
    data.append("resume", formData.resume);

    try {
      setLoading(true);
      const res = await api.post("/jobs/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccessMsg(res.data.message);
      setFormData({ name: "", email: "", mobile: "", message: "", resume: null });
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to submit application. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!job) return <p className="loading-msg">Loading job details...</p>;

  return (
    <>
      <Helmet>
        <title>{job.title} | Careers at VersaImmortal</title>
        <meta
          name="description"
          content={`Apply for the role of ${job.title} at VersaImmortal Pvt. Ltd. Location: ${job.location}.`}
        />
      </Helmet>

      <section className="job-detail container">
        <h1>{job.title}</h1>
        <p className="job-location">
          {job.location} | {job.department || "General"}
        </p>
        <div className="job-description">{job.description}</div>

        <form className="apply-form" onSubmit={handleSubmit}>
          <h2>Apply for this position</h2>

          {successMsg && <p className="success-msg">{successMsg}</p>}
          {errorMsg && <p className="error-msg">{errorMsg}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
          />
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>
    </>
  );
}
