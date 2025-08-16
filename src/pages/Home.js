import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to e-Cyber Café</h1>
          <p className="lead mt-3">
            Your one-stop digital solution for cyber services and online applications.
          </p>
          <Link to="/form-request" className="btn btn-light btn-lg mt-4">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-globe2 fs-1 text-primary mb-3"></i>
              <h5>Online Form Filling</h5>
              <p>Apply for government services, exams, and more — fast and hassle-free.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-printer fs-1 text-primary mb-3"></i>
              <h5>Printing & Scanning</h5>
              <p>High-quality printing, photocopying, and document scanning services.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-person-check-fill fs-1 text-primary mb-3"></i>
              <h5>Customer Support</h5>
              <p>Friendly support to help you every step of the way in your application journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center">
        <div className="container">
          <h3>Already Registered?</h3>
          <Link to="/login" className="btn btn-outline-primary btn-lg mt-3">
            Go to Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}