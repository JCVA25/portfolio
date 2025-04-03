import React, { useState, useEffect } from 'react';
import '../styles/hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ['Frontend Developer', 'UI/UX Designer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        if (text === currentRole) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        } else {
          setText(currentRole.substring(0, text.length + 1));
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Hello, I'm</span>
            <div className="name-wrapper">
              <span className="name">John</span>
              <span className="name">Carlo</span>
            </div>
            <span className="role">{text}</span>
          </h1>
          <div className="social-links-container">
            <div className="social-links">
              <a href="https://instagram.com/sry.jc" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/john.carlo.240080" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="assets/Jcva123.png" alt="John Carlo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 