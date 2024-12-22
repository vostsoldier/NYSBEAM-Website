import React, { useEffect } from 'react';
import '../index.css'; // Import existing CSS

const About = () => {
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

    // Cleanup on unmount
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
      <section id="mission">
        <h2>Our Mission</h2>
        <p>Information about NYSBEAM's mission.</p>
      </section>
      <section id="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Vivian" />
            <h3>Vivian</h3>
            <p className="role">Co-President</p>
            <div className="description">
              <p>Vivian is responsible for overseeing all organizational activities and ensuring smooth operations.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Sidrat" />
            <h3>Sidrat</h3>
            <p className="role">Co-President</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Arian" />
            <h3>Arian</h3>
            <p className="role">Vice-President</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Abdullah" />
            <h3>Abdullah</h3>
            <p className="role">Secretary</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Ryan" />
            <h3>Ryan</h3>
            <p className="role">Financial-Manager</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Fiona" />
            <h3>Fiona</h3>
            <p className="role">Designer</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Briana" />
            <h3>Briana</h3>
            <p className="role">Designer</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Peter" />
            <h3>Peter</h3>
            <p className="role">Webmaster</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Mason" />
            <h3>Mason</h3>
            <p className="role">Social Media Manager</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="history">
        <h2>Our History</h2>
        <p>Background and history of NYSBEAM.</p>
      </section>
    </main>
  );
};

export default About;