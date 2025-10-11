// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../data/ServicesData";
import "./Dashboard.css"; // apna CSS alag file me rakho
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import ServiceRequestModal from "../components/ServiceRequestModal";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [activeSection, setActiveSection] = useState("profile"); // 👈 Track sidebar section
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // set initial sidebar state based on window size and keep it responsive on resize
  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  if (!user) return null;

  // Dummy form requests (later backend fetch)
  const formRequests = [
    { id: 1, formName: "SSC CHSL 2025", status: "Completed", downloadLink: "#", submittedDate: "2025-07-01" },
    { id: 2, formName: "Railway Group D", status: "Pending", downloadLink: null, submittedDate: "2025-07-03" },
  ];

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className={`sidebar bg-primary text-white d-flex flex-column ${isSidebarOpen ? "open" : "closed"}`}
        style={{ width: isSidebarOpen ? "250px" : "0" }}
      >
        
        <div className="mb-5 text-center">
          <div
            className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto"
            style={{ width: "80px", height: "80px", fontSize: "2rem" }}
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h5 className="mt-3">{user.name}</h5>
          <p className="small">{user.email}</p>
        </div>

        <nav className="flex-grow-1">
          <ul className="list-unstyled">
            <li className="mb-3">
              <Button
                variant={activeSection === "profile" ? "light" : "outline-light"}
                className="w-100 text-start"
                onClick={() => setActiveSection("profile")}
              >
                Profile
              </Button>
            </li>
            <li className="mb-3">
              <Button
                variant={activeSection === "services" ? "light" : "outline-light"}
                className="w-100 text-start"
                onClick={() => setActiveSection("services")}
              >
                Services
              </Button>
            </li>
            <li className="mb-3">
              <Button
                variant={activeSection === "status" ? "light" : "outline-light"}
                className="w-100 text-start"
                onClick={() => setActiveSection("status")}
              >
                Status
              </Button>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
          <Button variant="danger" className="w-100" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {/* Hamburger toggle (visible on all sizes) */}
        <Button
          variant="outline-primary"
          className="mb-3"
          onClick={() => setIsSidebarOpen((s) => !s)}
          aria-label="Toggle sidebar"
        >
          ☰
        </Button>

        {/* Backdrop for small devices (click to close) */}
        <div
          className={`content-overlay ${isSidebarOpen ? "visible" : ""}`}
          onClick={() => setIsSidebarOpen(false)}
        />
        
        {/* Profile Section */}
        {activeSection === "profile" && (
          <div className="card shadow p-4 mb-4">
            <h4 className="text-success mb-3">Welcome, {user.name} 🎉</h4>
            <Row>
              <Col md={6}>
                <h6>
                  <strong>Full Name:</strong> {user.name}
                </h6>
                <h6>
                  <strong>Email:</strong> {user.email}
                </h6>
                <h6>
                  <strong>Account Created:</strong>{" "}
                  {user.createdAt ? new Date(user.createdAt).toDateString() : "N/A"}
                </h6>
              </Col>
            </Row>
          </div>
        )}

        {/* Services Section */}
        {activeSection === "services" && (
          <Container className="py-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
              <h2 className="text-primary mb-3">Apply Services :</h2>
              <Form.Control
                type="text"
                placeholder="Search Service 🔍︎"
                className="me-2 w-auto text-center"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Row>
              {filteredServices.length === 0 ? (
                <p className="text-muted">No services found.</p>
              ) : (
                filteredServices.map((service, idx) => {
                  return (
                    <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
                      <Card className="shadow-sm h-100 text-center">
                        <Card.Img
                          variant="top"
                          src={service.image}
                          style={{ height: "150px", objectFit: "contain", padding: "1rem" }}
                        />
                        <Card.Body>
                          <Card.Title>{service.name}</Card.Title>
                          {service.Price && <Card.Text>Price: {service.Price}</Card.Text>}
                          <Card.Text
                            style={{
                              color: service["Service Available"] ? "green" : "red",
                            }}
                          >
                            {service["Service Available"]
                              ? "Service Available"
                              : "Service Not Available"}
                          </Card.Text>
                          <Button variant="primary" onClick={() => handleCardClick(service)}>
                            {service.action}
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              )}
            </Row>
          </Container>
        )}

        {/* Status Section */}
        {activeSection === "status" && (
          <div className="my-5">
            <h2 className="text-center text-primary mb-4">Your Form Requests</h2>
            {formRequests.length === 0 ? (
              <p className="text-center">No Service Request found.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                  <thead className="table-primary">
                    <tr>
                      <th>S.N.</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Submitted</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formRequests.map((request, index) => (
                      <tr key={request.id}>
                        <td>{index + 1}</td>
                        <td>{request.formName}</td>
                        <td>
                          <span
                            className={`badge bg-${
                              request.status === "Completed" ? "success" : "warning"
                            }`}
                          >
                            {request.status}
                          </span>
                        </td>
                        <td>{request.submittedDate}</td>
                        <td>
                          {request.status === "Completed" && request.downloadLink ? (
                            <a
                              href={request.downloadLink}
                              className="btn btn-sm btn-outline-primary"
                            >
                              Download
                            </a>
                          ) : (
                            <span className="text-muted small">Not ready</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Service Request Modal */}
        {selectedService && (
          <ServiceRequestModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </div>
  );
}
