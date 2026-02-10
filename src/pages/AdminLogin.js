import axios from "axios";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/admin/login", {
      email, password
    });
    localStorage.setItem("token", res.data.accessToken);
    localStorage.setItem("refresh", res.data.refreshToken);
    window.location = "/dashboard";
  };

  return (
    <form className="container" onSubmit={login}>
      <h2>Admin Login</h2>
      <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
