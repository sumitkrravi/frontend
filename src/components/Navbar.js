// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar slide-down">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757011136/Header-logo_uf8eiy.png"
            alt="e Cyber Cafe"
            style={{ height: "50px", width: "130px" }}
          />
        </Link>

        {/* Right side items */}
        <div className="nav-right">
          {/* Desktop links (without icons) */}
          <div className="nav-links desktop">
            {!user ? (
              <>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Service" className="nav-link">Services</Link>
                <Link to="/login" className="nav-link">Login</Link>
                {/* <Link to="/signup" className="nav-link">Signup</Link> */}
              </>
            ) : (
              <>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <span className="nav-link username">
                  Welcome, {user.name.split(" ")[0]}
                </span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Dark mode emoji toggle */}
          <div
            className={`dark-toggle ${darkMode ? "rotate" : ""}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "🌞" : "🌙"}
          </div>

          {/* Hamburger for mobile */}
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

      {/* Mobile dropdown menu (with icons) */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {!user ? (
          <>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaHome style={{ marginRight: "8px" }} /> Home
            </Link>
            <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaSignInAlt style={{ marginRight: "8px" }} /> Login
            </Link>
            <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaUserPlus style={{ marginRight: "8px" }} /> Signup
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaTachometerAlt style={{ marginRight: "8px" }} /> Dashboard
            </Link>
            <span className="nav-link username">
              Welcome, {user.name.split(" ")[0]}
            </span>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt style={{ marginRight: "8px" }} /> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}