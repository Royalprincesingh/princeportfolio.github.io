import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const [counts, setCounts] = useState({ projects: 0, certifications: 0, experience: 0, contributions: 0 });

  const stats = [
    { label: "Projects Completed", value: 12, icon: "bi bi-rocket-takeoff-fill", color: "#00d2ff" },
    { label: "Certifications Earned", value: 13, icon: "bi bi-trophy-fill", color: "#925ff0" },
    { label: "Years of Experience", value: 3, icon: "bi bi-briefcase-fill", color: "#ff6b35" },
    { label: "Research Publications", value: 1, icon: "bi bi-journal-bookmark-fill", color: "#00d2ff" }
  ];

  useEffect(() => {
    const counters = {
      projects: { target: 12, current: 0 },
      certifications: { target: 13, current: 0 },
      experience: { target: 3, current: 0 },
      contributions: { target: 1, current: 0 }
    };

    const interval = setInterval(() => {
      let allDone = true;
      const newCounts = {};

      Object.keys(counters).forEach(key => {
        if (counters[key].current < counters[key].target) {
          counters[key].current += Math.ceil(counters[key].target / 30);
          if (counters[key].current > counters[key].target) {
            counters[key].current = counters[key].target;
          }
          allDone = false;
        }
        newCounts[key] = counters[key].current;
      });

      setCounts(newCounts);

      if (allDone) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 stats-section" data-aos="fade-up">
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div
                className="stat-card"
                style={{
                  background: `linear-gradient(135deg, rgba(0, 210, 255, 0.05), rgba(146, 95, 240, 0.05))`,
                  border: `1px solid ${stat.color}30`,
                  borderRadius: "15px",
                  padding: "2rem",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                  e.currentTarget.style.boxShadow = `0 30px 60px ${stat.color}20`;
                  e.currentTarget.style.borderColor = `${stat.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = `${stat.color}30`;
                }}
              >
                {/* Animated background pulse */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle, ${stat.color}10, transparent)`,
                    animation: "pulse-bg 3s ease-in-out infinite",
                    pointerEvents: "none"
                  }}
                />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    fontSize: "2.8rem",
                    marginBottom: "0.5rem",
                    animation: "float 3s ease-in-out infinite",
                    color: stat.color
                  }}>
                    <i className={stat.icon}></i>
                  </div>
                  <div style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    background: `linear-gradient(135deg, ${stat.color}, #00d2ff)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.5rem"
                  }}>
                    {stat.label === "Years of Experience" 
                      ? counts.experience 
                      : stat.label === "Certifications Earned"
                      ? counts.certifications
                      : stat.label === "Projects Completed"
                      ? counts.projects
                      : counts.contributions}
                    {stat.label === "Years of Experience" && "+"}
                  </div>
                  <p style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    margin: 0
                  }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-bg {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .stats-section {
          background: linear-gradient(135deg, rgba(0, 210, 255, 0.02) 0%, rgba(147, 95, 240, 0.02) 100%);
          position: relative;
          padding: 4rem 0;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
