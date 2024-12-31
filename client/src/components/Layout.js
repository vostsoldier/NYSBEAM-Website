import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import Instagram from '../assets/media-logos/media1.svg';
import Spotify from '../assets/media-logos/media2.svg';
import Discord from '../assets/media-logos/media3.svg';
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
      {location.pathname === '/' ? (
        <header className="hero-header">
          <nav>
            <ul className="nav-bar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li className="dropdown">
                <span className="dropbtn">Media</span>
                <div className="dropdown-content">
                  <Link to="/newsletter">Newsletter</Link>
                  <Link to="/videos">Videos</Link>
                </div>
              </li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/donate">Donate Now!</Link></li>
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
              <li className="dropdown">
                <span className="dropbtn">Media</span>
                <div className="dropdown-content">
                  <Link to="/newsletter">Newsletter</Link>
                  <Link to="/videos">Videos</Link>
                </div>
              </li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/donate">Donate Now!</Link></li>
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
      <div className="newsletter-wrapper">
        <div className="newsletter-container">
          <section id="newsletter-info" className="media-container">
            <div className="media-content-wrapper">
              <h2>Check out our post and podcast content!</h2>
              <div className="media-icon-wrapper">
                <ul className="media-icons">
                  <li className="media-logo" id="spotify">
                    <Link to="https://open.spotify.com/user/31x7q7fq724ky2jpimepbtqms2ze">
                      <img src={Spotify} alt="Spotify" />
                    </Link>
                  </li>
                  <li className="media-logo" id="instagram">
                    <Link to="https://www.instagram.com/nysbeam">
                      <img src={Instagram} alt="Instagram" />
                    </Link>
                  </li>
                  <li className="media-logo" id="discord">
                    <Link to="https://discord.gg/AfKfs6qvcY">
                      <img src={Discord} alt="Discord" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section id="newsletter-signup" className="newsletter-signup-container">
            <h2>Subscribe to our Newsletter</h2>
            <form className="newsletter-form">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </section>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 NYSBEAM</p>
      </footer>
    </div>
  );
};

export default Layout;