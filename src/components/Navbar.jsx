import React, { useState } from "react";
import profileImg from "../assets/vite.jpg";

const Navbar = ({ onResumeClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{
      background: "rgba(8, 8, 12, 0.95)",
      backdropFilter: "blur(15px)",
      borderBottom: "1px solid var(--border-color)",
      padding: "0.8rem 0"
    }}>
      <div className="container-fluid px-3 px-lg-4">
        {/* Logo */}
        <a href="#home" className="navbar-brand fw-bold d-flex align-items-center me-auto" style={{ color: "var(--text-color)", whiteSpace: "nowrap" }}>
          <img
            src={profileImg}
            alt="Royal Prince Singh"
            className="rounded-circle me-2"
            style={{
              width: "36px",
              height: "36px",
              objectFit: "cover",
              border: "2px solid var(--accent-1)"
            }}
          />
          <span style={{ fontSize: "1rem", fontWeight: "700", letterSpacing: "0.5px" }}>
            Prince <span style={{ color: "var(--accent-1)" }}>Singh</span> <span className="d-none d-sm-inline" style={{ fontSize: "0.82em", opacity: 0.75, fontWeight: "500" }}>(Royal)</span>
          </span>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler d-lg-none" 
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            border: "1.5px solid var(--accent-1)",
            background: "rgba(0, 210, 255, 0.08)",
            padding: "0.3rem 0.65rem",
            borderRadius: "8px",
            width: "auto",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none"
          }}
        >
          <span style={{ color: "var(--accent-1)", fontSize: "1.25rem", lineHeight: 1, display: "inline-flex", alignItems: "center" }}>
            {isOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list fs-5"></i>}
          </span>
        </button>

        {/* Navigation Links */}
        <div 
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          style={{
            transition: "all 0.3s ease"
          }}
        >
          <ul className="navbar-nav ms-auto gap-2 align-items-lg-center">
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#experience"
                onClick={() => setIsOpen(false)}
                style={{ color: "var(--text-secondary)" }}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#achievements"
                onClick={() => setIsOpen(false)}
                style={{ color: "var(--text-secondary)" }}
              >
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#skills"
                onClick={() => setIsOpen(false)}
                style={{ color: "var(--text-secondary)" }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#projects"
                onClick={() => setIsOpen(false)}
                style={{ color: "var(--text-secondary)" }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  onResumeClick();
                  setIsOpen(false);
                }}
                className="btn btn-sm px-3 rounded-pill mt-2 mt-lg-0"
                style={{
                  background: "transparent",
                  border: "2px solid var(--accent-1)",
                  color: "var(--accent-1)",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  width: "100%"
                }}
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
