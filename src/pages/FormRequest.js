// FormRequest.js
import React from "react";
import { useLocation } from "react-router-dom";

export default function FormRequest() {
  const location = useLocation();
  const selectedService = location.state?.serviceName || "";

  return (
    <div className="container py-4">
      <h2 className="mb-4">Apply for: {selectedService}</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Service Name</label>
          <input
            type="text"
            className="form-control"
            value={selectedService}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter full name" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input type="tel" className="form-control" placeholder="Enter mobile number" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Documents</label>
          <input type="file" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  );
}
