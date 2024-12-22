import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure CSS is imported

const Layout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div className="app-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            {!isAuthenticated && <li><Link to="/signup">Create Account</Link></li>}
            {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
            {isAuthenticated && <li><button onClick={handleLogout} className="logout-button">Logout</button></li>}
          </ul>
        </nav>
        <h1>NYSBEAM</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2023 NYSBEAM</p>
      </footer>
    </div>
  );
};

export default Layout;