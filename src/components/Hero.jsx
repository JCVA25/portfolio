import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`hero ${isDarkMode ? 'dark' : 'light'}`} id="home">
      <div className="hero-container">
        <div className="hero-content">
          <ThemeToggle />
          <h1 className="hero-title">
            <span className="highlight">Hello, I'm</span>
            <div className="name-wrapper">
              <span className="name animate-name">John</span>
              <span className="name animate-name">Carlo</span>
            </div>
            <span className="role">Frontend Developer</span>
          </h1>
          <div className="social-links">
            <a href="https://instagram.com/sry.jc" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
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