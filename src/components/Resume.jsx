import React from "react";
import { Modal, Button } from "react-bootstrap";

const Resume = ({ show, handleClose }) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      fullscreen 
      className="resume-modal"
      backdrop="static"
      centered
    >
      <Modal.Header 
        closeButton 
        className="bg-dark text-light border-secondary d-flex align-items-center justify-content-between"
        style={{ padding: "1.2rem 1.5rem" }}
      >
        <Modal.Title className="fw-bold fs-5">Resume - Royal Prince Singh</Modal.Title>
        <a
          href="/Royal_Prince_Singh_Resume.pdf"
          download="Royal_Prince_Singh_Resume.pdf"
          className="btn btn-sm btn-info rounded-pill px-3 me-3 fw-semibold text-white d-inline-flex align-items-center gap-1"
          style={{ textDecoration: "none" }}
        >
          <i className="bi bi-download me-1"></i>Download PDF
        </a>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light p-0" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{
          background: "rgba(255,255,255,0.98)",
          color: "#1e293b",
          minHeight: "100%",
          padding: "40px",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 0 30px rgba(0,0,0,0.5)"
        }}>
          {/* Resume Header */}
          <div className="text-center mb-4 border-bottom pb-4">
            <h1 className="mb-1" style={{ fontSize: "2.4em", fontWeight: "800", color: "#0f172a" }}>PRINCE SINGH <span style={{ fontSize: "0.65em", color: "#64748b", fontWeight: "600" }}>(ROYAL SINGH)</span></h1>
            <p className="text-secondary fw-semibold mb-3">Flutter Developer &amp; Full Stack Software Engineer | MERN Stack &amp; AI/ML</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap text-muted small">
              <span><i className="bi bi-telephone-fill me-1" style={{ color: "#0284c7" }}></i>+91-8858180597</span>
              <span><i className="bi bi-envelope-fill me-1" style={{ color: "#0284c7" }}></i>princesinghsikata@gmail.com</span>
              <span><i className="bi bi-geo-alt-fill me-1" style={{ color: "#0284c7" }}></i>Noida, India</span>
              <span><i className="bi bi-github me-1" style={{ color: "#0284c7" }}></i><a href="https://github.com/royalprincesingh" className="text-decoration-none fw-semibold" style={{ color: "#0284c7" }} target="_blank" rel="noopener noreferrer">GitHub</a></span>
              <span><i className="bi bi-linkedin me-1" style={{ color: "#0284c7" }}></i><a href="https://linkedin.com/in/royalprincesingh" className="text-decoration-none fw-semibold" style={{ color: "#0284c7" }} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
              <span><i className="bi bi-globe me-1" style={{ color: "#0284c7" }}></i><a href="https://softprince.dev" className="text-decoration-none fw-semibold" style={{ color: "#0284c7" }} target="_blank" rel="noopener noreferrer">softprince.dev</a></span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h4 className="mb-2 fw-bold" style={{ color: "#0f172a", borderBottom: "2px solid #e2e8f0", paddingBottom: "4px" }}>Professional Summary</h4>
            <p style={{ color: "#334155", lineHeight: "1.6" }}>
              Versatile Flutter Developer and Full Stack Software Engineer with proven experience designing and deploying cross-platform mobile apps with Flutter &amp; Dart, production-ready MERN web platforms, and AI-powered computer vision systems. Proficient in Dart, Flutter, JavaScript, React, Node.js, Python, and MongoDB. Demonstrated ability to craft responsive UIs, optimize backend architectures, and implement secure real-time workflows. Currently pursuing B.Tech in Information Technology at AKTU (Expected June 2026).
            </p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h4 className="mb-2 fw-bold" style={{ color: "#0f172a", borderBottom: "2px solid #e2e8f0", paddingBottom: "4px" }}>Education</h4>
            <div className="mb-2">
              <div className="d-flex justify-content-between flex-wrap">
                <strong>B.Tech in Information Technology</strong>
                <span className="text-muted small">2022 – Expected June 2026</span>
              </div>
              <p className="mb-0 text-muted small">Dr. A.P.J. Abdul Kalam Technical University (AKTU), Uttar Pradesh</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <h4 className="mb-2 fw-bold" style={{ color: "#0f172a", borderBottom: "2px solid #e2e8f0", paddingBottom: "4px" }}>Technical Skills</h4>
            <div className="row g-2 small">
              <div className="col-md-6">
                <strong>Mobile:</strong> Flutter, Dart, Cross-Platform (Android &amp; iOS), Bloc/Provider
              </div>
              <div className="col-md-6">
                <strong>Languages:</strong> Dart, JavaScript (ES6+), Python, Java, HTML5/CSS3
              </div>
              <div className="col-md-6">
                <strong>Frontend:</strong> React.js, React Router, Tailwind CSS, Bootstrap, Context API
              </div>
              <div className="col-md-6">
                <strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT, bcrypt
              </div>
              <div className="col-md-6">
                <strong>Databases &amp; Cloud:</strong> MongoDB, MySQL, Firebase (Firestore, Auth, Hosting)
              </div>
              <div className="col-md-6">
                <strong>AI &amp; Computer Vision:</strong> OpenCV, Python, TensorFlow, Deepfake Detection
              </div>
            </div>
          </div>

          {/* Notable Projects */}
          <div className="mb-4">
            <h4 className="mb-2 fw-bold" style={{ color: "#0f172a", borderBottom: "2px solid #e2e8f0", paddingBottom: "4px" }}>Featured Projects</h4>

            <div className="mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <h6 className="mb-0 fw-bold">Aura Market — Flutter Mobile E-Commerce App</h6>
                <a href="https://github.com/Royalprincesingh/aura-market" target="_blank" rel="noopener noreferrer" className="badge bg-info text-dark text-decoration-none">GitHub Repo</a>
              </div>
              <p className="text-muted small mb-1">Flutter, Dart, Node.js, Express, REST APIs, State Management</p>
              <p className="mb-0 small" style={{ color: "#334155" }}>
                Cross-platform mobile e-commerce platform built with Flutter and Dart, supporting dynamic product catalog, cart state orchestration, and Node.js backend integration.
              </p>
            </div>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <h6 className="mb-0 fw-bold">Proctor AI — Remote Exam Proctoring System</h6>
                <span className="badge bg-primary text-white">Live Demo</span>
              </div>
              <p className="text-muted small mb-1">Python, OpenCV, Machine Learning, Flask, React, Firebase</p>
              <p className="mb-0 small" style={{ color: "#334155" }}>
                AI-powered proctoring solution featuring real-time face detection, eye gaze tracking, tab-switching detection, and violation logging.
              </p>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <h6 className="mb-0 fw-bold">TrueSight AI — Computer Vision & Deepfake Detection</h6>
                <span className="badge bg-info text-dark">Live</span>
              </div>
              <p className="text-muted small mb-1">Python, OpenCV, TensorFlow, Real-time Video Processing</p>
              <p className="mb-0 small" style={{ color: "#334155" }}>
                Computer vision platform with real-time scene understanding, multi-model ensemble detection, and behavioral analytics.
              </p>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <h6 className="mb-0 fw-bold">AgriTrade — B2B Agricultural Trading Platform</h6>
                <span className="badge bg-success text-white">MERN Stack</span>
              </div>
              <p className="text-muted small mb-1">Node.js, Express, React, MongoDB, REST APIs</p>
              <p className="mb-0 small" style={{ color: "#334155" }}>
                Agricultural marketplace with role-based access control (Admin, Farmer, Buyer), real-time pricing, and secure transactions.
              </p>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <h6 className="mb-0 fw-bold">Inventory Pro — Enterprise Inventory System</h6>
                <span className="badge bg-secondary text-white">Full Stack</span>
              </div>
              <p className="text-muted small mb-1">React, Node.js, Firebase Firestore, Barcode Scanner API</p>
              <p className="mb-0 small" style={{ color: "#334155" }}>
                Enterprise inventory tracking with barcode scanning, multi-warehouse support, and real-time stock synchronization.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h4 className="mb-2 fw-bold" style={{ color: "#0f172a", borderBottom: "2px solid #e2e8f0", paddingBottom: "4px" }}>Experience</h4>
            <div className="mb-2">
              <div className="d-flex justify-content-between flex-wrap">
                <strong>Full Stack Intern — Softpro India</strong>
                <span className="text-muted small">Jun 2025 – Aug 2025</span>
              </div>
              <p className="mb-0 small text-muted">Engineered AgriTrade MERN platform with role-based access, JWT auth, and database indexing.</p>
            </div>
            <div className="mb-2">
              <div className="d-flex justify-content-between flex-wrap">
                <strong>Software Engineer Intern — HCL Technologies</strong>
                <span className="text-muted small">Jun 2024 – Nov 2024</span>
              </div>
              <p className="mb-0 small text-muted">Specialized in Java EE web modules, database optimization, and secure user authentication.</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h4 className="mb-2 fw-bold" style={{ color: "#0f172a", borderBottom: "2px solid #e2e8f0", paddingBottom: "4px" }}>Certifications</h4>
            <ul className="ps-4 small mb-0" style={{ color: "#334155" }}>
              <li>Oracle Cloud Infrastructure (OCI) 2025 Certified Generative AI Professional</li>
              <li>Microsoft Azure AI Essentials Professional Certificate</li>
              <li>React JS Certification & Project Certificate (Simplilearn)</li>
              <li>Java Spring Boot & PHP Web Development Certifications</li>
            </ul>
          </div>

          {/* Footer Note */}
          <div className="border-top pt-3 mt-4 text-center text-muted small">
            <p className="mb-0"><i className="bi bi-file-earmark-pdf-fill me-1" style={{ color: "#0284c7" }}></i>Download the official PDF copy using the button above or from the main portfolio.</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Resume;
