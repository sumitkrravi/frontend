import React, { useState, useRef } from "react";
import imageCompression from "browser-image-compression";
import { PDFDocument } from "pdf-lib";
import "./Tools.css";
import { Container, Card, Button, Form, Spinner, Row, Col } from "react-bootstrap";

export default function ImagePdfCompress() {
  const [file, setFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileType, setFileType] = useState("");
  const [compressionLevel, setCompressionLevel] = useState(60);
  const [originalPreview, setOriginalPreview] = useState(null);
  const [compressedPreview, setCompressedPreview] = useState(null);
  const [originalSizeMB, setOriginalSizeMB] = useState(0);
  const [compressedSizeMB, setCompressedSizeMB] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = (uploadedFile) => {
    if (!uploadedFile) return;

    if (uploadedFile.size > 100 * 1024 * 1024) {
      alert("File size exceeds 100MB limit!");
      return;
    }

    setFile(uploadedFile);
    setFileType(uploadedFile.type.includes("pdf") ? "pdf" : "image");
    setCompressedFile(null);
    setCompressedPreview(null);
    setOriginalPreview(uploadedFile.type.includes("image") ? URL.createObjectURL(uploadedFile) : null);
    setOriginalSizeMB((uploadedFile.size / 1024 / 1024).toFixed(2));
    setCompressedSizeMB(0);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  const handleDeleteFile = () => {
    setFile(null);
    setCompressedFile(null);
    setOriginalPreview(null);
    setCompressedPreview(null);
    setFileType("");
    setOriginalSizeMB(0);
    setCompressedSizeMB(0);
  };

  const compressImage = async () => {
    try {
      setLoading(true);
      const quality = compressionLevel / 100;
      const options = {
        maxSizeMB: 50,
        maxWidthOrHeight:
          compressionLevel >= 80
            ? 1920
            : compressionLevel >= 60
            ? 1280
            : compressionLevel >= 40
            ? 1024
            : compressionLevel >= 20
            ? 800
            : 600,
        initialQuality: quality,
        useWebWorker: true,
      };
      const compressedBlob = await imageCompression(file, options);
      const compressedFileObj = new File([compressedBlob], file.name, { type: file.type });
      setCompressedFile(compressedFileObj);
      setCompressedPreview(URL.createObjectURL(compressedBlob));
      setCompressedSizeMB((compressedFileObj.size / 1024 / 1024).toFixed(2));
    } catch (err) {
      console.error(err);
      alert("Image compression failed!");
    } finally {
      setLoading(false);
    }
  };

  const compressPDF = async () => {
    try {
      setLoading(true);
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const compressedBytes = await pdfDoc.save({ useObjectStreams: false });
      const blob = new Blob([compressedBytes], { type: "application/pdf" });
      const compressedFileObj = new File([blob], file.name, { type: file.type });
      setCompressedFile(compressedFileObj);
      setCompressedSizeMB((compressedFileObj.size / 1024 / 1024).toFixed(2));
    } catch (err) {
      console.error(err);
      alert("PDF compression failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleCompress = () => {
    if (!file) return alert("Please select a file first!");
    fileType === "image" ? compressImage() : compressPDF();
  };

  const savedPercent = originalSizeMB && compressedSizeMB
    ? ((1 - compressedSizeMB / originalSizeMB) * 100).toFixed(2)
    : 0;

  return (
    <Container className="py-5">
      <Card className="shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4 fw-bold text-primary">📄 Image & PDF Compressor</h2>

        {/* Drag & Drop Area */}
        <div
          className="border border-dashed rounded p-4 text-center mb-3"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => fileInputRef.current.click()}
        >
          {file ? (
            <div>
              <strong>{file.name}</strong>
              <Button
                variant="outline-danger"
                size="sm"
                style={{ position: "absolute", top: 10, right: 10 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteFile();
                }}
              >
                ✕
              </Button>
            </div>
          ) : (
            <p className="mb-0">Drag & drop an image or PDF here, or click to select</p>
          )}
          <Form.Control
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => handleFileChange(e.target.files[0])}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>

        {/* Compression Slider */}
        <div className="my-3">
          <Form.Label>Compression Level: {compressionLevel}%</Form.Label>
          <Form.Range
            min={10}
            max={90}
            value={compressionLevel}
            onChange={(e) => setCompressionLevel(e.target.value)}
          />
          <small className="text-muted d-block">
            Lower = more compression, Higher = better quality
          </small>
        </div>

        {/* Compress Button */}
        <div className="text-center">
          <Button
            variant="primary"
            disabled={!file || loading}
            onClick={handleCompress}
            className="px-4"
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Compress"}
          </Button>
        </div>

        {/* File Size & Download */}
        {compressedFile && (
          <div className="text-center mt-4">
            <p>✅ Compression complete!</p>
            <p>
              Original: {originalSizeMB} MB → New: {compressedSizeMB} MB
            </p>
            <p>Saved: {savedPercent}%</p>
            <Button
              variant="success"
              href={URL.createObjectURL(compressedFile)}
              download={compressedFile.name}
            >
              Download Compressed File
            </Button>
          </div>
        )}

        {/* Preview Section for Images */}
        {fileType === "image" && compressedPreview && (
          <div className="mt-5">
            <h5 className="text-center mb-3 fw-semibold">Before & After Preview</h5>
            <Row className="g-3">
              <Col xs={12} md={6} className="text-center">
                <div className="p-2 border rounded">
                  <p className="fw-semibold">Original</p>
                  <img
                    src={originalPreview}
                    alt="Original"
                    className="img-fluid rounded"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <div className="p-2 border rounded">
                  <p className="fw-semibold">Compressed</p>
                  <img
                    src={compressedPreview}
                    alt="Compressed"
                    className="img-fluid rounded"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Card>
    </Container>
  );
}
