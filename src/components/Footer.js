import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  // Screen width detect
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // ---------- Mobile Footer ----------
  if (isMobile) {
    return (
      <footer className="dashboard-footer custom-footer mobile-footer">
        <div className="dashboard-footer-content footer-content">
          <div className="">
            <h3 className="fw-bold" >e Cyber Cafe</h3>
            {/* <div className="quick-links-mobile fw-bold">
              <a href="/">Home</a>
              <a href="/services">Service</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
            </div> */}
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
          </div>
        </div>
      </footer>
    );
  }

  // ---------- Desktop Footer ----------
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        {/* LEFT SECTION */}
        <div className="footer-column">
          <h2 className="footer-title fw-bold">e Cyber Cafe</h2>
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

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
            <li><a href="/Terms&Condition">Terms of Service</a></li>
            <li><a href="/CookiesPolicy">Cookies Policy</a></li>
            <li><a href="/Refund">Refunds</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Information</h3>
          <p>Email: helpsumitravi@gmail.com</p>
          <p>Phone: +91 7370927343</p>
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
