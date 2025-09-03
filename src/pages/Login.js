import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://e-backend-bwha.onrender.com/api/auth/login", formData);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      toast.success(res.data.message || "Login successful", { theme: "colored" });

      if (res.data.user.role === "admin") {
        navigate("/Admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong", { theme: "colored" });
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