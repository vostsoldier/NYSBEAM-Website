import React, { useEffect, useContext } from 'react';
import '../index.css'; 
import { AuthContext } from '../context/AuthContext';

const Projects = () => {
  const { isAuthenticated, token } = useContext(AuthContext);

  const handleRegister = async (eventId) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL.replace(/\/+$/, '');

      const response = await fetch(`${apiUrl}/api/event-registrations/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ eventId })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
    }
  };

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
        <h2>Events</h2>
        <p>Welcome to NYSBEAM's events page. Here you can find information about our ongoing and completed events.</p>
      </section>
      <section id="current-projects">
        <h2>Upcoming Events</h2>
        <div className="projects-container">
          <div className="project-card">
            <img loading="lazy" src="https://via.placeholder.com/200" alt="Project One" />
            <h3>Event One</h3>
            <p className="project-description">A brief description of Project One.</p>
            {isAuthenticated && <button onClick={() => handleRegister(1)}>Register</button>}
          </div>
          <div className="project-card">
            <img loading="lazy" src="https://via.placeholder.com/200" alt="Project Two" />
            <h3>Event Two</h3>
            <p className="project-description">A brief description of Project Two.</p>
            {isAuthenticated && <button onClick={() => handleRegister(2)}>Register</button>}
          </div>
        </div>
      </section>
      <section id="completed-projects">
        <h2>Event Archive</h2>
        <div className="projects-container">
          <div className="project-card">
            <img loading="lazy" src="https://via.placeholder.com/200" alt="Project Three" />
            <h3>Event Three</h3>
            <p className="project-description">A brief description of Project Three.</p>
          </div>
          <div className="project-card">
            <img loading="lazy" src="https://via.placeholder.com/200" alt="Project Four" />
            <h3>Event Four</h3>
            <p className="project-description">A brief description of Project Four.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;