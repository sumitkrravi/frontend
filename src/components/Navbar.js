import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { DarkModeContext } from "../context/DarkModeContext";
import { Button } from "react-bootstrap";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Check if user is logged in
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
  }

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // ✅ Hide Navbar completely on Dashboard pages
  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <nav className={`navbar slide-down ${darkMode ? "dark-mode-nav" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img
            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757011136/Header-logo_uf8eiy.png"
            alt="e Cyber Cafe"
            style={{ height: "50px", width: "130px" }}
          />
        </Link>

        <div className="nav-right">
          <div className="nav-links desktop">
            {/* ✅ If user is not logged in */}
            {!user ? (
              <>
                <Link to="/" className="nav-link fw-bold">Home</Link>
                <Link to="/Services" className="nav-link fw-bold">Services</Link>
                <Link to="/about" className="nav-link fw-bold">About Us</Link>
                <Link to="/Jobs" className="nav-link fw-bold">Jobs</Link>
                <Link to="/tools" className="nav-link fw-bold">Tools</Link>
                <Link to="/login" className="nav-link fw-bold">Login</Link>
                <Link to="/signup" className="nav-link fw-bold">Register</Link>
              </>
            ) : (
              // ✅ If user is logged in (Home Page only)
              <>
                
                <Link to="/dashboard" className="nav-link fw-bold">Dashboard</Link>
                <span className="nav-link username">
                  {user.name ? `Hi, ${user.name}` : "User"}
                </span>
                <Button variant="danger" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {!user ? (
          <>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/Services" className="nav-link" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/Jobs" className="nav-link" onClick={() => setMenuOpen(false)}>
              Jobs
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/tools" className="nav-link" onClick={() => setMenuOpen(false)}>
              Tools
            </Link>
            <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <span className="nav-link username">
              {user.name ? `Hi, ${user.name}` : "User"}
            </span>
            <Button variant="danger" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
