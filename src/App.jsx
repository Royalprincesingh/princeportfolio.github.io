import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MouseTrail from "./components/MouseTrail";
import StatsSection from "./components/StatsSection";
import EnhancedSkills from "./components/EnhancedSkills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import EnhancedProjects from "./components/EnhancedProjects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIBot from "./components/AIBot";
import "./index.css";

function App() {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="portfolio-wrapper bg-dark text-light">
      <MouseTrail />
      <div className="glow-bg"></div>

      {/* Floating Quick Action: Download Resume (Desktop) */}
      <a
        href="/Royal_Prince_Singh_Resume.pdf"
        download="Royal_Prince_Singh_Resume.pdf"
        className="floating-cv-btn align-items-center gap-2"
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          zIndex: 999,
          background: "rgba(18, 18, 26, 0.85)",
          border: "1px solid rgba(0, 210, 255, 0.4)",
          backdropFilter: "blur(12px)",
          color: "var(--text-color)",
          padding: "10px 20px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.88rem",
          boxShadow: "0 8px 25px rgba(0, 210, 255, 0.2)",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.borderColor = "var(--accent-1)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 210, 255, 0.4)";
          e.currentTarget.style.background = "linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(146, 95, 240, 0.2))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "rgba(0, 210, 255, 0.4)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 210, 255, 0.2)";
          e.currentTarget.style.background = "rgba(18, 18, 26, 0.85)";
        }}
      >
        <i className="bi bi-file-earmark-pdf-fill" style={{ color: "var(--accent-1)", fontSize: "1rem" }}></i>
        <span>Download CV</span>
      </a>

      <Navbar onResumeClick={handleShowResume} />
      <main className="main-content">
        <Hero />
        <StatsSection />
        <Experience />
        <Achievements />
        <EnhancedSkills />
        <EnhancedProjects />
        <Contact />
      </main>
      <Footer />
      <Resume show={showResume} handleClose={handleCloseResume} />
      <AIBot />
    </div>
  );
}

export default App;
