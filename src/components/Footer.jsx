import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>
      <Container>
        <Row className="align-items-center py-5">
          {/* Brand & Rights */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h4 className="footer-logo">PRINCE<span>SINGH</span> <span style={{ fontSize: "0.75em", opacity: 0.65, fontWeight: "500" }}>(Royal Singh)</span></h4>
            <p className="copyright-text">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
            <p className="built-with">Built with React + Bootstrap</p>
          </Col>

          {/* Quick Contact Info from Resume */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="footer-contact">
              <p><i className="bi bi-geo-alt-fill me-2"></i> Lucknow, Uttar Pradesh</p>
              <p><i className="bi bi-envelope-fill me-2"></i> princesinghsikata@gmail.com</p>
            </div>
          </Col>

          {/* Social Links with Glow Effect */}
          <Col md={4} className="text-center text-md-end">
            <div className="social-wrapper">
              <a href="https://github.com/royalprincesingh" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub Profile">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/royalprincesingh" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn Profile">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com/mr.royal_singh_prince" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram Profile">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .footer-section {
          background: #08080c;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .footer-glow {
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 100px;
          background: radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-logo {
          font-weight: 900;
          letter-spacing: 1px;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .footer-logo span {
          color: #00d2ff;
        }

        .copyright-text {
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        .built-with {
          color: #64748b;
          font-size: 0.75rem;
        }

        .footer-contact p {
          color: #cbd5e1;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .social-wrapper {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 10px;
        }
        
        @media (min-width: 768px) {
          .social-wrapper { justify-content: flex-end; }
        }

        .social-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          font-size: 1.2rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }

        .social-icon:hover {
          transform: translateY(-5px);
          color: #fff;
        }

        .github:hover { background: #333; box-shadow: 0 0 20px rgba(51, 51, 51, 0.5); border-color: #666; }
        .linkedin:hover { background: #0077b5; box-shadow: 0 0 20px rgba(0, 119, 181, 0.5); border-color: #00a0dc; }
        .instagram:hover { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); box-shadow: 0 0 20px rgba(220, 39, 67, 0.5); border-color: transparent; }
      `}</style>
    </footer>
  );
};

export default Footer;