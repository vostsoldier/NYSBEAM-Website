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
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Our Projects</a></li> 
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <h1>About NYSBEAM</h1>
      </header>
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
          </div>
        </section>
        <section id="history">
          <h2>Our History</h2>
          <p>Background and history of NYSBEAM.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 NYSBEAM</p>
      </footer>
    </div>
  );
};

export default About;