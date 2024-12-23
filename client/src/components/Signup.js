import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import '../index.css';

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const { name, email, password, confirmPassword } = formData;

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    if(password !== confirmPassword){
      setError('Passwords do not match');
      return;
    }

    try {
      const apiUrl = process.env.REACT_APP_API_URL.replace(/\/+$/, '');

      const response = await fetch(`${apiUrl}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if(response.ok){
        login(data.token);
        navigate('/');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const section = document.getElementById('signup-section');

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
    <div className="signup-container">
      <section id="signup-section">
        <h2>Create New Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
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

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={handleChange}
            required 
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            value={confirmPassword}
            onChange={handleChange}
            required 
          />

          <button type="submit">Sign Up</button>
        </form>
      </section>
    </div>
  );
};

export default Signup;