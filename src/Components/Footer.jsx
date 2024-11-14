import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function FooterComponent() {
  return (
    <footer className="footer">
      
      <Container>
        <Row>
          {/* Logo Section */}
          <Col md={3}>
            <img
              src="/MHM-circle-logo-2020.svg"
              alt="logo"
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: '200px',
                height: 'auto'
              }}
            />
          </Col>

          {/* Discover Section */}
          <Col md={3}>
            <h4>DISCOVER</h4>
            <div className="discover-links">
              <a href="/#">Menus</a>
              <a href="/#">Marketing</a>
              <a href="/#">Online Menu</a>
              <a href="/#">QR Codes</a>
              <a href="/#">Link Pages</a>
              <a href="/#">Menu Services</a>
            </div>
          </Col>

          {/* Resources Section */}
          <Col md={3}>
            <h4>RESOURCES</h4>
            <div className="resources-links">
              <a href="/#">Print</a>
              <a href="/#">Help Center</a>
              <a href="/#">Explore</a>
            </div>
          </Col>

          {/* Company Section */}
          <Col md={3} className="company">
            <h4>COMPANY</h4>
            <div className="company-links">
              <a href="/#">Pricing</a>
              <a href="/#">About Us</a>
              <a href="/#">Press</a>
              <a href="/#">Partners</a>
              <a href="/#">Affiliate Program</a>
              <a href="/#">Contact</a>
              <a href="/#">Terms of Use</a>
              <a href="/#">Privacy Policy</a>
              <a href="/#">Status</a>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <hr />

        <br />

        {/* Copyright and Social Icons */}
        <Row className="d-flex justify-content-between align-items-center">
          {/* Copyright Section */}
          <Col md={6} className="copyright text-start">
            <p>© 2024 MustHaveMenus Inc. All Rights Reserved.<br />
              © QR Code is a registered trademark of Denso Wave Incorporated</p>
          </Col>

          {/* Social Icons Section */}
          <Col md={6} className="icons text-end">
            <a href="/#">
              <img src="https://timber.mhmcdn.com/site/marketing/icons/YouTube.svg" alt="YouTube" loading="lazy" />
            </a>
            <a href="/#">
              <img src="https://timber.mhmcdn.com/site/marketing/icons/Facebook.svg" alt="Facebook" loading="lazy" />
            </a>
            <a href="/#">
              <img src="https://timber.mhmcdn.com/site/marketing/icons/Instagram.png" alt="Instagram" loading="lazy" />
            </a>
            <a href="/#">
              <img src="https://timber.mhmcdn.com/site/marketing/icons/X.svg" alt="X" loading="lazy" />
            </a>
            <a href="/#">
              <img src="https://timber.mhmcdn.com/site/marketing/icons/Pinterest.svg" alt="Pinterest" loading="lazy" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
