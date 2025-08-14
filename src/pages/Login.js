// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ Toast import

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      // ✅ Save user and token to localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      // ✅ Success Toast
      toast.success(res.data.message || "Login successful", {
        position: "top-right",
        autoClose: 3000,
      });

      // ✅ Redirect after short delay (so toast visible)
      setTimeout(() => navigate("/dashboard"), 1000);

    } catch (error) {
      console.error("Login error:", error);
      // ✅ Error Toast
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
