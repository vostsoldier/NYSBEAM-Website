import React, { useEffect } from 'react';
import '../index.css'; // Import existing CSS

const Home = () => {
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
        <h1>Welcome to NYSBEAM</h1>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>Information about NYSBEAM.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Contact information.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 NYSBEAM</p>
      </footer>
    </div>
  );
};

export default Home;