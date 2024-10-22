import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsHeart , BsFillPersonFill, BsSearch } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Modal } from 'react-bootstrap';
import { useUser } from '../context/UserContext';
import { useSearch } from '../context/SearchContext';

function CustomNavbar() {
  const { user, setUser } = useUser() 
  const [show, setShow] = useState(false);
  const { search, setSearch } = useSearch();
  const [showSearch, setShowSearch] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()


  const handleLogout = () => {
    setUser(null); 
    navigate('/')
  };
  const handleSearchClose = () => setShowSearch(false);
  const handleSearchShow = () => setShowSearch(true);

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
              <Nav.Link onClick={()=> navigate('/plan')}>Plan</Nav.Link>
            </Nav>
            <Nav className='me-2'>
              <Nav.Link onClick={handleSearchShow}>
                <BsSearch />
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to={`/profile/${user.id}`}>
                    <img 
                      src={user.profileImage} 
                      alt={user.firstName} 
                      className="rounded-circle" 
                      style={{ width: '30px', height: '30px', marginRight: '5px', border:' 2px solid #48cb57' }} 
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
              <BsHeart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showSearch} onHide={handleSearchClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        placeholder="Search recipe"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-control"
                    />
                </Modal.Body>
            </Modal>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={()=> navigate('/plan')}>Plan</Nav.Link>
            <Nav.Link onClick={handleSearchShow}>
              <BsSearch /> Search
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  <img 
                    src={user.profileImage} 
                    alt={user.firstName} 
                    className="rounded-circle" 
                    style={{ width: '30px', height: '30px', marginRight: '5px', border:' 2px solid #48cb57' }} 
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
            <BsHeart /> Favorite
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
