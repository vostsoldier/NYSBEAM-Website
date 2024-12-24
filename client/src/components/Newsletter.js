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

  return (
    <div className="newsletter-container">
      <section id="newsletter-section">
        <h2>Subscribe to our Newsletter</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit} className="newsletter-form">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Newsletter;