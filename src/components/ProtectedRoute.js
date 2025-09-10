import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // localStorage me token check karo
  const token = localStorage.getItem("token");

  if (!token) {
    // agar login nahi hai to login page redirect
    return <Navigate to="/login" replace />;
  }

  // agar login hai to children component render hoga (jaise Dashboard ya AdminDashboard)
  return children;
}
