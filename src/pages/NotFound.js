import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NotFound.css"; // Custom CSS for NotFound page

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center px-3">
      {/* Illustration Image */}
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702899-3119148.png"
        alt="404 Not Found"
        style={{ maxWidth: "400px", width: "100%", marginBottom: "2rem" }}
      />

      {/* Heading */}
      <h2 className="display-4 text-primary fw-bold">Page Not Found</h2>
      <p className="text-muted mb-4">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <button
  className="btn btn-primary btn-lg shadow-lg px-4 rounded-pill btn-animated"
  onClick={() => navigate("/")}
>
  🚀 Go to Home Page
</button>
    </div>
  );
}
