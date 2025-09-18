import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import services from "../data/ServicesData";
// import Breadcrumbs from "../components/Breadcrumbs";
// import "../components/Breadcrumbs.css";

export default function Service() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const navigate = useNavigate();

    // Check login
    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCardClick = (service) => {
        if (!isLoggedIn) {
            // direct login page pe bhejna
            navigate("/login", { state: { showLoginMsg: true } });
        } else {
            console.log("Service clicked:", service);
            // ✅ yaha modal open ya API call karna h
        }
    };

    return (
        <div className="page-container">
            <div className="w-100 mb-2 justify-content-center">
                <div style={{ maxWidth: "900px", width: "100%" }}>
                    {/* <Breadcrumbs /> */}
                </div>
            </div>

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
                                        {service.Price && <Card.Text>Price: {service.Price}</Card.Text>}
                                        <Button
                                            variant="primary"
                                            onClick={() => handleCardClick(service)}
                                        >
                                            {service.action}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
}
