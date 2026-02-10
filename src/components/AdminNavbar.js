import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AdminNavbar.css";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // Mobile menu toggle

  const handleLogout = () => {
    // TODO: clear admin session/token here
    navigate("/admin");
  };

  // Close mobile menu on browser navigation
  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("popstate", closeMenu);
    return () => window.removeEventListener("popstate", closeMenu);
  }, []);

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/profile", label: "Profile" },
    { path: "/change-password", label: "Change Password" },
  ];

  return (
    <header className="admin-navbar">
      <div className="admin-logo">Admin Panel</div>

      <nav className={`admin-nav-links ${open ? "open" : ""}`}>
        {links.map((link, index) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => (isActive ? "active slide-in" : "slide-in")}
            onClick={() => setOpen(false)}
            style={{ animationDelay: `${index * 0.1}s` }} // stagger animation
          >
            {link.label}
          </NavLink>
        ))}
        <button
          className="logout-btn slide-in"
          onClick={handleLogout}
          style={{ animationDelay: `${links.length * 0.1}s` }}
        >
          Logout
        </button>
      </nav>

      <div className="admin-hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </header>
  );
}
