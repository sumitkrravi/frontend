import React from "react";
import { Link } from "react-router-dom";
import PhotoSlider from "../components/ServicesSlider.js";

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
          <Link to="/Services" className="btn btn-light btn-lg mt-4">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Service Card Slider Section */}
      <section>
          <PhotoSlider />
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