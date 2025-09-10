import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  // ✅ login check (localStorage me token ho to user login maan lo)
  const isLoggedIn = !!localStorage.getItem("token");

  // ---------- Dashboard Footer ----------
  if (isLoggedIn) {
    return (
      <footer className="dashboard-footer">
        <div className="dashboard-footer-content">
          <p>© 2025 e-Cyber Cafe | All rights reserved.</p>
          <p>Need help? Contact helpsumitravi@gmail.com</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com"><FaFacebookF /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
        </div>
      </footer>
    );
  }

  // ---------- Public Footer ----------
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        {/* LEFT SECTION */}
        <div className="footer-column">
          <h2 className="footer-title">e Cyber Cafe</h2>
          <p className="footer-description">
            An e-Cyber Cafe is a place where people can use computers and the
            internet to do both offline and virtual work.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com"><FaFacebookF /></a>
            <a href="https://www.twitter.com"><FaTwitter /></a>
            <a href="https://www.instagram.com"><FaInstagram /></a>
            <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* CENTER SECTION (Quick Links) */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Service</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* RIGHT SECTION (Legal Info) */}
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
            <li><a href="/Terms&Condition">Terms of Service</a></li>
            <li><a href="/CookiesPolicy">Cookies Policy</a></li>
            <li><a href="/Refund">Refunds</a></li>
          </ul>
        </div>

        {/* ADDITIONAL SECTION (Contact Info) */}
        <div className="footer-column">
          <h3>Contact Information</h3>
          <p>Email: helpsumitravi@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Ranchi, Jharkhand, IN</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; e-Cyber Cafe All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
