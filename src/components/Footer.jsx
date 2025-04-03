import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.facebook.com/john.carlo.240080" className="social-circle">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/sry.jc" className="social-circle">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="footer-location">
          Iloilo City
        </div>

        <div className="footer-contact">
          <a href="tel:09324482723" className="contact-link">
            09284482727
          </a>
          <a href="mailto:iloilocityportfolio@gmail.com" className="contact-link">
            villaagustinjohncarlo@gmail.com
          </a>
        </div>

        <div className="footer-text">
          2025 John Carlo.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 