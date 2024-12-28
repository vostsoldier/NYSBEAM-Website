import React from 'react';
import '../index.css';

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to NYSBEAM</h1>
        <p>Empowering Teens Through Mental Health Awareness</p>
        <a href="/signup" className="hero-button">Get Involved</a>
      </div>
    </section>
  );
};

export default HeroSection;