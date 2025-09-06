// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Toast import
import services from "../data/ServicesData"; // ✅ Import services data
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";


export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

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

  // Dummy data — later backend se ayega
  const formRequests = [
    {
      id: 1,
      formName: "SSC CHSL 2025",
      status: "Completed",
      downloadLink: "#",
      submittedDate: "2025-07-01",
    },
    {
      id: 2,
      formName: "Railway Group D",
      status: "Pending",
      downloadLink: null,
      submittedDate: "2025-07-03",
    },
    {
      id: 3,
      formName: "SSC CHSL 2025",
      status: "Completed",
      downloadLink: "#",
      submittedDate: "2025-07-01",
    },
    {
      id: 4,
      formName: "Railway Group D",
      status: "Under Process",
      downloadLink: null,
      submittedDate: "2025-07-03",
    },
  ];
  
  // Filter services based on search term

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ When user clicks on a service card
  const handleCardClick = (service) => {
    navigate("/form-request", { state: { serviceName: service.name } });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-success mb-0">Welcome, {user.name} 🎉</h4>
          <div className="text-center mt-4">
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
        <h5><strong>Email:</strong> {user.email}</h5>
      </div>

      
      {/* servive cards  */}
      <Container className="py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <h2 className="text-center text-primary mb-4">Apply Services :</h2>
          <Form.Control
            type="text"
            placeholder="Search Service 🔍︎"
            className="me-2 w-auto text-center text-primary mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Row>
          {filteredServices.length === 0 ? (
            <p className="text-muted">No services found.</p>
          ) : (
            filteredServices.map((service, idx) => (
              <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
                <Card className="shadow-sm h-100 text-center">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    style={{ height: "150px", objectFit: "contain", padding: "1rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Button variant="primary" onClick={() => handleCardClick(service)}>
                      {service.action}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>

      {/* form status track table  */}
      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">Your Form Requests</h2>

        {formRequests.length === 0 ? (
          <p className="text-center">No Service Request found.</p>
        ) : (
          <div className="text-center table-responsive">
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
                        className={`badge bg-${request.status === "Completed" ? "success" : "warning" 
                          }`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td>{request.submittedDate}</td>
                    <td>
                      {request.status === "Completed" && request.downloadLink ? (
                        <a href={request.downloadLink} className="btn btn-sm btn-outline-primary">
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

    </div>

  );
}
