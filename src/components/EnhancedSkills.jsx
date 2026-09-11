import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VanillaTilt from "vanilla-tilt";
import "./enhanced-skills.css";

const EnhancedSkills = () => {
  const skillRefs = useRef([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState(new Set());

  const skillsData = {
    mobile: [
      { name: "Flutter", level: 94, icon: "bi bi-phone-fill", color: "#02569b", experience: "2+ years" },
      { name: "Dart", level: 91, icon: "bi bi-bullseye", color: "#00b4ab", experience: "2+ years" },
      { name: "Android & iOS", level: 89, icon: "bi bi-phone", color: "#3ddc84", experience: "2+ years" },
      { name: "Bloc / Provider", level: 87, icon: "bi bi-arrow-repeat", color: "#925ff0", experience: "2+ years" }
    ],
    frontend: [
      { name: "React", level: 95, icon: "bi bi-code-slash", color: "#61dafb", experience: "2+ years" },
      { name: "JavaScript", level: 92, icon: "bi bi-lightning-charge-fill", color: "#f7df1e", experience: "3+ years" },
      { name: "HTML/CSS", level: 90, icon: "bi bi-filetype-html", color: "#e34f26", experience: "3+ years" },
      { name: "Tailwind CSS", level: 88, icon: "bi bi-palette-fill", color: "#38bdf8", experience: "1+ year" }
    ],
    backend: [
      { name: "Node.js", level: 93, icon: "bi bi-check-circle-fill", color: "#68a063", experience: "2+ years" },
      { name: "Express.js", level: 90, icon: "bi bi-hdd-network-fill", color: "#90c53f", experience: "2+ years" },
      { name: "MongoDB", level: 89, icon: "bi bi-database-fill", color: "#47a248", experience: "2+ years" },
      { name: "Java", level: 85, icon: "bi bi-cup-hot-fill", color: "#ed8b00", experience: "1+ year" },
      { name: "PHP", level: 80, icon: "bi bi-filetype-php", color: "#777bb4", experience: "1+ year" }
    ],
    aiml: [
      { name: "Python", level: 91, icon: "bi bi-terminal-fill", color: "#3776ab", experience: "2+ years" },
      { name: "TensorFlow", level: 85, icon: "bi bi-cpu-fill", color: "#ff6f00", experience: "1+ year" },
      { name: "OpenCV", level: 88, icon: "bi bi-eye-fill", color: "#5c3ee8", experience: "1+ year" },
      { name: "Machine Learning", level: 87, icon: "bi bi-robot", color: "#ff6b35", experience: "1+ year" }
    ],
    tools: [
      { name: "Git", level: 90, icon: "bi bi-git", color: "#f05032", experience: "3+ years" },
      { name: "Docker", level: 80, icon: "bi bi-boxes", color: "#2496ed", experience: "1+ year" },
      { name: "Firebase", level: 85, icon: "bi bi-fire", color: "#ffa726", experience: "1+ year" },
      { name: "REST APIs", level: 93, icon: "bi bi-plug-fill", color: "#00d2ff", experience: "2+ years" }
    ]
  };

  const allSkills = Object.values(skillsData).flat();
  const filtered = activeCategory === "all" 
    ? allSkills 
    : skillsData[activeCategory] || allSkills;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSkills(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.2 });

    skillRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section id="skills" className="py-6 enhanced-skills-section" data-aos="fade-up">
      <Container>
        <h2 className="fw-bold text-center mb-2" style={{
          color: "var(--text-color)",
          fontSize: "2.5rem",
          marginBottom: "3rem"
        }}>
          <i className="bi bi-laptop-fill me-2" style={{ color: "var(--accent-1)" }}></i>
          Technical Expertise
        </h2>

        {/* Category Filter */}
        <div className="skill-categories mb-5" data-aos="fade-down" data-aos-delay="100">
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem"
          }}>
            {["all", "mobile", "frontend", "backend", "aiml", "tools"].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`skill-filter-btn ${activeCategory === cat ? "active" : ""}`}
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: activeCategory === cat ? "2px solid var(--accent-1)" : "1px solid var(--border-color)",
                  background: activeCategory === cat ? "rgba(0, 210, 255, 0.1)" : "transparent",
                  color: activeCategory === cat ? "var(--accent-1)" : "var(--text-secondary)",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  fontSize: "0.95rem",
                  textTransform: "capitalize"
                }}
              >
                {cat === "all" ? "All Skills" : cat === "mobile" ? "Flutter & Mobile" : cat === "aiml" ? "AI / ML" : cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <Row className="g-4">
          {filtered.map((skill, index) => (
            <Col md={6} lg={4} key={skill.name}>
              <div
                ref={el => skillRefs.current[index] = el}
                id={`skill-${index}`}
                className="skill-item animated-skill"
                style={{
                  background: "linear-gradient(135deg, var(--card-bg) 0%, rgba(0, 210, 255, 0.03) 100%)",
                  border: `1px solid ${skill.color}30`,
                  borderRadius: "12px",
                  padding: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  cursor: "pointer",
                  transform: visibleSkills.has(`skill-${index}`) ? "translateY(0)" : "translateY(30px)",
                  opacity: visibleSkills.has(`skill-${index}`) ? 1 : 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 20px 40px ${skill.color}25`;
                  e.currentTarget.style.borderColor = `${skill.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = `${skill.color}30`;
                }}
              >
                {/* Glowing border animation */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(45deg, transparent, ${skill.color}10, transparent)`,
                  animation: "shimmer 3s infinite",
                  pointerEvents: "none"
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem"
                  }}>
                    <div style={{
                      fontSize: "1.8rem",
                      animation: "pulse-icon 2s ease-in-out infinite",
                      color: skill.color
                    }}>
                      <i className={skill.icon}></i>
                    </div>
                    <div style={{
                      display: "inline-block",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: skill.color,
                      background: `${skill.color}15`,
                      padding: "0.35rem 0.75rem",
                      borderRadius: "20px",
                      border: `1px solid ${skill.color}40`
                    }}>
                      {skill.level}%
                    </div>
                  </div>

                  <h5 style={{
                    color: "var(--text-color)",
                    marginBottom: "0.75rem",
                    fontWeight: "700",
                    fontSize: "1.1rem"
                  }}>
                    {skill.name}
                  </h5>

                  {/* Animated Skill Bar */}
                  <div style={{
                    height: "6px",
                    background: "rgba(0, 210, 255, 0.1)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "0.75rem",
                    border: "1px solid rgba(0, 210, 255, 0.2)"
                  }}>
                    <div
                      style={{
                        height: "100%",
                        background: `linear-gradient(90deg, ${skill.color}, #00d2ff)`,
                        borderRadius: "10px",
                        width: visibleSkills.has(`skill-${index}`) ? `${skill.level}%` : "0%",
                        transition: "width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        boxShadow: `0 0 15px ${skill.color}60`,
                        animation: "fillBar 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                      }}
                    />
                  </div>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)"
                  }}>
                    <span>Experience</span>
                    <span style={{ fontWeight: "600", color: skill.color }}>
                      {skill.experience}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Proficiency Legend */}
        <div 
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "linear-gradient(135deg, rgba(0, 210, 255, 0.05), rgba(146, 95, 240, 0.05))",
            borderRadius: "15px",
            border: "1px solid var(--border-color)",
            textAlign: "center"
          }}
          data-aos="fade-up"
        >
          <p style={{
            color: "var(--text-secondary)",
            marginBottom: "1rem",
            fontSize: "0.95rem"
          }}>
            <i className="bi bi-bullseye me-2" style={{ color: "var(--accent-1)" }}></i><strong>Proficiency Scale:</strong> 80-85% = Intermediate | 85-90% = Advanced | 90%+ = Expert
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap"
          }}>
            {[
              { range: "80-85%", label: "Intermediate", color: "#ff9500" },
              { range: "85-90%", label: "Advanced", color: "#00d2ff" },
              { range: "90%+", label: "Expert", color: "#00ff88" }
            ].map(item => (
              <div key={item.label} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <div style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: item.color,
                  boxShadow: `0 0 10px ${item.color}`
                }} />
                <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        .enhanced-skills-section {
          position: relative;
          padding: 4rem 0;
        }

        .skill-filter-btn {
          transition: all 0.3s ease;
        }

        .skill-filter-btn:hover {
          transform: translateY(-2px);
        }

        .animated-skill {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes fillBar {
          0% { width: 0; }
          100% { width: var(--skill-level); }
        }

        @media (max-width: 768px) {
          .enhanced-skills-section {
            padding: 2rem 0;
          }

          .animated-skill {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedSkills;
