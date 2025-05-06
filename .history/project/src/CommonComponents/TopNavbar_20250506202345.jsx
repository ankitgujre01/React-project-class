import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon

const TopNavbar = () => {
  return (
    <>
      <div className='navbar'>
      <Navbar bg="success" variant="dark" expand="lg"> {/* green color */}
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav className="ms-auto"> {/* Right aligned */}
              <Nav.Link href="#cart">
                <FaShoppingCart size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    </>
  );
};

export default TopNavbar;
