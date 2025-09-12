import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here you can integrate API or Getform.io
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-grid">
        <div className="contact-form">
          {submitted && <p className="success-msg">Thank you! We will contact you soon.</p>}
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              maxLength={10}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 Cyber Street, City, India</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> info@ecybercafe.com</p>
          <div className="map">
            <iframe
              title="ecybercafe-location"
              src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              style={{ width: "100%", height: "250px", border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
