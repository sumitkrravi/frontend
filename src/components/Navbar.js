import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useContext(DarkModeContext); // ✅ global context
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar slide-down ${darkMode ? "dark-mode-nav" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757011136/Header-logo_uf8eiy.png"
            alt="e Cyber Cafe"
            style={{ height: "50px", width: "130px" }}
          />
        </Link>

        <div className="nav-right">
          <div className="nav-links desktop">
            {!user ? (
              <>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Service" className="nav-link">Services</Link>
                <Link to="/login" className="nav-link">Login</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <span className="nav-link username">Welcome, {user.name.split(" ")[0]}</span>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>

          <div className={`dark-toggle ${darkMode ? "rotate" : ""}`} onClick={toggleDarkMode}>
            {darkMode ? "🌞" : "🌙"}
          </div>

          <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {!user ? (
          <>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}><FaHome /> Home</Link>
            <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}><FaSignInAlt /> Login</Link>
            <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}><FaUserPlus /> Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}><FaTachometerAlt /> Dashboard</Link>
            <span className="nav-link username">Welcome, {user.name.split(" ")[0]}</span>
            <button className="logout-btn" onClick={handleLogout}><FaSignOutAlt /> Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
