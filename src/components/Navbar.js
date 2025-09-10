import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { DarkModeContext } from "../context/DarkModeContext";
import { Button } from "react-bootstrap";

export default function Navbar() {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
    user = null;
  }

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
                <Link to="/" className="nav-link fw-bold">Home</Link>
                <Link to="/Service" className="nav-link fw-bold">Services</Link>
                <Link to="/login" className="nav-link fw-bold">Login</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="nav-link fw-bold">Dashboard</Link>
                <span className="nav-link username ">Welcome, {user.name.split(" ")[0]}</span>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>              </>
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

      {/* <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {!user ? (
          <>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}><FaHome /> Home</Link>
            <Link to="/Service" className="nav-link" onClick={() => setMenuOpen(false)}><FaUserPlus /> Service</Link>
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
      </div> */}

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        {!user ? (
          <>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              <img src="/icons/home.svg" alt="Home" className="menu-icon bold-text" />
              Home
            </Link>
            <Link to="/Service" className="nav-link" onClick={() => setMenuOpen(false)}>
              <img src="/icons/shopping-cart.svg" alt="Service" className="menu-icon" />
              Service
            </Link>
            <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>
              <img src="/icons/login.svg" alt="Login" className="menu-icon" />
              Login
            </Link>
            <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>
              <img src="/icons/circle-user.svg" alt="Register" className="menu-icon" />
              Register
            </Link>
            <Link to="/teams" className="nav-link" onClick={() => setMenuOpen(false)}>
              <img src="/icons/users-alt.svg" alt="Teams" className="menu-icon" />
              Teams
            </Link>

          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>
              <img src="/icons/home.svg" alt="Dashboard" className="menu-icon" />
              Dashboard
            </Link>
            <a href="#Request-track" className="nav-link">
              <img src="/icons/track.svg" alt="Check Status" className="menu-icon" />

              Go to Your Requests
            </a>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>

          </>
        )}
      </div>
    </nav>
  );
}
