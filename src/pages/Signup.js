import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../Loader.css"; // 👈 same loader css use hoga

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false); // 👈 loader state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 loader on
    try {
      const res = await axios.post(
        "https://e-backend-bwha.onrender.com/api/auth/signup",
        formData
      );

      // http://localhost:5000/api/auth/signup for local
      // https://e-backend-bwha.onrender.com/api/auth/signup for Online

      toast.success(res.data.message || "Signup successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false); // 👈 loader off
    }
  };

  return (
    <div className="min-vh-200 d-flex align-items-center justify-content-center bg-light px-3">
      {/* 👇 Loader Overlay */}
      {loading && (
        <div className="loader-overlay">
          <div className="text-center">
            <img src="/loader.svg" alt="Loading..." />
            <p>Creating your account...</p>
          </div>
        </div>
      )}

      <div className="card shadow p-4 w-100" style={{ maxWidth: "450px" }}>
        <h2 className="text-center text-primary mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Create a password"
              required
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="d-grid mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading} // 👈 disable button while loading
            >
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
  );
}
