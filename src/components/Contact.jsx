import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
      <h2 className="section-title"><span className="highlight">Contact Me</span></h2>
        
        <form 
          action="https://formsubmit.co/villaagustinjohncarlo@gmail.com" 
          method="POST"
          className="contact-form"
        >
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />
          
          {/* Success page */}
          <input 
            type="hidden" 
            name="_next" 
            value="http://localhost:3000/#home"
          />

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 