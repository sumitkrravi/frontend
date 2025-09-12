import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FormRequest from "./pages/FormRequest";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ProtectedRoute from "./components/ProtectedRoute";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import About from "./pages/About";

// ✅ Toastify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ DarkMode Context import
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const token = localStorage.getItem("token");

  return (
    <DarkModeProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar /> {/* Common navbar across pages */}

          <div className="flex-grow-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />

              {/* Agar user login hai to login/signup wapas na khule */}
              <Route
                path="/signup"
                element={token ? <Navigate to="/dashboard" /> : <Signup />}
              />
              <Route
                path="/login"
                element={token ? <Navigate to="/dashboard" /> : <Login />}
              />

              {/* Protected Routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              {/* Other Routes */}
              <Route path="/form-request" element={<FormRequest />} />
              <Route path="/services" element={<Services />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* ✅ Footer */}
          <Footer />

          {/* ✅ Toast container globally add */}
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
