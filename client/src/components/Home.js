import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../index.css'; 
import HeroSection from './HeroSection';
import TestimonialCarousel from './TestimonialCarousel';

const Home = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL.replace(/\/+$/, '');

      const response = await fetch(`${apiUrl}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if(response.ok){
        setMessage('Subscribed successfully!');
        setEmail('');
      } else {
        setMessage(data.message || 'Subscription failed');
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
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
    <>
      <div>
        <HeroSection />
        <main className="home-main">
          <section id="contact">
            <h2>Contact Us</h2>
            <p>Feel free to shoot us an email through board@nysbeam.org</p>
            <p>Shoot us a follow and a tag on Instagram, @NYSBEAM</p>
          </section>
        </main>
      </div>
    </>
  );
};
        {/*<section id="about">
          <h2>About Us</h2>
          <p>BEAM is a non-profit organization founded in New York State, specifically New York City</p>
          <p>We promote mental health, such as the importance of caring for one's mental state,</p>
          <p>as well as spreading awareness about having a good mindset</p>
          <p>We host online workshops, podcasts, fundraisers, and a lot more!</p>
        </section>*/}
        {/*<TestimonialCarousel />
        <h2>Media</h2>
        <Link to="/newsletter" className="home-box-link">
          <div className="home-box background-1">
            <img loading="lazy" src="https://via.placeholder.com/150" alt="Box 1" />
            <p>Newsletters</p>
            <span className="arrow">&#8594;</span>
          </div>
        </Link>
        <div className="home-boxes">
          <Link to="/events" className="home-box-link">
            <div className="home-box background-2">
              <img loading="lazy" src="https://via.placeholder.com/150" alt="Box 2"/>
              <p>Events</p>
              <span className="arrow">&#8594;</span>
            </div>
          </Link>
          <Link to="/box-breathing" className="home-box-link">
            <div className="home-box background-1">
              <img loading="lazy" src="https://via.placeholder.com/150" alt="Box 1" />
              <p>Box-Breathing</p>
              <span className="arrow">&#8594;</span>
            </div>
          </Link>
        </div>*/}

export default Home;
