 



import { useState } from "react";
import "./MainNavbar.css";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-navbar">
      <div className="logo">VersaImmortal</div>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/about" onClick={() => setOpen(false)}>About Us</a>
        <a href="/services" onClick={() => setOpen(false)}>Services</a>
        {/* <a href="/portfolio" onClick={() => setOpen(false)}>Portfolio</a> */}
        <a href="/career" onClick={() => setOpen(false)}>Career</a>
        <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>
    </header>




























































);
}
















































































