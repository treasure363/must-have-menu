import React, { useState } from 'react';
import './Navbar.css';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [isTemplatesDropdownVisible, setTemplatesDropdownVisible] = useState(false);
  const [isDigitalDropdownVisible, setDigitalDropdownVisible] = useState(false);
  const [isPricingDropdownVisible, setPricingDropdownVisible] = useState(false);

  const toggleTemplatesDropdown = () => setTemplatesDropdownVisible(!isTemplatesDropdownVisible);
  const toggleDigitalDropdown = () => setDigitalDropdownVisible(!isDigitalDropdownVisible);
  const togglePricingDropdown = () => setPricingDropdownVisible(!isPricingDropdownVisible);

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
          <li 
            onMouseEnter={toggleTemplatesDropdown} 
            onMouseLeave={toggleTemplatesDropdown}
          >
            Templates
            {isTemplatesDropdownVisible && (
              <div className="dropdown templates-dropdown">
                <TemplatesDropdownContent />
              </div>
            )}
          </li>
          <li 
            onMouseEnter={toggleDigitalDropdown} 
            onMouseLeave={toggleDigitalDropdown}
          >
            Digital
            {isDigitalDropdownVisible && (
              <div className="dropdown digital-dropdown">
                <DigitalDropdownContent />
              </div>
            )}
          </li>
          <li>Explore</li>
          <li 
            onMouseEnter={togglePricingDropdown} 
            onMouseLeave={togglePricingDropdown}
          >
            Pricing
            {isPricingDropdownVisible && (
              <div className="dropdown pricing-dropdown">
                <PricingDropdownContent />
              </div>
            )}
          </li>
        </ul>
        <button className="demo-button" style={{ fontWeight: 'bold', fontSize: '15px' }}>Book a Demo</button>
      </div>
      <div className="navbar-right">
        <div className="position-relative me-3">
            <input 
              type="text" 
              placeholder="Search 25,000 templates" 
              className="search-bar pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 w-[300px]"
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

const TemplatesDropdownContent = () => (
    <div className="templates-content">
      <div className="dropdown-section">
        <h4>Menus</h4>
        <ul>
          <li>Dine-In</li>
          <li>Takeout</li>
          <li>Half Page</li>
          <li>Kids Menus</li>
          <li>Cafe Menus</li>
          <li>Bar Menus</li>
          <li>Dispensary Menus</li>
        </ul>
      </div>
      <div className="dropdown-section">
        <h4>Marketing</h4>
        <ul>
          <li>Table Tents</li>
          <li>Tabletop Inserts</li>
          <li>Sandwich Boards</li>
          <li>Posters</li>
          <li>Flyers</li>
          <li>Loyalty Cards</li>
          <li>Stickers</li>
          <li>Business Cards</li>
          <li>Comment Cards</li>
          <li>Logos</li>
        </ul>
      </div>
      <div className="dropdown-section">
        <h4>Digital Menus</h4>
        <ul>
          <li>Digital Menu Boards</li>
          <li>Digital Signage</li>
          <li>Pizza Displays</li>
          <li>Burger & Fast Casual Displays</li>
          <li>Pub & Brewery Displays</li>
          <li>Cafe & Deli Displays</li>
          <li>Dispensary Displays</li>
          <li>Coffee House Displays</li>
        </ul>
      </div>
      <div className="dropdown-section">
        <h4>Social</h4>
        <ul>
          <li>Instagram Posts</li>
          <li>Instagram Stories</li>
          <li>Facebook Posts</li>
          <li>Facebook Stories</li>
        </ul>
      </div>
      <div className="dropdown-section">
        <h4>Seasonal</h4>
        <ul>
          <li>Thanksgiving Menus</li>
          <li>Thanksgiving Flyers</li>
          <li>Thanksgiving Table Tents</li>
          <li>Thanksgiving Digital Signage</li>
        </ul>
      </div>
    </div>
);
  

const DigitalDropdownContent = () => (
  <div className="digital-content">
    <DropdownItem imageSrc="display-app.jpg" title="Display App" />
    <DropdownItem imageSrc="toast-pos.jpg" title="Toast POS" />
    <DropdownItem imageSrc="menu-management.jpg" title="Menu Management" />
    <DropdownItem imageSrc="qr-codes.jpg" title="QR Codes" />
    <DropdownItem imageSrc="link-pages.jpg" title="Link Pages" />
    <DropdownItem imageSrc="online-menus.jpg" title="Online Menus" />
  </div>
);

const PricingDropdownContent = () => (
  <div className="pricing-content">
    <p>Low-Cost Price Plans</p>
    <p>Menu Services</p>
  </div>
);

const DropdownItem = ({ imageSrc, title }) => (
  <div className="digital-section">
    <img src={imageSrc} alt={title} />
    <p>{title}</p>
  </div>
);

export default Navbar;
