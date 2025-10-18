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
                <Link to="/contact" className="nav-link fw-bold">Contact Us</Link>
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
              <img src="/icons/home.svg" alt="Home" className="menu-icon bold-text" />              Home
            </Link>
            <Link to="/Services" className="nav-link" onClick={() => setMenuOpen(false)}>
            <img src="/icons/shopping-cart.svg" alt="Service" className="menu-icon" />
              Services
            </Link>
            <Link to="/Jobs" className="nav-link" onClick={() => setMenuOpen(false)}>
            <img src="/icons/jobs.svg" alt="Register" className="menu-icon" />
              Jobs
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            <img src="/icons/about.svg" alt="Teams" className="menu-icon" />
              About Us
            </Link>
            <Link to="/tools" className="nav-link" onClick={() => setMenuOpen(false)}>
            <img src="/icons/tools.svg" alt="Teams" className="menu-icon" />
              Tools
            </Link>
            <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>
            <img src="/icons/login.svg" alt="Teams" className="menu-icon" />
              Login
            </Link>
            <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>
            <img src="/icons/signup.svg" alt="Teams" className="menu-icon" />
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>
            <img src="/icons/dashboard.svg" alt="Teams" className="menu-icon" />
              Dashboard
            </Link>
            <span className="nav-link username">
              <img src="/icons/circle-user.svg" alt="Teams" className="menu-icon" />
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
