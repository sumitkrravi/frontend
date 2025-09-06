import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../Loader.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // 👈 loader state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 loader on
    try {
      const res = await axios.post(
        "https://e-backend-bwha.onrender.com/api/auth/login",
        formData
      );

      // http://localhost:5000/api/auth/login for local
      // https://e-backend-bwha.onrender.com/api/auth/login for Online

      console.log("Login response:", res.data);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      toast.success(res.data.message || "Login successful", {
        theme: "colored",
      });

      if (res.data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data);
      toast.error(error.response?.data?.message || "Something went wrong", {
        theme: "colored",
      });
    } finally {
      setLoading(false); // 👈 loader off
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      {/* 👇 Loader Overlay */}
      {loading && (
        <div className="loader-overlay">
          <div className="text-center">
            <img src="/loader.svg" alt="Loading..." />
            <p>Please Wait...</p>
          </div>
        </div>
      )}

      <div className="card shadow p-4 w-100" style={{ maxWidth: "450px" }}>
        <h2 className="text-center text-primary mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <div className="text-center">
            <small>
              Create an account?{" "}
              <Link to="/signup" className="text-decoration-none">
                Signup here
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
