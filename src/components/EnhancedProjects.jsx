import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";

const EnhancedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [animateCards, setAnimateCards] = useState(false);
  const tiltRefs = useRef([]);

  const projects = [
    {
      title: "hrpocketPRO",
      desc: "Enterprise AI-powered Employee Attendance, Payroll & HR Management system. Features a high-performance cross-platform Flutter mobile app (Android & iOS) coupled with a scalable MERN (React, Node.js, Express, MongoDB) web platform with AI Face Recognition, GPS Geofencing, mock location prevention, and real-time automated payroll.",
      tech: ["Flutter", "Dart", "React", "Node.js", "Express", "MongoDB", "AI / Face Recognition", "REST APIs"],
      github: "https://github.com/royalprincesingh",
      demo: "https://plus.hrpocket.in",
      category: ["Mobile & Flutter", "Full Stack"],
      badgeColor: "linear-gradient(45deg, #00d2ff, #925ff0)",
      keyFeatures: [
        "Flutter Mobile App (Android & iOS)",
        "AI Face Recognition & GPS Geofencing",
        "Mock Location Prevention & Payroll Engine"
      ],
      difficulty: "Enterprise",
      status: "Live Production",
      featured: true
    },
    {
      title: "Aura Market",
      desc: "Cross-platform mobile e-commerce application built with Flutter & Dart, integrated with Node.js/Express REST backend and state management.",
      tech: ["Flutter", "Dart", "Node.js", "Express", "REST APIs"],
      github: "https://github.com/Royalprincesingh/aura-market",
      demo: "https://github.com/Royalprincesingh/aura-market",
      category: "Mobile & Flutter",
      badgeColor: "linear-gradient(45deg, #02569b, #00d2ff)",
      keyFeatures: ["Flutter Android & iOS", "Cart & Checkout State", "REST API integration"],
      difficulty: "Advanced",
      status: "Live"
    },
    {
      title: "TrueSight AI",
      desc: "Advanced Computer Vision platform for intelligent scene understanding with real-time object detection, pose estimation, and behavioral analytics.",
      tech: ["Python", "TensorFlow", "CV2", "Deep Learning", "WebSocket"],
      github: "https://github.com/royalprincesingh",
      demo: "#",
      category: "AI & Computer Vision",
      badgeColor: "linear-gradient(45deg, #ff006e, #8338ec)",
      keyFeatures: ["Multi-model ensemble", "Real-time 3D tracking", "Behavioral analytics"],
      difficulty: "Expert",
      status: "Live"
    },
    {
      title: "Proctor AI",
      desc: "Intelligent Examination Proctoring System built with Python and Machine Learning for secure, automated supervision.",
      tech: ["Python", "OpenCV", "Machine Learning", "ML Models"],
      github: "https://github.com/royalprincesingh",
      demo: "https://proctor-ai-exam.web.app/",
      category: "AI & ML",
      badgeColor: "linear-gradient(45deg, #925ff0, #00d2ff)",
      keyFeatures: ["Face detection", "Activity recognition", "Violation logging"],
      difficulty: "Advanced",
      status: "Live"
    },
    {
      title: "AgriTrade",
      desc: "Agricultural marketplace built with MERN stack featuring real-time pricing and secure transactions.",
      tech: ["Node.js", "Express", "React", "MongoDB", "REST APIs"],
      github: "https://github.com/royalprincesingh",
      demo: "#",
      category: "Full Stack",
      badgeColor: "linear-gradient(45deg, #00d2ff, #925ff0)",
      keyFeatures: ["Payment integration", "Real-time pricing", "Modular architecture"],
      difficulty: "Advanced",
      status: "Completed"
    },
    {
      title: "InstaSmart",
      desc: "Complete management application with secure authentication and CRUD operations.",
      tech: ["Java", "JSP", "Servlets", "MySQL"],
      github: "https://github.com/royalprincesingh",
      demo: "#",
      category: "Full Stack",
      badgeColor: "linear-gradient(45deg, #ed8b00, #925ff0)",
      keyFeatures: ["Session management", "CRUD operations", "Order processing"],
      difficulty: "Intermediate",
      status: "Completed"
    },
    {
      title: "Home Automation",
      desc: "IoT system using NodeMCU (ESP8266) for wireless control and real-time energy monitoring.",
      tech: ["NodeMCU", "ESP8266", "IoT Protocols", "Sensors"],
      github: "https://github.com/royalprincesingh",
      demo: "#",
      category: "IoT",
      badgeColor: "linear-gradient(45deg, #ff6b35, #00d2ff)",
      keyFeatures: ["Wireless control", "Energy monitoring", "Sensor integration"],
      difficulty: "Intermediate",
      status: "Completed"
    },
    {
      title: "Inventory Pro",
      desc: "Enterprise-grade inventory tracking system with integrated barcode scanning and real-time stock orchestration.",
      tech: ["React", "Node.js", "Firebase", "Real-time DB"],
      github: "https://github.com/royalprincesingh",
      demo: "#",
      category: "Full Stack",
      badgeColor: "linear-gradient(45deg, #1f77d2, #00d2ff)",
      keyFeatures: ["Barcode scanning", "Real-time sync", "State management"],
      difficulty: "Intermediate",
      status: "Completed"
    }
  ];

  const categories = ["all", ...new Set(projects.flatMap(p => Array.isArray(p.category) ? p.category : [p.category]))];
  const allTechs = ["all", ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = projects.filter(proj => {
    const catMatch = selectedCategory === "all" || 
      (Array.isArray(proj.category) ? proj.category.includes(selectedCategory) : proj.category === selectedCategory);
    const techMatch = selectedTech === "all" || proj.tech.includes(selectedTech);
    return catMatch && techMatch;
  });

  useEffect(() => {
    tiltRefs.current.forEach(ref => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 5,
          speed: 300,
          scale: 1.02,
          glare: true,
          "max-glare": 0.2
        });
      }
    });

    setAnimateCards(true);
  }, [selectedCategory, selectedTech]);

  return (
    <section id="projects" className="py-6" data-aos="fade-up">
      <div className="container">
        <h2 className="fw-bold text-center mb-2" style={{
          color: "var(--text-color)",
          fontSize: "2.5rem",
          marginBottom: "1rem"
        }}>
          <i className="bi bi-grid-fill me-2" style={{ color: "var(--accent-1)" }}></i>
          Featured Projects
        </h2>
        <p className="text-center mb-5" style={{
          color: "var(--text-secondary)",
          fontSize: "1rem",
          maxWidth: "600px",
          margin: "0 auto 2rem"
        }}>
          Innovative solutions built with cutting-edge technologies
        </p>

        {/* Filter Controls */}
        <div className="filters-section mb-5" data-aos="fade-down" data-aos-delay="100">
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ color: "var(--text-secondary)", marginBottom: "0.75rem", fontWeight: "600" }}>
              <i className="bi bi-funnel-fill me-2" style={{ color: "var(--accent-1)" }}></i>Filter by Category:
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: selectedCategory === cat ? "2px solid var(--accent-1)" : "1px solid var(--border-color)",
                    background: selectedCategory === cat ? "rgba(0, 210, 255, 0.1)" : "transparent",
                    color: selectedCategory === cat ? "var(--accent-1)" : "var(--text-secondary)",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    textTransform: "capitalize",
                    fontSize: "0.9rem"
                  }}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: "var(--text-secondary)", marginBottom: "0.75rem", fontWeight: "600" }}>
              <i className="bi bi-cpu-fill me-2" style={{ color: "var(--accent-2)" }}></i>Filter by Technology:
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {allTechs.slice(0, 8).map(tech => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: selectedTech === tech ? "2px solid var(--accent-2)" : "1px solid var(--border-color)",
                    background: selectedTech === tech ? "rgba(146, 95, 240, 0.1)" : "transparent",
                    color: selectedTech === tech ? "var(--accent-2)" : "var(--text-secondary)",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    fontSize: "0.9rem"
                  }}
                >
                  {tech === "all" ? "All Tech" : tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "var(--text-secondary)",
          fontSize: "0.95rem"
        }}>
          Showing <strong style={{ color: "var(--accent-1)" }}>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? "s" : ""}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj, index) => (
              <div key={index} className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div
                  ref={el => tiltRefs.current[index] = el}
                  className={`project-card ${proj.featured ? "featured-flagship-card" : ""}`}
                  style={{
                    background: proj.featured
                      ? "linear-gradient(135deg, rgba(0, 210, 255, 0.08) 0%, rgba(146, 95, 240, 0.08) 100%)"
                      : "linear-gradient(135deg, var(--card-bg) 0%, rgba(0, 210, 255, 0.03) 100%)",
                    border: proj.featured ? "1.5px solid rgba(0, 210, 255, 0.6)" : "1px solid var(--border-color)",
                    borderRadius: "15px",
                    padding: "1.75rem",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    transform: animateCards ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                    opacity: animateCards ? 1 : 0,
                    boxShadow: proj.featured ? "0 10px 30px rgba(0, 210, 255, 0.15)" : "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-1)";
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 210, 255, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = proj.featured ? "rgba(0, 210, 255, 0.6)" : "var(--border-color)";
                    e.currentTarget.style.boxShadow = proj.featured ? "0 10px 30px rgba(0, 210, 255, 0.15)" : "none";
                  }}
                >
                  {/* Flagship Banner */}
                  {proj.featured && (
                    <div style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      background: "linear-gradient(135deg, #00d2ff, #925ff0)",
                      color: "#08080c",
                      fontSize: "0.72rem",
                      fontWeight: "800",
                      letterSpacing: "0.5px",
                      padding: "4px 14px",
                      borderRadius: "0 14px 0 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      boxShadow: "0 2px 10px rgba(0, 210, 255, 0.4)",
                      zIndex: 2
                    }}>
                      <i className="bi bi-star-fill"></i> FLAGSHIP
                    </div>
                  )}

                  {/* Header with Badge */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                    gap: "0.5rem",
                    paddingTop: proj.featured ? "0.6rem" : "0"
                  }}>
                    <h3 style={{
                      color: "var(--text-color)",
                      fontSize: "1.35rem",
                      fontWeight: "700",
                      margin: 0,
                      flex: 1
                    }}>
                      {proj.title}
                    </h3>
                    <span style={{
                      background: proj.badgeColor,
                      color: "white",
                      padding: "0.35rem 0.75rem",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      whiteSpace: "nowrap"
                    }}>
                      {proj.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    marginBottom: "1.25rem"
                  }}>
                    {proj.desc}
                  </p>

                  {/* Key Features */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <p style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem"
                    }}>
                      <i className="bi bi-stars me-2" style={{ color: "var(--accent-1)" }}></i>Key Features:
                    </p>
                    <ul style={{
                      paddingLeft: "1rem",
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)"
                    }}>
                      {proj.keyFeatures.map((feature, i) => (
                        <li key={i} style={{ marginBottom: "0.25rem" }}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {proj.tech.map((t, i) => (
                        <span
                          key={i}
                          style={{
                            backgroundColor: "rgba(0, 210, 255, 0.1)",
                            border: "1px solid rgba(0, 210, 255, 0.3)",
                            color: "var(--accent-1)",
                            padding: "0.35rem 0.75rem",
                            borderRadius: "12px",
                            fontSize: "0.8rem",
                            fontWeight: "500"
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="d-flex gap-2 mt-auto">
                    {proj.demo && proj.demo !== "#" ? (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm d-flex align-items-center justify-content-center gap-1"
                        style={{
                          flex: 1,
                          padding: "0.6rem 0.75rem",
                          background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                          color: "white",
                          border: "none",
                          borderRadius: "8px",
                          textAlign: "center",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                          cursor: "pointer"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                        <span>Live App</span>
                      </a>
                    ) : (
                      <span
                        className="btn btn-sm d-flex align-items-center justify-content-center gap-1 disabled"
                        style={{
                          flex: 1,
                          padding: "0.6rem 0.75rem",
                          background: "rgba(255,255,255,0.05)",
                          color: "var(--text-secondary)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "8px",
                          fontSize: "0.9rem",
                          fontWeight: "500"
                        }}
                      >
                        <i className="bi bi-lock-fill"></i>
                        <span>Enterprise</span>
                      </span>
                    )}
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm d-flex align-items-center justify-content-center gap-1"
                      style={{
                        flex: 1,
                        padding: "0.6rem 0.75rem",
                        background: "transparent",
                        color: "var(--accent-1)",
                        border: "2px solid var(--accent-1)",
                        borderRadius: "8px",
                        textAlign: "center",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--accent-1)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--accent-1)";
                      }}
                    >
                      <i className="bi bi-github"></i>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "3rem",
              color: "var(--text-secondary)"
            }}>
              <p style={{ fontSize: "1.2rem" }}>No projects found with the selected filters.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .filters-section {
          padding: 2rem;
          background: linear-gradient(135deg, rgba(0, 210, 255, 0.05), rgba(146, 95, 240, 0.05));
          border-radius: 15px;
          border: 1px solid var(--border-color);
        }

        .project-card {
          transform-style: preserve-3d;
        }

        @media (max-width: 768px) {
          .project-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedProjects;
