import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../index.css'; 

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
    </div>
  );
};

export default Home;