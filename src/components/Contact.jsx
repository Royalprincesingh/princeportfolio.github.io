import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    if (!value.trim()) {
      newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        newErrors[name] = 'Please enter a valid email';
      } else {
        delete newErrors[name];
      }
    } else if (name === 'message' && value.trim().length < 10) {
      newErrors[name] = 'Message must be at least 10 characters';
    } else {
      delete newErrors[name];
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (touched[name]) {
      setErrors(validateField(name, value));
    }
    setStatus({ message: '', type: '' });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validateField(name, formData[name]));
    setFocusedField(null);
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocusedField(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const fieldErrors = validateField(field, formData[field]);
      Object.assign(newErrors, fieldErrors);
    });

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      setStatus({
        message: 'Please fix the errors above',
        type: 'error'
      });
      return;
    }

    setLoading(true);
    setStatus({ message: '', type: '' });

    try {
      const submitData = new FormData();
      submitData.append('access_key', 'acd4cc7e-30b2-430e-93a2-ca3bc52142b7');
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          message: 'Success!',
          type: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
        setErrors({});
      } else {
        setStatus({
          message: 'Error',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        message: 'Error',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-5" style={{ background: "var(--bg-color)" }}>
      <div className="container">
        <div className="row g-5">
          {/* Contact Info Section */}
          <div className="col-lg-5" data-aos="fade-right">
            <h2 className="display-5 fw-bold gradient-text mb-4" data-aos="fade-down">Let's Connect</h2>
            <p className="text-secondary mb-4" data-aos="fade-up" data-aos-delay="200">
              Currently seeking entry-level roles in MERN stack and Web Development.
            </p>

            {/* Availability Indicator */}
            <div className="d-flex align-items-center mb-4" data-aos="fade-up" data-aos-delay="300">
              <div style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#28a745",
                borderRadius: "50%",
                marginRight: "10px",
                animation: "pulse 2s infinite"
              }}></div>
              <span style={{ color: "#28a745", fontWeight: "600" }}>Open for New Opportunities</span>
            </div>

            {/* Contact Details */}
            <div className="d-flex align-items-center mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-icon me-3">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h6 className="mb-0" style={{ color: "var(--accent-1)" }}>Location</h6>
                <p className="mb-0 text-secondary">Lucknow, Uttar Pradesh</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4" data-aos="fade-up" data-aos-delay="500">
              <div className="contact-icon me-3">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h6 className="mb-0" style={{ color: "var(--accent-1)" }}>Email</h6>
                <p className="mb-0 text-secondary">princesinghsikata@gmail.com</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4" data-aos="fade-up" data-aos-delay="600">
              <div className="contact-icon me-3">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h6 className="mb-0" style={{ color: "var(--accent-1)" }}>Phone</h6>
                <p className="mb-0 text-secondary">+91 8858180597</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links mt-5" data-aos="fade-up" data-aos-delay="700">
              <a
                href="https://linkedin.com/in/royaliprincesingh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info rounded-circle me-2"
                style={{ width: "50px", height: "50px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/royalprincesingh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle me-2"
                style={{ width: "50px", height: "50px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="/Royal_Prince_Singh_Resume.pdf"
                download="Royal_Prince_Singh_Resume.pdf"
                className="btn btn-info rounded-pill px-4 text-white fw-semibold d-inline-flex align-items-center"
                style={{ fontWeight: "600" }}
              >
                <i className="bi bi-file-earmark-pdf-fill me-2"></i>Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form-card p-4">
              {status.message && (
                <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}
                     style={{
                       animation: 'slideInDown 0.3s ease-out',
                       borderRadius: '8px',
                       backgroundColor: status.type === 'success' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                       borderColor: status.type === 'success' ? '#28a745' : '#dc3545',
                       color: status.type === 'success' ? '#28a745' : '#dc3545'
                     }}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="Name"
                        required
                        className={`form-control bg-transparent text-white border-secondary ${errors.name ? 'is-invalid' : ''}`}
                        style={{
                          backgroundColor: focusedField === 'name' ? 'rgba(0, 210, 255, 0.05)' : 'transparent',
                          borderColor: errors.name ? '#dc3545' : focusedField === 'name' ? 'var(--accent-1)' : 'rgba(255, 255, 255, 0.2)',
                          boxShadow: focusedField === 'name' ? `0 0 15px rgba(0, 210, 255, 0.2)` : 'none',
                          color: 'var(--text-color)'
                        }}
                      />
                      <label htmlFor="name" className="text-secondary">Your Name</label>
                      {errors.name && touched.name && (
                        <small className="text-danger d-block mt-1" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                          <i className="bi bi-exclamation-circle-fill me-1"></i>{errors.name}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="Email"
                        required
                        className={`form-control bg-transparent text-white border-secondary ${errors.email ? 'is-invalid' : ''}`}
                        style={{
                          backgroundColor: focusedField === 'email' ? 'rgba(0, 210, 255, 0.05)' : 'transparent',
                          borderColor: errors.email ? '#dc3545' : focusedField === 'email' ? 'var(--accent-1)' : 'rgba(255, 255, 255, 0.2)',
                          boxShadow: focusedField === 'email' ? `0 0 15px rgba(0, 210, 255, 0.2)` : 'none',
                          color: 'var(--text-color)'
                        }}
                      />
                      <label htmlFor="email" className="text-secondary">Your Email</label>
                      {errors.email && touched.email && (
                        <small className="text-danger d-block mt-1" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                          <i className="bi bi-exclamation-circle-fill me-1"></i>{errors.email}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <textarea
                        id="msg"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="Message"
                        required
                        className={`form-control bg-transparent text-white border-secondary ${errors.message ? 'is-invalid' : ''}`}
                        style={{
                          height: "150px",
                          backgroundColor: focusedField === 'message' ? 'rgba(0, 210, 255, 0.05)' : 'transparent',
                          borderColor: errors.message ? '#dc3545' : focusedField === 'message' ? 'var(--accent-1)' : 'rgba(255, 255, 255, 0.2)',
                          boxShadow: focusedField === 'message' ? `0 0 15px rgba(0, 210, 255, 0.2)` : 'none',
                          color: 'var(--text-color)',
                          resize: 'vertical'
                        }}
                      />
                      <label htmlFor="msg" className="text-secondary">Message</label>
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        fontSize: '0.8rem',
                        color: formData.message.length < 10 ? '#dc3545' : '#28a745'
                      }}>
                        {formData.message.length}/10 min
                      </div>
                      {errors.message && touched.message && (
                        <small className="text-danger d-block mt-1" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                          <i className="bi bi-exclamation-circle-fill me-1"></i>{errors.message}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="col-12 text-end">
                    <button
                      type="submit"
                      disabled={loading || Object.keys(errors).length > 0}
                      className="btn btn-info px-5 py-3 rounded-pill fw-bold text-uppercase shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                        border: "none",
                        opacity: loading || Object.keys(errors).length > 0 ? 0.6 : 1,
                        cursor: loading || Object.keys(errors).length > 0 ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        transform: loading ? 'scale(0.98)' : 'scale(1)',
                        boxShadow: "0 4px 20px rgba(0, 210, 255, 0.3)"
                      }}
                      onMouseEnter={(e) => {
                        if (!loading && Object.keys(errors).length === 0) {
                          e.target.style.transform = 'scale(1.05)';
                          e.target.style.boxShadow = '0 8px 30px rgba(0, 210, 255, 0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!loading && Object.keys(errors).length === 0) {
                          e.target.style.transform = 'scale(1)';
                          e.target.style.boxShadow = '0 4px 20px rgba(0, 210, 255, 0.3)';
                        }
                      }}
                    >
                      {loading ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                          <span style={{
                            display: 'inline-block',
                            width: '1rem',
                            height: '1rem',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderTop: '2px solid white',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite'
                          }}/>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Contact Form Card - Glassmorphism */
        .contact-form-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          position: relative;
          overflow: hidden;
        }

        .contact-form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.05), transparent);
          transition: left 0.6s;
          z-index: 0;
        }

        .contact-form-card:hover::before {
          left: 100%;
        }

        .contact-form-card > * {
          position: relative;
          z-index: 1;
        }

        /* Enhanced Focus Effects */
        .form-control:focus {
          background: rgba(0, 210, 255, 0.08) !important;
          border-color: var(--accent-1) !important;
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.3) !important;
          color: var(--text-color) !important;
          transform: translateY(-2px);
        }

        .form-control {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-color);
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        /* Contact Icons */
        .contact-icon {
          width: 50px;
          height: 50px;
          background: var(--card-bg);
          border: 1px solid var(--accent-1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-icon:hover::before {
          opacity: 0.1;
        }

        .contact-icon:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
        }

        /* Floating Labels */
        .form-floating > label {
          color: var(--text-secondary);
          transition: all 0.3s ease;
          padding: 0.5rem 0.75rem;
        }

        .form-floating > .form-control:focus ~ label,
        .form-floating > .form-control:not(:placeholder-shown) ~ label {
          color: var(--accent-1);
          transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
          font-weight: 600;
        }

        /* Social Links Enhancement */
        .social-links .btn {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-links .btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 210, 255, 0.3);
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-1));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        @media (max-width: 768px) {
          .row.g-5 {
            --bs-gutter-x: 2rem;
          }

          .contact-form-card {
            margin-top: 2rem;
          }

          .social-links {
            justify-content: center;
          }

          .social-links .btn {
            margin: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
