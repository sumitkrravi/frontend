// src/components/ServiceRequestModal.js
import React, { useState } from "react";
import axios from "axios";
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
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error on change
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form before submit
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.mobile.trim()) tempErrors.mobile = "Mobile number is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
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

      await axios.post("http://localhost:5000/api/form-request", data, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });

      alert("✅ Request submitted successfully!");
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
      alert("❌ Error submitting request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content shadow p-4 rounded">
        <h4 className="mb-3">
          Apply for {service.name}
        </h4>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
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
              placeholder="Optional"
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
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
