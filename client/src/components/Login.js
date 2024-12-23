import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../index.css'; 

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 
  const [formData, setFormData] = useState({
    email: '',
    password: '', 
  });

  const [error, setError] = useState('');

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL.replace(/\/+$/, '');

      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if(response.ok){
        login(data.token);
        navigate('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const section = document.getElementById('login-section');

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
    <div className="login-container">
      <section id="login-section">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
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

          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;