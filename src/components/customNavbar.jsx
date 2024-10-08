import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart, BsFillPersonFill, BsSearch } from 'react-icons/bs';

function CustomNavbar() {
  return (
    <Navbar bg="light" >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="img-logo">
            <img
              src="Green Beige Circle Healthy Food Logo.png"
              className="d-inline-block align-top logo"
              alt="Logo"
            />
          </div>
          <span className="ms-2">Healthy Recipe</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#plan">Plan</Nav.Link>
        </Nav>
        <Nav className='me-2'>
          <Nav.Link href="#login">
            <BsSearch />
          </Nav.Link>
          <Nav.Link as={Link} to="login">
            <BsFillPersonFill />
          </Nav.Link>
          <Nav.Link as={Link} to="favorites">
            <BsCart />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
