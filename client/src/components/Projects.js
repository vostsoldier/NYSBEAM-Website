import React, { useEffect } from 'react';
import '../index.css'; 

const Projects = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const headerTitle = document.querySelector('header h1');

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    if (headerTitle) {
      observer.observe(headerTitle);
    }

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      if (headerTitle) {
        observer.unobserve(headerTitle);
      }
    };
  }, []);

  return (
    <main>
      <section id="projects-overview">
        <h2>Projects Overview</h2>
        <p>Welcome to NYSBEAM's projects page. Here you can find information about our ongoing and completed projects.</p>
      </section>
      <section id="current-projects">
        <h2>Current Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Project One" />
            <h3>Project One</h3>
            <p className="project-description">A brief description of Project One.</p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Project Two" />
            <h3>Project Two</h3>
            <p className="project-description">A brief description of Project Two.</p>
          </div>
        </div>
      </section>
      <section id="completed-projects">
        <h2>Completed Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Project Three" />
            <h3>Project Three</h3>
            <p className="project-description">A brief description of Project Three.</p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/200" alt="Project Four" />
            <h3>Project Four</h3>
            <p className="project-description">A brief description of Project Four.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;