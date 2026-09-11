import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Hero = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Background Elements */}
      <div className="mesh-gradient mesh-1"></div>
      <div className="mesh-gradient mesh-2"></div>

      {/* Interactive Neural Network SVG */}
      <div className="neural-network">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q50,5 100,20 T200,20" fill="none" stroke="url(#grad1)" strokeWidth="0.1" className="path-anim" />
          <path d="M0,50 Q50,35 100,50 T200,50" fill="none" stroke="url(#grad1)" strokeWidth="0.1" className="path-anim-delay" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#925ff0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* Left: Photo Section */}
          <div className="col-lg-5 text-center order-lg-2 mb-5 mb-lg-0">
            <div className="photo-container" ref={tiltRef}>
              <div className="photo-glow-effect"></div>
              <img 
                src="/royal-singh.png" 
                alt="Prince Singh (Royal Singh) - Flutter Developer & Full Stack Engineer"
                className="profile-photo shadow-lg"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300/12121a/00d2ff?text=PS"; }}
              />
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="col-lg-7 text-center text-lg-start order-lg-1">
            <div className="badge-modern mb-3">
              <span className="dot"></span> Available for Opportunities
            </div>
            
            <h1 className="hero-title">
              PRINCE <span className="last-name">SINGH</span>
              <span className="hero-alias d-block" style={{ fontSize: "1.25rem", letterSpacing: "2.5px", fontWeight: "600", color: "var(--accent-1)", marginTop: "6px", textTransform: "uppercase" }}>
                (Royal Singh)
              </span>
            </h1>
            
            <h2 className="hero-subtitle mb-4">
              Flutter Developer &amp; Full Stack Software Engineer <span className="separator">|</span> AI/ML Specialist
            </h2>
            
            <p className="hero-description mb-5">
              Hi, I'm <strong>Prince Singh</strong> (also known as <strong>Royal Singh</strong>), a passionate <strong>Flutter Developer</strong> and <strong>Full Stack Software Engineer</strong>. I specialize in building cross-platform mobile apps with Flutter &amp; Dart, scalable full-stack web platforms with MERN stack, and intelligent AI systems like <strong>Proctor AI</strong> and <strong>TrueSight AI</strong>.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn-main primary">Explore Work</a>
              <a href="#contact" className="btn-main secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background: #08080c;
          position: relative;
          overflow: hidden;
        }

        /* Mesh Gradients */
        .mesh-1 { position: absolute; top: -10%; left: -10%; width: 50%; height: 50%; background: radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%); }
        .mesh-2 { position: absolute; bottom: -10%; right: -10%; width: 50%; height: 50%; background: radial-gradient(circle, rgba(146, 95, 240, 0.15) 0%, transparent 70%); }

        /* Neural Network Animation */
        .neural-network { position: absolute; width: 100%; height: 100%; opacity: 0.4; pointer-events: none; }
        .path-anim { stroke-dasharray: 100; animation: dash 20s linear infinite; }
        @keyframes dash { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }

        /* Photo Styling */
        .photo-container { position: relative; z-index: 5; }
        .profile-photo {
          width: 320px; height: 320px;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          border: 2px solid rgba(255,255,255,0.1);
          animation: morph 8s ease-in-out infinite;
          object-fit: cover;
        }
        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
        }

        /* Typography */
        .hero-title { font-size: 4.5rem; font-weight: 900; color: #00d2ff; letter-spacing: -2px; }
        .last-name { color: #e2e8f0; }
        .hero-subtitle { color: #94a3b8; font-size: 1.5rem; }
        .hero-description { color: #94a3b8; max-width: 550px; font-size: 1.1rem; }

        /* Badge */
        .badge-modern {
          display: inline-flex; align-items: center;
          background: rgba(0, 210, 255, 0.1);
          color: #00d2ff; padding: 6px 16px;
          border-radius: 50px; font-size: 0.85rem; font-weight: 600;
        }
        .dot { width: 8px; height: 8px; background: #00d2ff; border-radius: 50%; margin-right: 10px; animation: blink 1.5s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        /* Modern Buttons */
        .btn-main {
          padding: 12px 32px; border-radius: 12px; font-weight: 700;
          text-decoration: none; transition: 0.4s;
        }
        .primary { background: #00d2ff; color: #08080c; box-shadow: 0 10px 20px rgba(0, 210, 255, 0.2); }
        .primary:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0, 210, 255, 0.4); }
        .secondary { border: 1px solid rgba(255,255,255,0.1); color: #fff; backdrop-filter: blur(10px); }
        .secondary:hover { background: rgba(255,255,255,0.05); border-color: #925ff0; }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .profile-photo { width: 250px; height: 250px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;