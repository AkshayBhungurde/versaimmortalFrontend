import { useEffect, useState } from "react";
import api from "../utils/axios";

export default function Profile() {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    api.get("/admin/profile", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setAdmin(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Admin Profile</h2>
      <p>Email: {admin.email}</p>
    </div>
  );
}
