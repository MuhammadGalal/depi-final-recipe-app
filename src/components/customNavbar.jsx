import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart, BsFillPersonFill, BsSearch } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUser } from '../context/UserContext';

function CustomNavbar() {
  const { user, setUser } = useUser() 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    setUser(null); 
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
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
          <Navbar.Toggle onClick={handleShow} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#plan">Plan</Nav.Link>
            </Nav>
            <Nav className='me-2'>
              <Nav.Link href="#search">
                <BsSearch />
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to={`/profile/${user.id}`}>
                    <img 
                      src={user.profileImage} 
                      alt={user.firstName} 
                      className="rounded-circle" 
                      style={{ width: '30px', height: '30px', marginRight: '5px' }} 
                    />
                    <span>{user.firstName}</span>
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <BsFillPersonFill />
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/favorites">
                <BsCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#plan">Plan</Nav.Link>
            <Nav.Link href="#search">
              <BsSearch /> Search
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  <img 
                    src={user.profileImage} 
                    alt={user.firstName} 
                    className="rounded-circle" 
                    style={{ width: '30px', height: '30px', marginRight: '5px' }} 
                  />
                  <span>{user.firstName}</span>
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                <BsFillPersonFill /> Login
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/favorites">
              <BsCart /> Cart
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
