import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Footer import
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
      <div className="d-flex flex-column min-vh-100">
        <Navbar /> {/* Common navbar across pages */}

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            
            {/* Admin dashboard route */}
            <Route path="/admin" element={<AdminDashboard />} />
            {/* User dashboard route */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Other routes */}
            <Route path="/form-request" element={<FormRequest />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />

          </Routes>
        </div>

        {/* ✅ Footer */}
        <Footer />

        {/* ✅ Toast container globally add */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
