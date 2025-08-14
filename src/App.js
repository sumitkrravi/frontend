import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FormRequest from "./pages/FormRequest";
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

// ✅ Toastify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Common navbar across pages */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Admin dashboard route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* User dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Other routes */}
        <Route path="/form-request" element={<FormRequest />} />
      </Routes>

      {/* ✅ Toast container globally add */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
