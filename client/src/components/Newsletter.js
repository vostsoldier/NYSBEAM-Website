import React, { useState, useEffect } from 'react';
import '../index.css';

const Newsletter = () => {
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
    const section = document.getElementById('newsletter-section');
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observerRef.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  useEffect(() => {
    const section = document.getElementById('newsletter-signup');
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observerRef.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <div className="newsletter-container2 ">
        <section id="newsletter-section">
          <h2>A Fresh Start</h2>
          <h3>By: Vivian and Sidrat</h3>
          <h5>December 24st, 2024</h5>
          <p>Welcome Welcome, this is just a test and will be filled out later</p>
        </section>
      </div>
    </>
  );
};

export default Newsletter;