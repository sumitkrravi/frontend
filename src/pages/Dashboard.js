// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Toast import

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect if not logged in
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // ✅ Clear all stored data
    localStorage.clear();

    // ✅ Show toast notification
    toast.error("You have been logged out", {
      position: "top-right",
      autoClose: 2000,
    });

    // ✅ Delay redirect so toast is visible
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  if (!user) return null;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-success mb-0">Welcome, {user.name} 🎉</h4>
          <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <h5><strong>Email:</strong> {user.email}</h5>
      </div>
    </div>
  );
}
