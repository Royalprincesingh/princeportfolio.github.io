import React, { useState, useRef, useEffect } from "react";

const AIBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! I'm Royal's AI Assistant. Ask me anything about his skills, projects, experience, or anything else you'd like to know!",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Knowledge base about Prince Singh (Royal Singh)
  const userKnowledge = {
    name: "Prince Singh (Royal Singh)",
    title: "Flutter Developer & Full Stack Software Engineer",
    email: "princesinghsikata@gmail.com",
    location: "Noida, India",
    education: "B.Tech in Information Technology (2022-2026) from A.P.J Abdul Kalam Technical University",
    
    skills: {
      mobile: ["Flutter", "Dart", "Cross-Platform (Android & iOS)", "Bloc/Provider"],
      frontend: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "Java", "PHP"],
      aiml: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
      tools: ["Git", "Docker", "Firebase", "REST APIs"]
    },

    experience: [
      {
        company: "Softpro India",
        position: "Full Stack Developer",
        duration: "Jun 2025 - Aug 2025",
        details: "Engineered AgriTrade marketplace with secure payments and role-based access control"
      },
      {
        company: "HCL Technologies",
        position: "Software Engineer Intern",
        duration: "Jun 2024 - Nov 2024",
        details: "Specialized in Java Web Development with AI integration and secure authentication"
      }
    ],

    projects: [
      {
        name: "hrpocketPRO",
        description: "Enterprise AI-powered Employee Attendance, Payroll & HR Management platform built with Flutter mobile app and MERN stack dashboard (Face Recognition, GPS Geofencing, Mock Location Prevention)",
        tech: ["Flutter", "Dart", "React", "Node.js", "Express", "MongoDB", "AI"],
        status: "Live Production (plus.hrpocket.in)",
        link: "https://plus.hrpocket.in"
      },
      {
        name: "Aura Market",
        description: "Cross-platform mobile e-commerce application with dynamic product catalogs and checkout",
        tech: ["Flutter", "Dart", "Node.js", "REST APIs"],
        status: "Live",
        github: "https://github.com/Royalprincesingh/aura-market"
      },
      {
        name: "TrueSight AI",
        description: "Advanced Computer Vision platform with real-time object detection and pose estimation",
        tech: ["Python", "TensorFlow", "OpenCV"],
        status: "Live"
      },
      {
        name: "Proctor AI",
        description: "Intelligent Examination Proctoring System with face detection and activity recognition",
        tech: ["Python", "OpenCV", "Machine Learning"],
        status: "Live",
        demo: "https://proctor-ai-exam.web.app/"
      },
      {
        name: "AgriTrade",
        description: "Agricultural marketplace with MERN stack and secure transactions",
        tech: ["Node.js", "React", "MongoDB"],
        status: "Completed"
      },
      {
        name: "Inventory Pro",
        description: "Enterprise inventory tracking with barcode scanning and real-time sync",
        tech: ["React", "Node.js", "Firebase"],
        status: "Completed"
      }
    ],

    certifications: [
      "Oracle Cloud Infrastructure Generative AI Professional",
      "Microsoft Azure AI Essentials Professional Certificate",
      "React JS Certification from Simplilearn",
      "PHP Certification from Simplilearn",
      "Java Spring Boot Internship Completion",
      "Ethical Hacking (Internshala & Naukri)"
    ],

    publications: [
      {
        title: "Gesture-Based Virtual Mouse: A Contactless HCI Paradigm Using AI and Fingertip Dynamics",
        journal: "Journal of Electrical Engineering",
        volume: "Volume 11, Issue 3",
        year: 2026
      }
    ],

    stats: {
      projects: 12,
      certifications: 13,
      experience: "3+",
      publications: 1
    }
  };

  // AI Response Generator
  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();

    // Flutter & Mobile queries
    if (message.match(/flutter|dart|mobile|android|ios|app developer/i)) {
      return `Yes! Prince Singh (Royal Singh) is a specialized **Flutter Developer**.\n\n• **Mobile Expertise**: Flutter, Dart, Cross-platform iOS & Android development, Bloc/Provider state management, REST API integration, and Firebase.\n• **Featured App**: **Aura Market** — Flutter e-commerce mobile application with Node.js/Express backend.\n\nLooking for a dedicated Flutter developer? Feel free to reach out!`;
    }

    // Skills queries
    if (message.match(/skill|expertise|technologies|what can you do/i)) {
      return `I have expertise across mobile, web, and AI:\n\n• **Flutter & Mobile**: ${userKnowledge.skills.mobile.join(", ")}\n• **Frontend**: ${userKnowledge.skills.frontend.join(", ")}\n• **Backend**: ${userKnowledge.skills.backend.join(", ")}\n• **AI/ML**: ${userKnowledge.skills.aiml.join(", ")}\n• **Tools**: ${userKnowledge.skills.tools.join(", ")}\n\nI'm a Flutter & Full-Stack Developer with AI/ML specialization!`;
    }

    // Projects queries
    if (message.match(/project|built|created|work/i)) {
      const projectList = userKnowledge.projects
        .map(p => `• **${p.name}**: ${p.description} (${p.status})`)
        .join("\n");
      return `My major projects:\n\n${projectList}\n\nMy flagship creations are **Aura Market** (Flutter), **Proctor AI**, and **TrueSight AI**!`;
    }

    // Experience queries
    if (message.match(/experience|internship|job|worked|company/i)) {
      const expList = userKnowledge.experience
        .map(e => `• **${e.position}** at ${e.company} (${e.duration})\n  ${e.details}`)
        .join("\n");
      return `My professional experience:\n\n${expList}\n\nI have 3+ years of hands-on development experience!`;
    }

    // Education queries
    if (message.match(/education|degree|university|college|study/i)) {
      return `**Education**: ${userKnowledge.education}\n\nI'm currently pursuing my B.Tech and have been actively learning and building projects throughout my academic journey!`;
    }

    // Certifications queries
    if (message.match(/certification|certificate|certified/i)) {
      const certList = userKnowledge.certifications.slice(0, 6).map(c => `• ${c}`).join("\n");
      return `I have ${userKnowledge.certifications.length} professional certifications:\n\n${certList}\n\n...and more! I'm passionate about continuous learning.`;
    }

    // Publications queries
    if (message.match(/publication|research|paper/i)) {
      const pubList = userKnowledge.publications
        .map(p => `• **${p.title}**\n  Published in: ${p.journal} - ${p.year}`)
        .join("\n");
      return `My research publication:\n\n${pubList}\n\nMy research focuses on AI and Human-Computer Interaction!`;
    }

    // Personal info queries
    if (message.match(/name|who are you|introduction|about you|prince|royal/i)) {
      return `Hello! I'm **${userKnowledge.name}**, a ${userKnowledge.title} based in ${userKnowledge.location}.\n\nI specialize in crafting cross-platform mobile apps with **Flutter & Dart**, full-stack web applications with **MERN Stack**, and intelligent **AI/ML** systems (like Proctor AI & TrueSight AI).\n\nEmail: ${userKnowledge.email}\nPhone: +91-8858180597`;
    }

    // Contact queries
    if (message.match(/contact|email|reach|connect|message/i)) {
      return `Feel free to reach out!\n\nEmail: ${userKnowledge.email}\nLocation: ${userKnowledge.location}\n\nYou can also check out my portfolio sections for more details about my work!`;
    }

    // Stats queries
    if (message.match(/how many|statistics|stats|number/i)) {
      return `Here are my stats:\n\n• **${userKnowledge.stats.projects} Projects** Completed\n• **${userKnowledge.stats.certifications} Certifications** Earned\n• **${userKnowledge.stats.experience} Years** of Experience\n• **${userKnowledge.stats.publications} Research** Publication\n\nAlways learning and building!`;
    }

    // Tech stack queries
    if (message.match(/stack|technologies|tools|best at/i)) {
      return `My primary tech stack:\n\n• **Mobile**: Flutter, Dart, Cross-Platform\n• **MERN**: MongoDB, Express, React, Node.js\n• **Python**: For AI/ML and Computer Vision\n• **Backend**: Java, PHP, REST APIs\n• **Databases**: MongoDB, MySQL, Firebase\n• **DevOps**: Docker, Git, Firebase\n\nI love full-stack development!`;
    }

    // AI/ML queries
    if (message.match(/ai|machine learning|ml|deep learning|neural|cv|computer vision/i)) {
      return `I'm deeply passionate about AI and Machine Learning!\n\n**My AI Projects**:\n• **TrueSight AI**: Computer Vision platform with real-time detection\n• **Proctor AI**: ML-based exam proctoring system\n\n**Technologies**: TensorFlow, OpenCV, Python, Deep Learning\n\nI've also published research on **Gesture-Based Virtual Mouse** - an AI-powered HCI system!`;
    }

    // MERN queries
    if (message.match(/mern|react|node|mongodb|express/i)) {
      return `MERN is my forte!\n\nI've built multiple full-stack applications with the MERN stack:\n• **AgriTrade**: Real-time marketplace with payments\n• **Inventory Pro**: Enterprise tracking system\n\n**MERN Skills**:\n- React with Hooks & State Management\n- Node.js & Express for scalable backends\n- MongoDB for flexible data storage\n- REST APIs & Real-time features\n\nReady to build production-grade applications!`;
    }

    // Web development queries
    if (message.match(/web|frontend|ui|ux|responsive/i)) {
      return `Web development is my primary focus!\n\n**Frontend Skills**:\n• React.js with advanced patterns\n• Modern CSS & Tailwind\n• Responsive Design\n• Interactive UIs with animations\n\n**Backend Skills**:\n• Node.js & Express\n• RESTful APIs\n• Database design\n• Authentication & Security\n\nI create beautiful, scalable web applications!`;
    }

    // Default responses for common greetings
    if (message.match(/hi|hello|hey|greetings/i)) {
      return `Hello! Great to meet you! I'm Prince's AI Assistant. Feel free to ask me anything about his skills, projects, experience, or certifications. What would you like to know?`;
    }

    if (message.match(/how are you|what's up/i)) {
      return `I'm doing great! Ready to help you learn more about Prince's work and experience. Ask away!`;
    }

    if (message.match(/thank|thanks|appreciate/i)) {
      return `You're welcome! Happy to help. Got any other questions about Prince?`;
    }

    if (message.match(/career|future|goals|next|plans/i)) {
      return `Prince is always looking for exciting opportunities to work on innovative projects involving:\n\n• **Mobile Development** with Flutter & Dart\n• **Full Stack Development** with MERN\n• **AI/ML Solutions** for real-world problems\n• **IoT & Computer Vision** applications\n• **Cloud Technologies** (Azure, Firebase)\n\nHe's passionate about solving complex problems and building scalable systems!`;
    }

    // Fallback response
    return `That's a great question! I'm here to help you learn about Prince's work.\n\nHere are some things I can help with:\n• Skills & Technologies\n• Projects & Portfolio\n• Experience & Internships\n• Achievements & Certifications\n• Research & Publications\n• Contact Information\n\nTry asking about any of these!`;
  };

  // Handle sending message
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Bot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-bot-btn"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          fontSize: "1.8rem",
          cursor: "pointer",
          zIndex: 9998,
          boxShadow: "0 8px 30px rgba(0, 210, 255, 0.4)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "pulse-bot 2s ease-in-out infinite"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 210, 255, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 210, 255, 0.4)";
        }}
      >
        {isOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-chat-dots-fill fs-4"></i>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="chat-window"
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            width: "400px",
            maxWidth: "92vw",
            height: "580px",
            maxHeight: "80vh",
            background: "rgba(12, 12, 20, 0.96)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            border: "1px solid rgba(0, 210, 255, 0.35)",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 210, 255, 0.2)",
            display: "flex",
            flexDirection: "column",
            zIndex: 9998,
            animation: "slideUp 0.3s ease-out"
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
              color: "white",
              padding: "1.5rem",
              borderRadius: "20px 20px 0 0",
              fontWeight: "700",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-robot fs-5"></i>
              <span>AI Assistant</span>
            </div>
            <span style={{ fontSize: "0.8rem", opacity: 0.9, marginLeft: "auto" }}>
              Always online
            </span>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}
          >
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                  animation: "fadeIn 0.3s ease-out"
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "0.75rem 1rem",
                    borderRadius: msg.sender === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    background: msg.sender === "user" 
                      ? "linear-gradient(135deg, var(--accent-1), var(--accent-2))"
                      : "rgba(0, 210, 255, 0.1)",
                    border: msg.sender === "user" ? "none" : "1px solid rgba(0, 210, 255, 0.3)",
                    color: msg.sender === "user" ? "white" : "var(--text-color)",
                    fontSize: "0.95rem",
                    lineHeight: "1.4",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--accent-1)",
                    animation: "bounce 1.4s infinite"
                  }}
                />
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--accent-1)",
                    animation: "bounce 1.4s infinite",
                    animationDelay: "0.2s"
                  }}
                />
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--accent-1)",
                    animation: "bounce 1.4s infinite",
                    animationDelay: "0.4s"
                  }}
                />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              padding: "1rem",
              borderTop: "1px solid rgba(0, 210, 255, 0.2)",
              borderRadius: "0 0 20px 20px"
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                border: "1px solid rgba(0, 210, 255, 0.3)",
                borderRadius: "12px",
                background: "rgba(0, 210, 255, 0.05)",
                color: "var(--text-color)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--accent-1)";
                e.target.style.background = "rgba(0, 210, 255, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(0, 210, 255, 0.3)";
                e.target.style.background = "rgba(0, 210, 255, 0.05)";
              }}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              style={{
                padding: "0.75rem 1rem",
                background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: isLoading ? "not-allowed" : "pointer",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
                opacity: isLoading ? 0.6 : 1
              }}
              onMouseEnter={(e) => !isLoading && (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              aria-label="Send message"
            >
              <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          40% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes pulse-bot {
          0%, 100% {
            box-shadow: 0 8px 30px rgba(0, 210, 255, 0.4);
          }
          50% {
            box-shadow: 0 8px 40px rgba(0, 210, 255, 0.6);
          }
        }

        .chat-window::-webkit-scrollbar {
          width: 6px;
        }

        .chat-window::-webkit-scrollbar-track {
          background: rgba(0, 210, 255, 0.05);
        }

        .chat-window::-webkit-scrollbar-thumb {
          background: rgba(0, 210, 255, 0.3);
          border-radius: 3px;
        }

        .chat-window::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 210, 255, 0.6);
        }

        @media (max-width: 576px) {
          .chat-window {
            width: calc(100vw - 16px) !important;
            height: 75vh !important;
            right: 8px !important;
            bottom: 85px !important;
            border-radius: 20px !important;
            background: rgba(12, 12, 20, 0.98) !important;
          }

          .floating-bot-btn {
            bottom: 20px !important;
            right: 20px !important;
            width: 52px !important;
            height: 52px !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default AIBot;
