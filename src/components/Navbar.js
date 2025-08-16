// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand" to="/">e-Cyber Café</Link>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          
          {/* <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li> */}

          {!user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <span className="nav-link">Welcome, {user.name.split(" ")[0]}</span>
              </li>
              {/* <li className="nav-item">
                <button className="btn btn-d  anger btn-sm ms-2" onClick={handleLogout}>Logout</button>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
