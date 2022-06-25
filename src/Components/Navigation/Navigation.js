import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bold">LexMart Furniture</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/manageItem">
                Manage Item
              </Nav.Link>
              <Nav.Link as={Link} to="/addItem">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to="/myItem">
                My Item
              </Nav.Link>
              <Nav.Link as={Link} to="/signIn">
                SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
