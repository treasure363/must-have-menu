import React from 'react';
import './Navbar.css';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="navbar-left">
        <div className="logo">
          <img
            src="/MHM-logo.png"
            alt="logo"
            loading="lazy"
            style={{
              height: '40px',
              maxHeight: '100%'
            }}
          />
        </div>
        <ul className="nav-links">
          <li>Templates</li>
          <li>Digital</li>
          <li>Explore</li>
          <li>Pricing </li>
        </ul>
        <button className="demo-button" style={{ fontWeight: 'bold', fontSize: '15px' }}>Book a Demo</button>
      </div>
      <div className="navbar-right">
        <div className="position-relative me-3">
            <input 
              type="text" 
              placeholder="Search 25,000 templates" 
              className="search-bar pl-10  py-2 rounded-lg border border-gray-200"
            />
            <Search 
              className="position-absolute" 
              style={{ 
                left: '10px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#6c757d',
                width: '16px',
                height: '16px',
                pointerEvents: 'none'
              }} 
            />
        </div>
        <button className="login-button" style={{ marginRight: '15px', fontWeight: 'bold', fontSize: '15px' }}>Log In</button>
      </div>
      
    </nav>
  );
};

export default Navbar;
