import React, { useState } from "react";
import "./Navbar.css"; // styling alag file me rakhenge

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">E-Cyber Café</div>

        {/* Hamburger button */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Menu items niche open hoke push karenge */}
      <div className={`menu ${isOpen ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
