// import axios from "axios";
// import { useState, useEffect } from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
// import "./Contact.css";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // SEO
//   useEffect(() => {
//     document.title = "Contact Us | VersaImmortal Pvt. Ltd.";
//     const metaDesc = document.createElement("meta");
//     metaDesc.name = "description";
//     metaDesc.content = "Contact VersaImmortal Pvt. Ltd. for inquiries, support, or business collaborations.";
//     document.head.appendChild(metaDesc);

//     return () => document.head.removeChild(metaDesc);
//   }, []);

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!form.name || !form.email || !form.message) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(form.email)) {
//       setError("Please enter a valid email.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post("http://localhost:5000/contact", form);
//       setSuccess("Your message has been sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } catch {
//       setError("Failed to send message. Please try again later.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="contact-page container">
//       <h2>Contact Us</h2>
//       <p className="intro-text">Reach out to VersaImmortal Pvt. Ltd. We’d love to hear from you!</p>

//       {/* Contact Info Section */}
//       <div className="contact-info">
//         <div className="info-card">
//           <FaMapMarkerAlt className="icon" />
//           <p>Pune</p>
//         </div>
//         <div className="info-card">
//           <FaEnvelope className="icon" />
//           <p>info@versaimmortal.com</p>
//         </div>
//         <div className="info-card">
//           <FaPhone className="icon" />
//           <p>+91 8698289869</p>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div className="form-map-wrapper">
//         <form onSubmit={submit} className="contact-form">
//           {success && <p className="success-msg">{success}</p>}
//           {error && <p className="error-msg">{error}</p>}

//           <input
//             type="text"
//             placeholder="Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             required
//           />
//           <textarea
//             placeholder="Message"
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>




//         {/* Google Map */}
//         <div className="map-container">
//           {/* <iframe
//             title="VersaImmortal Location"
//             src="\ttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019336522129!2d-122.4016003846807!3d37.79362017975637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dcf8fbbb%3A0xb9f7f5d625f8f77e!2sGoogle!5e0!3m2!1sen!2sus!4v1697629265213!5m2!1sen!2sus"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe> */}
//         </div>
//       </div>
//     </div>
//   );
// }










import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import api from "../utils/axios";   // तुमचा custom axios instance
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // SEO
  useEffect(() => {
    document.title = "Contact Us | VersaImmortal Pvt. Ltd.";
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Contact VersaImmortal Pvt. Ltd. for inquiries, support, or business collaborations.";
    document.head.appendChild(metaDesc);

    return () => document.head.removeChild(metaDesc);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/contact", form);   // ✅ localhost काढले
      setSuccess("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-page container">
      <h2>Contact Us</h2>
      <p className="intro-text">
        Reach out to VersaImmortal Pvt. Ltd. We’d love to hear from you!
      </p>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <p>Pune</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="icon" />
          <p>info@versaimmortal.com</p>
        </div>
        <div className="info-card">
          <FaPhone className="icon" />
          <p>+91 8698289869</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="form-map-wrapper">
        <form onSubmit={submit} className="contact-form">
          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Google Map (Optional) */}
        <div className="map-container"></div>
      </div>
    </div>
  );
}