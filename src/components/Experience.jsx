import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Softpro India",
      position: "Full Stack Developer Intern",
      duration: "Jun 2025 - Aug 2025",
      location: "Noida, UP",
      description: "Engineered an agri-marketplace with real-time pricing and secure payments, demonstrating expertise in modern web technologies.",
      achievements: [
        "Developed AgriTrade platform with secure payment integration",
        "Implemented role-based access control systems",
        "Built scalable web applications using Node.js, Express & React",
        "Improved system efficiency via modular backend architecture"
      ],
      tech: ["JavaScript", "Node.js", "React"],
      color: "var(--accent-1)",
      type: "Full Stack Development"
    },
    {
      company: "HCL Technologies",
      position: "Software Engineer Intern",
      duration: "Jun 2024 - Nov 2024",
      location: "Noida, UP",
      description: "Specialized training in Java Web Development with AI integration, focusing on secure authentication and CRUD operations.",
      achievements: [
        "Developed InstaSmart platform with secure authentication",
        "Implemented comprehensive CRUD operations",
        "Built robust backend systems with Node.js and Express",
        "Enhanced application security and data integrity"
      ],
      tech: ["JavaScript", "Node.js", "MongoDB"],
      color: "var(--accent-2)",
      type: "Java Web Development with AI"
    }
  ];

  return (
    <section id="experience" className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-down" style={{ color: "var(--text-color)" }}>
          Professional Experience
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="timeline-marker" style={{ backgroundColor: exp.color }}></div>
              <div className="timeline-content">
                <div className="experience-card" style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "15px",
                  padding: "2rem",
                  marginLeft: "2rem",
                  position: "relative",
                  transition: "all 0.3s ease"
                }}>
                  <div className="company-header" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                    gap: "1rem"
                  }}>
                    <div>
                      <h3 style={{ color: exp.color, marginBottom: "0.5rem", fontSize: "1.4rem" }}>
                        {exp.company}
                      </h3>
                      <h4 style={{ color: "var(--text-secondary)", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                        {exp.position}
                      </h4>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ color: "var(--accent-1)", fontWeight: "600", marginBottom: "0.25rem" }}>
                        {exp.duration}
                      </div>
                      <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                        <i className="bi bi-geo-alt-fill me-1" style={{ color: "var(--accent-1)" }}></i>{exp.location}
                      </div>
                    </div>
                  </div>

                  <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                    {exp.description}
                  </p>

                  <div className="achievements">
                    <h5 style={{ color: "var(--text-color)", marginBottom: "1rem" }}>Key Achievements:</h5>
                    <ul style={{ paddingLeft: "1.5rem" }}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} style={{
                          color: "var(--text-secondary)",
                          marginBottom: "0.5rem",
                          lineHeight: "1.5"
                        }}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-stack" style={{ marginTop: "1.5rem" }}>
                    <h6 style={{ color: "var(--text-color)", marginBottom: "0.75rem" }}>Technologies Used:</h6>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {exp.tech.map((tech, techIndex) => (
                        <span key={techIndex} style={{
                          backgroundColor: exp.color + "20",
                          border: `1px solid ${exp.color}40`,
                          color: exp.color,
                          padding: "0.25rem 0.75rem",
                          borderRadius: "15px",
                          fontSize: "0.85rem",
                          fontWeight: "500",
                          transition: "all 0.3s ease"
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    marginTop: "1rem",
                    padding: "0.75rem",
                    backgroundColor: "var(--dark-bg)",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)"
                  }}>
                    <small style={{ color: "var(--accent-1)", fontWeight: "600" }}>
                      <i className="bi bi-bullseye me-1"></i>Training Focus: {exp.type}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-1), var(--accent-2));
          border-radius: 1px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: -0.5rem;
          top: 2rem;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 3px solid var(--bg-color);
          z-index: 1;
        }

        .experience-card {
          position: relative;
          overflow: hidden;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.1), transparent);
          transition: left 0.5s;
          z-index: 0;
        }

        .experience-card:hover::before {
          left: 100%;
        }

        .experience-card:hover {
          border-color: var(--accent-1) !important;
          box-shadow: 0 0 40px rgba(0, 210, 255, 0.2) !important;
          transform: translateX(5px) scale(1.02);
        }

        .experience-card > * {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .timeline {
            padding-left: 1rem;
          }

          .timeline::before {
            left: 0.5rem;
          }

          .timeline-marker {
            left: -0.25rem;
          }

          .timeline-content .experience-card {
            margin-left: 1rem;
            padding: 1.5rem;
          }

          .company-header {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;