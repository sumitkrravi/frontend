// src/pages/Tools.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const pdftoolsList = [
  { name: "Pdf Compress", route: "./pdf-compress" },
  { name: "Pdf Merge", route: "./pdf-merge" },
  { name: "Pdf to Image", route: "./pdf-to-image" },
  { name: "Pdf to Word", route: "./pdf-to-word" },
  { name: "Pdf to Excel", route: "./pdf-to-excel" },
  { name: "Pdf to Ppt", route: "./pdf-to-ppt" },
];
const imgtoolsList = [
  { name: "Image Compress", route: "./image-compress" },
  { name: "Image to Pdf", route: "./image-to-pdf" },
  { name: "Resize Image", route: "./image-resize" },
  { name: "Crop Image", route: "./image-crop" },
  { name: "Rotate Image", route: "./image-rotate" },
  
];

export default function Tools() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Tools</h2>
      <h2 className=" mb-4">Pdf tools</h2>
      <Row>
        {pdftoolsList.map((tool, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <Card.Title>{tool.name}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => navigate(tool.route)}
                >
                  Open
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* image tools  */}
      <h2 className=" mb-4">Image tools</h2>
      <Row>
        {imgtoolsList.map((tool, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <Card.Title>{tool.name}</Card.Title>
                <Button
                  variant="success"
                  onClick={() => navigate(tool.route)}
                >
                  Open
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
