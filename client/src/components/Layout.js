import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import '../index.css'; 

const Layout = ({ children }) => {
  const { isAuthenticated, logout } = useContext(AuthContext); 
  const location = useLocation();

  const getPageTitle = () => {
    switch(location.pathname){
      case '/':
        return 'Home';
      case '/about':
        return 'About Us';
      case '/newsletter':
        return 'Media';
      case '/videos':
        return 'Videos';
      case '/events':
        return 'Events';
      case '/signup':
        return 'Create Account';
      case '/login':
        return 'Login';
      case '/donate':
        return 'Donate';
      default:
        return 'NYSBEAM';
    }
  };

  return (
    <div className="app-container">
      <Link to="/donate" className="donate-bar">
        Donate Now
      </Link>
      {location.pathname === '/' ? (
        <header className="hero-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/newsletter">Media</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/events">Events</Link></li>
              {!isAuthenticated && <li><Link to="/signup">Create Account</Link></li>}
              {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
              {isAuthenticated && <li><button onClick={logout} className="logout-button">Logout</button></li>}
            </ul>
          </nav>
          <h1>{getPageTitle()}</h1>
        </header>
      ) : (
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/newsletter">Media</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/events">Events</Link></li>
              {!isAuthenticated && <li><Link to="/signup">Create Account</Link></li>}
              {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
              {isAuthenticated && <li><button onClick={logout} className="logout-button">Logout</button></li>}
            </ul>
          </nav>
          <h1>{getPageTitle()}</h1>
        </header>
      )}
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