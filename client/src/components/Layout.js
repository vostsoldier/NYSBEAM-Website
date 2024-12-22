import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure CSS is imported

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/signup">Create Account</Link></li>
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