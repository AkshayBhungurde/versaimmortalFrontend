// import { useState } from "react";
// import "./MainNavbar.css";

// export default function MainNavbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="main-navbar">
//       <div className="logo">My IT Company</div>

//       <nav className={`nav-links ${open ? "open" : ""}`}>
//         <a href="/">Home</a>
//         <a href="/about">About Us</a>
//         <a href="/services">Services</a>
//         <a href="/portfolio">Portfolio</a>
//         <a href="/career">Career</a> {/* Added Career link */}
//         <a href="/contact">Contact</a>
//       </nav>

//       <div className="hamburger" onClick={() => setOpen(!open)}>
//         ☰
//       </div>
//     </header>
//   );
// }




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
        <a href="/portfolio" onClick={() => setOpen(false)}>Portfolio</a>
        {/* <a href="/career" onClick={() => setOpen(false)}>Career</a>
        <a href="/contact" onClick={() => setOpen(false)}>Contact</a> */}
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>
    </header>
  );
}
