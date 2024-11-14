import React from 'react';
import { Search } from 'lucide-react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        
        <Form className="d-flex me-3 position-relative rounded-3">
          <FormControl
            type="search"
            placeholder="Search 25,000 templates"
            className="form-control bg-light border-start-0 ps-0"
            style={{ width: '250px' }}
            autoComplete="off"
          />
        </Form>
         
        <button type="button" className="btn btn-danger" style={{ marginRight: '15px', fontWeight: 'bold', fontSize: '15px' }}>
          Log In
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
