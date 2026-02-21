// // import axios from "axios";
// // import { useState } from "react";

// // export default function AdminLogin() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const login = async (e) => {
// //     e.preventDefault();
// //     const res = await axios.post("http://localhost:5000/admin/login", {
// //       email, password
// //     });
// //     localStorage.setItem("token", res.data.accessToken);
// //     localStorage.setItem("refresh", res.data.refreshToken);
// //     window.location = "/dashboard";
// //   };

// //   return (
// //     <form className="container" onSubmit={login}>
// //       <h2>Admin Login</h2>
// //       <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
// //       <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
// //       <button>Login</button>
// //     </form>
// //   );
// // }








// import { useState } from "react";
// // १. तुमचे तयार केलेले 'api' इन्स्टन्स इम्पोर्ट करा
// // टीप: तुमचा api.js ज्या फोल्डरमध्ये आहे त्यानुसार पाथ तपासा (उदा. ../api)
// import api from "../utils/axios"; 

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const login = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       // २. axios ऐवजी 'api' वापरा आणि फक्त एंडपॉईंट '/admin/login' लिहा
//       const res = await api.post("/admin/login", {
//         email,
//         password,
//       });

//       // ३. टोकन्स सेव्ह करा
//       localStorage.setItem("token", res.data.accessToken);
//       localStorage.setItem("refresh", res.data.refreshToken);

//       // ४. डॅशबोर्डवर रिडायरेक्ट करा
//       window.location.href = "/dashboard";
//     } catch (err) {
//       console.error("Login Error:", err);
//       // जर लॉगिन फेल झाले तर मेसेज दाखवा
//       setError(err.response?.data || "Login failed. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container" style={{ marginTop: "50px", maxWidth: "400px" }}>
//       <form onSubmit={login}>
//         <h2>Admin Login</h2>
        
//         {error && <p style={{ color: "red" }}>{error}</p>}
        
//         <input 
//           type="email"
//           required
//           onChange={(e) => setEmail(e.target.value)} 
//           placeholder="Email" 
//           style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
        
//         <input 
//           type="password" 
//           required
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder="Password" 
//           style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
        
//         <button 
//           type="submit" 
//           disabled={loading}
//           style={{ width: "100%", padding: "10px", cursor: loading ? "not-allowed" : "pointer" }}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }



import { useState } from "react";
// तुमचे api.js इम्पोर्ट करा (पाथ तुमच्या फोल्डरनुसार तपासा)
import api from "../utils/axios"; 

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // localhost:5000 ऐवजी आता आपण 'api' वापरत आहोत 
      // जे आपोआप Render च्या URL वर रिक्वेस्ट पाठवेल
      const res = await api.post("/admin/login", {
        email, 
        password
      });

      // टोकन्स सुरक्षितपणे सेव्ह करा
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("refresh", res.data.refreshToken);

      // यशस्वी लॉगिन नंतर डॅशबोर्डवर पाठवा
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login Error:", err);
      // जर बॅकएंडकडून काही एरर आला तर तो स्क्रीनवर दाखवा
      if (err.response) {
        setError(err.response.data || "Invalid email or password");
      } else {
        setError("Cannot connect to server. Please check if your backend is live.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <form onSubmit={login}>
        <h2>Admin Login</h2>
        
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input 
            type="email"
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            onChange={e => setEmail(e.target.value)} 
            placeholder="admin@example.com" 
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input 
            type="password" 
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            onChange={e => setPassword(e.target.value)} 
            placeholder="Password" 
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            width: "100%", 
            padding: "10px", 
            backgroundColor: loading ? "#ccc" : "#007bff", 
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}