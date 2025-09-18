// src/components/ServiceRequestModal.js
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Modal.css";

export default function ServiceRequestModal({ service, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    description: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "mobile") {
      // sirf digits aur max 10
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, mobile: value });
      }
    } else if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: "" });
  };

  // Validate form before submit
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";

    if (!formData.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length !== 10) {
      tempErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else {
      // Simple email regex check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Enter a valid email address";
      }
    }

    // Check consent checkbox
    const consentCheckbox = document.getElementById("consentCheck");
    if (!consentCheckbox || !consentCheckbox.checked) {
      tempErrors.consent = "You need to check the box to proceed";
    }

    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      // FormData for file upload
      const data = new FormData();
      data.append("serviceName", service.name);
      data.append("name", formData.name);
      data.append("mobile", formData.mobile);
      data.append("email", formData.email);
      data.append("description", formData.description);
      if (formData.file) data.append("file", formData.file);

      await axios.post("https://getform.io/f/bpjzxxlb", data, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });

      toast.success("Request submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
      setFormData({
        name: "",
        mobile: "",
        email: "",
        description: "",
        file: null,
      });
      onClose();
    } catch (error) {
      console.error(error);
      toast.error(" Server Down!! Try After Sometime.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content shadow p-4 rounded bg-white">
        <h4 className="mb-3">Apply for {service.name}</h4>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Mobile */}
          <div className="mb-3">
            <label className="form-label">
              Mobile No <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description / Details</label>
            <textarea
              className="form-control"
              name="description"
              placeholder="Write additional details (Optional)"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* File Upload */}
          <div className="mb-3">
            <label className="form-label">Upload File (Optional)</label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={handleChange}
            />
          </div>

          {/* checkbox  */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="consentCheck"
              required
              defaultChecked
            />
            <label className="form-check-label" htmlFor="consentCheck">
              I consent to the processing of my personal data for this service request. <span style={{ color: "red" }}>*</span>
            </label>
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? (
                <>
                  Submitting
                  <span className="loader-circle"></span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
