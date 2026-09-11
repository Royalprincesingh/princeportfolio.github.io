import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./achievements.css";

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Certifications data from LinkedIn posts
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "Nov 2025",
      icon: "bi bi-cloud-check-fill",
      color: "#ed8b00",
      category: "cloud"
    },
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft & LinkedIn Learning",
      date: "Sep 2025",
      icon: "bi bi-diagram-3-fill",
      color: "#0078d4",
      category: "cloud"
    },
    {
      title: "React JS Certification",
      issuer: "Simplilearn",
      date: "Sep 2025",
      icon: "bi bi-code-slash",
      color: "#61dafb",
      category: "frontend"
    },
    {
      title: "React JS Project Certificate",
      issuer: "Simplilearn",
      date: "Sep 2025",
      icon: "bi bi-laptop-fill",
      color: "#61dafb",
      category: "frontend"
    },
    {
      title: "PHP Certification",
      issuer: "Simplilearn",
      date: "Sep 2025",
      icon: "bi bi-filetype-php",
      color: "#777bb4",
      category: "backend"
    },
    {
      title: "Java Spring Boot Internship Completion",
      issuer: "Professional Training",
      date: "Aug 2025",
      icon: "bi bi-cup-hot-fill",
      color: "#ed8b00",
      category: "backend"
    },
    {
      title: "Ethical Hacking Course",
      issuer: "Internshala Trainings (NSDC)",
      date: "Jul 2025",
      icon: "bi bi-shield-lock-fill",
      color: "#ff6b35",
      category: "security"
    },
    {
      title: "Ethical Hacking Course",
      issuer: "Naukri.com",
      date: "Jul 2025",
      icon: "bi bi-shield-check",
      color: "#ff6b35",
      category: "security"
    },
    {
      title: "Offensive Security Introduction",
      issuer: "TryHackMe",
      date: "Jul 2025",
      icon: "bi bi-shield-slash-fill",
      color: "#dd0a0a",
      category: "security"
    },
    {
      title: "Codequezt #24 Coding Challenge",
      issuer: "Naukri Campus",
      date: "Jun 2025",
      icon: "bi bi-terminal-fill",
      color: "#00d2ff",
      category: "coding"
    },
    {
      title: "LabMentix Common Aptitude Test (LCAT)",
      issuer: "LabMentix",
      date: "Sep 2025",
      icon: "bi bi-award-fill",
      color: "#925ff0",
      category: "aptitude"
    },
    {
      title: "C++ Programming & PHP for Web Development",
      issuer: "Professional Training",
      date: "Aug 2025",
      icon: "bi bi-gear-fill",
      color: "#00599c",
      category: "backend"
    }
  ];

  // Publications data
  const publications = [
    {
      title: "Gesture-Based Virtual Mouse: A Contactless HCI Paradigm Using AI and Fingertip Dynamics",
      journal: "Journal of Electrical Engineering",
      volume: "Volume 11, Issue 3",
      year: 2026,
      icon: "bi bi-journal-text",
      description: "Research on developing a contactless human-computer interaction system using Artificial Intelligence, enabling users to control systems through hand gestures without physical devices.",
      tags: ["AI", "HCI", "Computer Vision", "Machine Learning"]
    }
  ];

  // Internships for quick reference
  const internships = [
    {
      title: "Web Development Internship",
      company: "ApexPlanet Software Pvt Ltd",
      duration: "45 days",
      date: "2025",
      icon: "bi bi-globe2",
      color: "#00d2ff",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "Web Developer (PHP & MySQL)",
      company: "ApexPlanet Software Pvt Ltd",
      date: "2025",
      icon: "bi bi-laptop-fill",
      color: "#777bb4",
      skills: ["PHP", "MySQL", "Web Development"]
    }
  ];

  const categories = [
    { id: "all", label: "All Achievements", count: certifications.length + publications.length },
    { id: "cloud", label: "Cloud & AI", count: certifications.filter(c => c.category === "cloud").length },
    { id: "frontend", label: "Frontend", count: certifications.filter(c => c.category === "frontend").length },
    { id: "backend", label: "Backend", count: certifications.filter(c => c.category === "backend").length },
    { id: "security", label: "Security", count: certifications.filter(c => c.category === "security").length }
  ];

  const filteredCerts = activeCategory === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <section id="achievements" className="py-6 achievements-section" data-aos="fade-up">
      <Container>
        {/* Section Header */}
        <div className="section-header mb-5">
          <h2 className="fw-bold text-center mb-3" style={{ color: "var(--text-color)", fontSize: "2.5rem" }}>
            <i className="bi bi-trophy-fill me-2" style={{ color: "var(--accent-1)" }}></i>
            Achievements &amp; Recognition
          </h2>
          <p className="text-center" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Certifications, publications, and recognitions showcasing continuous learning and excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter mb-5" data-aos="fade-down" data-aos-delay="100">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: activeCategory === category.id ? "2px solid var(--accent-1)" : "1px solid var(--border-color)",
                  background: activeCategory === category.id ? "rgba(0, 210, 255, 0.1)" : "transparent",
                  color: activeCategory === category.id ? "var(--accent-1)" : "var(--text-secondary)",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  fontSize: "0.95rem"
                }}
              >
                {category.label} <span style={{ marginLeft: "5px", opacity: 0.7 }}>({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid mb-6">
          <Row className="g-4">
            {filteredCerts.map((cert, index) => (
              <Col md={6} lg={4} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div
                  className="cert-card"
                  style={{
                    background: "linear-gradient(135deg, var(--card-bg) 0%, rgba(0, 210, 255, 0.05) 100%)",
                    border: `1px solid ${cert.color}30`,
                    borderRadius: "12px",
                    padding: "1.5rem",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = `0 20px 40px ${cert.color}20`;
                    e.currentTarget.style.borderColor = `${cert.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = `${cert.color}30`;
                  }}
                >
                  {/* Background gradient */}
                  <div style={{
                    position: "absolute",
                    top: "-50%",
                    right: "-50%",
                    width: "200px",
                    height: "200px",
                    background: `radial-gradient(circle, ${cert.color}10, transparent)`,
                    borderRadius: "50%",
                    pointerEvents: "none"
                  }} />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem", color: cert.color }}>
                      <i className={cert.icon}></i>
                    </div>
                    <h5 style={{
                      color: "var(--text-color)",
                      marginBottom: "0.75rem",
                      fontWeight: "700",
                      fontSize: "1rem",
                      lineHeight: "1.4"
                    }}>
                      {cert.title}
                    </h5>
                    <p style={{
                      color: cert.color,
                      marginBottom: "0.5rem",
                      fontSize: "0.95rem",
                      fontWeight: "600"
                    }}>
                      {cert.issuer}
                    </p>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "1rem",
                      paddingTop: "1rem",
                      borderTop: `1px solid ${cert.color}20`
                    }}>
                      <span style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem"
                      }}>
                        <i className="bi bi-calendar-event me-1"></i>{cert.date}
                      </span>
                      <span style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        background: cert.color,
                        borderRadius: "50%"
                      }} />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Publications Section */}
        {publications.length > 0 && (
          <div className="publications-section mb-6" data-aos="fade-up" data-aos-delay="200">
            <h3 style={{
              color: "var(--text-color)",
              marginBottom: "2rem",
              fontSize: "1.8rem",
              fontWeight: "700",
              textAlign: "center"
            }}>
              <i className="bi bi-journal-bookmark-fill me-2" style={{ color: "var(--accent-1)" }}></i>
              Research Publications
            </h3>
            <Row className="g-4">
              {publications.map((pub, index) => (
                <Col lg={12} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div style={{
                    background: "linear-gradient(135deg, var(--card-bg) 0%, rgba(147, 95, 240, 0.05) 100%)",
                    border: "1px solid rgba(147, 95, 240, 0.3)",
                    borderRadius: "12px",
                    padding: "2rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(147, 95, 240, 0.2)";
                      e.currentTarget.style.borderColor = "rgba(147, 95, 240, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "rgba(147, 95, 240, 0.3)";
                    }}
                  >
                    <div style={{
                      display: "flex",
                      gap: "1.5rem",
                      alignItems: "flex-start"
                    }}>
                      <div style={{
                        fontSize: "2.5rem",
                        minWidth: "60px",
                        textAlign: "center",
                        color: "var(--accent-1)"
                      }}>
                        <i className={pub.icon}></i>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          color: "var(--text-color)",
                          marginBottom: "0.75rem",
                          fontSize: "1.2rem",
                          fontWeight: "700"
                        }}>
                          {pub.title}
                        </h4>
                        <p style={{
                          color: "var(--accent-1)",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          fontSize: "1rem"
                        }}>
                          {pub.journal}
                        </p>
                        <div style={{
                          display: "flex",
                          gap: "1.5rem",
                          marginBottom: "1rem",
                          flexWrap: "wrap"
                        }}>
                          <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                            Volume: {pub.volume}
                          </span>
                          <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                            <i className="bi bi-calendar-event me-1"></i>Year: {pub.year}
                          </span>
                        </div>
                        <p style={{
                          color: "var(--text-secondary)",
                          lineHeight: "1.6",
                          marginBottom: "1rem",
                          fontSize: "0.95rem"
                        }}>
                          {pub.description}
                        </p>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                          {pub.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              style={{
                                backgroundColor: "rgba(147, 95, 240, 0.1)",
                                border: "1px solid rgba(147, 95, 240, 0.3)",
                                color: "#925ff0",
                                padding: "0.35rem 0.75rem",
                                borderRadius: "15px",
                                fontSize: "0.85rem",
                                fontWeight: "500"
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Internships Section */}
        {internships.length > 0 && (
          <div className="internships-section" data-aos="fade-up" data-aos-delay="300">
            <h3 style={{
              color: "var(--text-color)",
              marginBottom: "2rem",
              fontSize: "1.8rem",
              fontWeight: "700",
              textAlign: "center"
            }}>
              <i className="bi bi-briefcase-fill me-2" style={{ color: "var(--accent-1)" }}></i>
              Notable Internships
            </h3>
            <Row className="g-4">
              {internships.map((internship, index) => (
                <Col md={6} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div style={{
                    background: "linear-gradient(135deg, var(--card-bg) 0%, rgba(0, 210, 255, 0.05) 100%)",
                    border: `1px solid ${internship.color}30`,
                    borderRadius: "12px",
                    padding: "1.5rem",
                    height: "100%",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = `0 20px 40px ${internship.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "1rem", color: internship.color }}>
                      <i className={internship.icon}></i>
                    </div>
                    <h5 style={{
                      color: "var(--text-color)",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                      fontSize: "1.1rem"
                    }}>
                      {internship.title}
                    </h5>
                    <p style={{
                      color: internship.color,
                      marginBottom: "0.75rem",
                      fontWeight: "600"
                    }}>
                      {internship.company}
                    </p>
                    <div style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "1rem",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      flexWrap: "wrap"
                    }}>
                      {internship.duration && (
                        <span><i className="bi bi-clock-history me-1"></i>{internship.duration}</span>
                      )}
                      {internship.date && (
                        <span><i className="bi bi-calendar-event me-1"></i>{internship.date}</span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {internship.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          style={{
                            backgroundColor: `${internship.color}15`,
                            border: `1px solid ${internship.color}40`,
                            color: internship.color,
                            padding: "0.3rem 0.7rem",
                            borderRadius: "12px",
                            fontSize: "0.8rem",
                            fontWeight: "500"
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>

      <style>{`
        .achievements-section {
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .filter-btn {
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 210, 255, 0.2);
        }

        .cert-card {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .certifications-grid {
            margin-bottom: 2rem;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }

          .cert-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
