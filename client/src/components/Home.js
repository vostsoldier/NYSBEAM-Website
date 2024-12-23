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
          <p>BEAM is a non-profit organization founded in New York State, specifically New York City</p>
          <p>We promote mental health, such as the importance of caring for one's mental state,</p>
          <p>as well as spreading awareness about having a good mindset</p>
          <p>We host online workshops, podcasts, fundraisers, and alot more!</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Feel free to shoot us a email through board@nysbeam.org</p>
          <p>Shoot us a follow and a tag on instagram, @NYSBEAM</p>
        </section>
      </main>
    </div>
  );
};

export default Home;