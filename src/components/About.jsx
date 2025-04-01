import React from 'react';

const About = () => {
  const techStack = [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3-alt' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'node-js' },
    { name: 'GitHub', icon: 'github' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title"><span className="highlight">About Me</span></h2>
        
        <div className="about-content">
          <div className="about-info">
            <p className="about-description">
              As a second-year student at the Western Institute of Technology, I bring creativity 
              and technical skill to the design project. My iterative design process ensures 
              the final product is both visually appealing and highly functional. I'm dedicated 
              to delivering a design that you'll love.
            </p>
            
            <div className="tech-stack">
              <h3>Tech Stack I'm Using Now:</h3>
              <div className="tech-grid">
                {techStack.map((tech, index) => (
                  <div className="tech-item" key={index}>
                    <i className={`fab fa-${tech.icon}`}></i>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="contact-btn">
              Contact Me
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 