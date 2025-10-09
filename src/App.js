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
// import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import About from "./pages/About";
import JobsPage from "./pages/JobsPage";
import JobDetail from "./pages/JobDetail";
import Tools from "./pages/Tools";  // Tools Page Import
import PdfCompress from "./pages/pages-tools/Pdf-Compress";  // Pdf Compress Tool Import
import PdfMerge from "./pages/pages-tools/Pdf-Merge";  // Pdf Merge Tool Import
import PdfWord from "./pages/pages-tools/Pdf-Word";  // Pdf to Word Tool Import
import PdfExcel from "./pages/pages-tools/Pdf-Excel";  // Pdf to Excel Tool Import
import PdfPpt from "./pages/pages-tools/Pdf-Ppt";  // Pdf to Ppt Tool Import  
import ImgCompress from "./pages/pages-tools/Img-Compress";  // Image Compress Tool Import
import ImgPdf from "./pages/pages-tools/Img-Pdf";  // Image to Pdf Tool Import
import ImgResize from "./pages/pages-tools/Img-Resize";  // Resize Image Tool Import
import ImgCrop from "./pages/pages-tools/Img-Crop";  // Crop Image Tool Import
import ImgRotate from "./pages/pages-tools/Img-Rotate";  // Rotate Image Tool Import


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
              {/* <Route path="/teams" element={<Teams />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/jobs" element={<JobsPage />} /> {/* Jobs Page Route */}
              <Route path="/jobs/:id" element={<JobDetail />} />     {/* Job Detail */}
              {/* Pdf Compress Tool Route */}
              <Route path="/tools" element={<Tools />} />  {/* Tools Page Route */}
              <Route path="/tools/pdf-compress" element={<PdfCompress />} />
              <Route path="/tools/pdf-merge" element={<PdfMerge />} />  
              <Route path="/tools/pdf-to-word" element={<PdfWord />} />  
              <Route path="/tools/pdf-to-excel" element={<PdfExcel />} />
              <Route path="/tools/pdf-to-ppt" element={<PdfPpt />} />  


              {/* IMage Compress Tool Route */}
              <Route path="/tools/image-compress" element={<ImgCompress />} />  
              <Route path="/tools/image-to-pdf" element={<ImgPdf />} />
              <Route path="/tools/resize-image" element={<ImgResize />} />  
              <Route path="/tools/crop-image" element={<ImgCrop />} />  
              <Route path="/tools/rotate-image" element={<ImgRotate />} />

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
