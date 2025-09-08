import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import { DarkModeContext } from "../context/DarkModeContext";
import "../Loader.css"; // loader css

export default function Signup() {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    if (!formData.password.trim()) newErrors.password = "Password is required!";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://e-backend-bwha.onrender.com/api/auth/signup",
        formData
      );

      toast.success(res.data.message || "Signup successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-vh-100 d-flex align-items-center justify-content-center px-3 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      {/* Loader */}
      {loading && (
        <div className="loader-overlay">
          <div className="text-center">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_usmfx6bp.json"
              style={{ height: "150px", width: "150px" }}
            />
            <p>Creating your account...</p>
          </div>
        </div>
      )}

      {/* Signup Card */}
      <div
        className="card shadow-lg p-4 w-100 my-5"
        style={{
          maxWidth: "900px",
          borderRadius: "12px",
          backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
          color: darkMode ? "#ffffff" : "#212529",
          boxShadow: darkMode ? "0 8px 24px rgba(0,0,0,0.5)" : "0 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        <div className="row g-0 align-items-center">
          {/* Left Lottie Animation */}
          <div className="col-md-6 text-center p-3">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "200px", width: "200px" }}
              className="d-block mx-auto my-3"
            />
          </div>

          {/* Right Form */}
          <div className="col-md-6">
            <h2 className="text-center text-primary mb-4">Create Account</h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  name="name"
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="error-text animate-error">{errors.name}</div>}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  name="email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error-text animate-error">{errors.email}</div>}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="error-text animate-error">{errors.password}</div>
                )}
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>

            <div className="text-center">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none">
                  Login here
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
