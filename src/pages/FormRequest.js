import React from "react";

export default function FormRequest() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h2 className="text-center text-primary mb-4">Apply for Form Fillup</h2>
            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Form Name / Service</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., SSC CHSL, RRB Group D"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Upload Document (PDF/JPG/PNG)</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Additional Message (Optional)</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Any special instruction for cyber café"
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
