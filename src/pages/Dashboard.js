import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import services from "../data/ServicesData";
import ServiceRequestModal from "../components/ServiceRequestModal";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState("profile");
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formRequests = [
    { id: 1, formName: "SSC CHSL 2025", status: "Completed", downloadLink: "#", submittedDate: "2025-07-01" },
    { id: 2, formName: "Railway Group D", status: "Pending", downloadLink: null, submittedDate: "2025-07-03" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="profile-section p-4">
            <h3 className="text-primary mb-4">Profile Information</h3>
            <div className="d-flex flex-column flex-md-row align-items-center gap-4">
              <img
                src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757510999/Picsart_25-09-10_18-55-53-749_hunawx.png"
                alt="Profile"
                className="rounded-circle border border-2 border-primary"
                width="130"
                height="130"
              />
              <div>
                <h5><strong>Name:</strong> {user.name.toUpperCase()}</h5>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Joined:</strong> 11-10-2025</p>
              </div>
            </div>
          </div>
        );

      case "services":
        return (
          <Container className="py-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
              <h3 className="text-primary mb-3">Available Services</h3>
              <Form.Control
                type="text"
                placeholder="Search Service 🔍"
                className="w-30 text-center"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Row>
              {filteredServices.length === 0 ? (
                <p>No services found.</p>
              ) : (
                filteredServices.map((service, idx) => (
                  <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
                    <Card className="shadow-sm text-center h-100">
                      <Card.Img
                        variant="top"
                        src={service.image}
                        style={{ height: "150px", objectFit: "contain", padding: "1rem" }}
                      />
                      <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        {service.Price && <Card.Text>Price: {service.Price}</Card.Text>}
                        <Card.Text style={{ color: service["Service Available"] ? "green" : "red" }}>
                          {service["Service Available"] ? "Service Available" : "Service Not Available"}
                        </Card.Text>
                        <Button variant="primary" onClick={() => setSelectedService(service)}>
                          {service.action}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Container>
        );

      case "status":
        return (
          <div className="p-4">
            <h3 className="text-primary mb-4">Your Form Requests</h3>
            <div className="table-responsive">
              <table className="table table-bordered align-middle text-center">
                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Form Name</th>
                    <th>Status</th>
                    <th>Submitted</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {formRequests.map((req, index) => (
                    <tr key={req.id}>
                      <td>{index + 1}</td>
                      <td>{req.formName}</td>
                      <td>
                        <span
                          className={`badge bg-${req.status === "Completed" ? "success" : "warning"}`}
                        >
                          {req.status}
                        </span>
                      </td>
                      <td>{req.submittedDate}</td>
                      <td>
                        {req.status === "Completed" && req.downloadLink ? (
                          <a href={req.downloadLink} className="btn btn-sm btn-outline-primary">
                            Download
                          </a>
                        ) : (
                          <span className="text-muted small">Not Ready</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-wrapper d-flex flex-column">
      {/* Header */}
      <header className="dashboard-header d-flex justify-content-between align-items-center px-3">
        <div className="d-flex align-items-center gap-3">
          <Button
            variant="light"
            className="d-md-none border-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="bi bi-list fs-3"></i>
          </Button>
          <Link to="/" className="text-white m-0 fw-bold text-decoration-none d-flex align-items-center gap-4">
            <img src="/logo192.png" alt="logo" width="45" />
            e-Cyber Cafe
          </Link>
        </div>

        {/* Hamburger toggle (visible on all sizes) */}
        <Button
          variant="outline-primary"
          className="mb-3"
          onClick={() => setSidebarOpen((s) => !s)}
          aria-label="Toggle sidebar"
        >
          ☰
        </Button>



        <div className="d-flex align-items-center gap-4 text-white">
          <i className="bi bi-bell fs-5"></i>
          <i className="bi bi-envelope fs-5"></i>

          {/* profile with hover dropdown */}
          <div
            className="profile-hover d-flex align-items-center gap-2"
            tabIndex="0" /* makes it focusable for keyboard users */
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="https://res.cloudinary.com/dncdnjsw9/image/upload/v1757510999/Picsart_25-09-10_18-55-53-749_hunawx.png"
              alt="profile"
              className="rounded-circle border border-2 border-white"
              width="35"
              height="35"
            />
            <span>{user.name.toUpperCase()}</span>

            {/* dropdown shown on hover / focus */}
            <div className="profile-dropdown bg-white text-dark rounded shadow p-2">
              <div className="d-flex flex-column">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-1"></i> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Area */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <ul className="menu-list">
            <li className={activeSection === "profile" ? "active" : ""} onClick={() => setActiveSection("profile")}>
              <i className="bi bi-person-circle me-2"></i> Profile
            </li>
            <li className={activeSection === "services" ? "active" : ""} onClick={() => setActiveSection("services")}>
              <i className="bi bi-gear-wide-connected me-2"></i> Services
            </li>
            <li className={activeSection === "status" ? "active" : ""} onClick={() => setActiveSection("status")}>
              <i className="bi bi-list-check me-2"></i> Status
            </li>
          </ul>
          <div className="logout-section">
            <Button variant="danger" size="sm" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-2"></i> Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content flex-grow-1">{renderContent()}</main>
      </div>

      {selectedService && (
        <ServiceRequestModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
