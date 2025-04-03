import React, { useState } from 'react';

const Portfolio = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = [
    {
      title: "Carsada",
      description: "Carsada is the app that revolutionizes your commute in Iloilo. Forget about the hassle of haggling for fares or waiting endlessly for jeepneys",
      image: "assets/carsada.png",
      technologies: ["Figma"],
      features: [
        "Easy to use interface",
        "Fixed fare system",
        "Destination notification alerts",
        "Real-time tracking",
        "Multiple payment options",
        "Driver ratings and reviews"
      ]
    },
    {
      title: "Hamunto",
      description: "Hamunto is the web app that makes joining a school club easier than ever. Whether you're looking for a creative outlet, a chance to make new friends, or a way to develop your skills, Hamunto has you covered.",
      image: "assets/Hamunto.png",
      technologies: ["Mongodb", "Express.js", "React" , "Node.js"],
      features: [
        "Interactive Dashboard",
        "Explore Section",
        "Joined Clubs Management",
        "Announcements System",
        "Notifications Center",
        "Messaging System",
        "Events Management",
        "Member Profiles",
        "Club Analytics",
        "Resource Sharing"
      ]
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">
          <span className="highlight">My Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, expandedProjects[index] ? project.features.length : 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  {project.features.length > 3 && (
                    <button 
                      className="more-btn"
                      onClick={() => toggleProject(index)}
                    >
                      {expandedProjects[index] ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 