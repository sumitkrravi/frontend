// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  // Add or remove body dark class
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
        <Link to="/" className="nav-logo">e-Cyber Café</Link>

        {/* all right side */}
        <div className="nav-right">

          {/* Menu links */}
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {!user ? (
              <>
                <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>Signup</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <span className="nav-link username">Welcome, {user.name.split(" ")[0]}</span>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
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
          <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </nav>
  );
    }
