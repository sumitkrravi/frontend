import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter 10-digit phone";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log(formData); // Send to backend or Getform.io
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setLoading(false);
    }, 1500); // simulate API call
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-grid">
        <div className="contact-form">
          {submitted && (
            <p className="success-msg">Thank you! We will contact you soon.</p>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <label>Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {errors.name && (
                <div className="error-text animate-error">{errors.name}</div>
              )}
            </div>

            {/* Email */}
            <label>Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
              {errors.email && (
                <div className="error-text animate-error">{errors.email}</div>
              )}
            </div>

            {/* Phone */}
            <label>Phone</label>
            <div className="input-wrapper">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                maxLength={10}
              />
              {errors.phone && (
                <div className="error-text animate-error">{errors.phone}</div>
              )}
            </div>

            {/* Message */}
            <label>Message</label>
            <div className="input-wrapper">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
              {errors.message && (
                <div className="error-text animate-error">{errors.message}</div>
              )}
            </div>

            <button type="submit" disabled={loading}>
              {loading ? (
                <span className="loader"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        <div className="contact-info text-center">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Harmu Ranchi Jharkhand India</p>
          <p><strong>Phone:</strong> +91 7370927343</p>
          <p><strong>Email:</strong> helpsumitravi@gmail.com</p>
          <div className="map">
            <iframe
              title="ecybercafe-location"
              src="https://maps.google.com/maps?q=Harmu%Ranchi&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
