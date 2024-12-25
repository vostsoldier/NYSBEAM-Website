import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import '../index.css'; 

const Layout = ({ children }) => {
  const { isAuthenticated, logout } = useContext(AuthContext); 

  return (
    <div className="app-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            {/*<li><Link to="/projects">Our Projects</Link></li>*/}
            {!isAuthenticated && <li><Link to="/signup">Create Account</Link></li>}
            {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
            {isAuthenticated && <li><button onClick={logout} className="logout-button">Logout</button></li>}
          </ul>
        </nav>
        <h1>NYSBEAM</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2024 NYSBEAM</p>
      </footer>
    </div>
  );
};

export default Layout;