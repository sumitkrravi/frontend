// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Toast import
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
      id: 1,
      formName: "SSC CHSL 2025",
      status: "Completed",
      downloadLink: "#",
      submittedDate: "2025-07-01",
    },
    {
      id: 2,
      formName: "Railway Group D",
      status: "Under Process",
      downloadLink: null,
      submittedDate: "2025-07-03",
    },
  ];

  const services = [
    {
      name: "Life Insurance Policy (LIC)",
      image: "data:image/png;base64,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",
      action: "Apply",
    },
    {
      name: "Aadhar Download",
      image: "https://uidai.gov.in/images/langPage/Page-1.svg",
      action: "Download",
    },
    {
      name: "PAN Card Apply",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_of_Income_Tax_Department_India.png/250px-Logo_of_Income_Tax_Department_India.png",
      action: "Apply",
    },
    {
      name: "Voter ID Status",
      image: "https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV",
      action: "Check",
    },
    {
      name: "Passport Apply",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Indian_Passport_%28e-Passport%2C_2024%29.svg/1200px-Indian_Passport_%28e-Passport%2C_2024%29.svg.png",
      action: "Apply",
    },
    {
      name: "Ayushmaan Bharat",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Ayushman_Bharat_logo.png/250px-Ayushman_Bharat_logo.png",
      action: "View",
    },
    {
      name: "Income Certificate (Jharkhand)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png",
      action: "Apply",
    },
    {
      name: "Caste Certificate (Jharkhand)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png",
      action: "Apply",
    },
    {
      name: "Residential Certificate (Jharkhand)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png",
      action: "Apply",
    },
    {
      name: "All Types Examination Forms",
      image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
      action: "Apply",
    }
  ];

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
