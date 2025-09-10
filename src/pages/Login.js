// src/pages/Login.js
import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import { DarkModeContext } from "../context/DarkModeContext";
import "../Loader.css";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useContext(DarkModeContext);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const toastShown = useRef(false); // ✅ guard for toast

  // ✅ Agar already login hai to login page access na kare
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token) {
      if (user.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
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
        "https://e-backend-bwha.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      toast.success(res.data.message || "Login successful!");

      if (res.data.user.role === "admin") navigate("/admin");
      else navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Agar ServiceDetails se aya hai to info toast dikhao
  useEffect(() => {
    if (location.state?.showLoginMsg && !toastShown.current) {
      toast.info("Please login to use this service 🔑");
      toastShown.current = true;
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center px-3"
      style={{
        backgroundColor: darkMode ? "#1a1a1a" : "#f8f9fa",
        color: darkMode ? "#ffffff" : "#212529",
      }}
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
            <p>Please Wait...</p>
          </div>
        </div>
      )}

      {/* Login Card */}
      <div
        className="card shadow-lg p-4 w-100 my-5"
        style={{
          maxWidth: "900px",
          borderRadius: "12px",
          backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
          color: darkMode ? "#ffffff" : "#212529",
          boxShadow: darkMode
            ? "0 8px 24px rgba(0,0,0,0.5)"
            : "0 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        <div className="row g-0 align-items-center">
          {/* Left form */}
          <div className="col-md-6 p-3">
            <h2 className="text-center text-primary mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  name="email"
                  type="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  } ${darkMode ? "dark-mode-input" : ""}`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="error-text animate-error">{errors.email}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  } ${darkMode ? "dark-mode-input" : ""}`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="error-text animate-error">
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>

              <div className="text-center">
                <small>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-decoration-none">
                    Signup here
                  </Link>
                </small>
              </div>
            </form>
          </div>

          {/* Right Lottie illustration */}
          <div className="col-md-6 text-center p-3">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "200px", width: "200px" }}
              className="d-block mx-auto my-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
