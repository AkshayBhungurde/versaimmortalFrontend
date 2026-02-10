import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Navbars
import MainNavbar from "./components/MainNavbar"; // Public navbar
import AdminNavbar from "./components/AdminNavbar"; // Admin navbar

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import JobDetail from "./pages/JobDetai";

// Footer
import Footer from "./Footer"; // adjust path if needed

// Admin / Protected Pages
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import ProtectedRoute from "./pages/ProtectedRoute";

import "./App.css";

// Wrapper component to handle navbar & footer display
function AppWrapper() {
  const location = useLocation();

  // Paths where public navbar should NOT be shown
  const hidePublicNavbarPaths = ["/admin", "/dashboard", "/profile", "/change-password"];

  // Paths where admin navbar should be shown
  const adminNavbarPaths = ["/dashboard", "/profile", "/change-password"];

  // Paths where footer should NOT be shown (admin pages)
  const hideFooterPaths = ["/admin", "/dashboard", "/profile", "/change-password"];

  const showPublicNavbar = !hidePublicNavbarPaths.includes(location.pathname);
  const showAdminNavbar = adminNavbarPaths.includes(location.pathname);
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      {/* Conditional Navbars */}
      {showPublicNavbar && <MainNavbar />}
      {showAdminNavbar && <AdminNavbar />}

      {/* Routes */}
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers/:slug" element={<JobDetail />} />

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Conditional Footer */}
      {showFooter && <Footer />}
    </>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
