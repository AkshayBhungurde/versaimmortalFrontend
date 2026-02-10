import { useState } from "react";
import api from "../utils/axios";

export default function ChangePassword() {
  const [oldPassword, setOld] = useState("");
  const [newPassword, setNew] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/admin/change-password", {
      oldPassword,
      newPassword
    }, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    alert("Password updated");
  };

  return (
    <form className="container" onSubmit={submit}>
      <h2>Change Password</h2>
      <input type="password" placeholder="Old Password" onChange={e => setOld(e.target.value)} />
      <input type="password" placeholder="New Password" onChange={e => setNew(e.target.value)} />
      <button>Update</button>
    </form>
  );
}
