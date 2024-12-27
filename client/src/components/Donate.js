import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../index.css';

const Donate = () => {
  const { isAuthenticated, token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });
  const [message, setMessage] = useState('');

  const { name, email, amount, message: userMessage } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL.replace(/\/+$/, '');

      const response = await fetch(`${apiUrl}/api/donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(isAuthenticated && { 'Authorization': `Bearer ${token}` })
        },
        body: JSON.stringify({ name, email, amount, message: userMessage })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for your donation!');
        setFormData({ name: '', email: '', amount: '', message: '' });
      } else {
        setMessage(data.message || 'Donation failed');
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const section = document.getElementById('donate-section');

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
    <div className="donate-container">
      <section id="donate-section">
        <h2>Donate to NYSBEAM</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit} className="donate-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />

          <label htmlFor="amount">Donation Amount ($):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleChange}
            required
            min="1"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={userMessage}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>

          <button type="submit">Donate</button>
        </form>
      </section>
    </div>
  );
};

export default Donate;