import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navigation.css";
const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bold">
              <span className=" text-primary">LexMart</span> Furniture
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {user && (
                <>
                  <Nav.Link as={Link} to="/manageInventories">
                    Manage Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addItem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myItem">
                    My Item
                  </Nav.Link>
                </>
              )}

              {user ? (
                <button
                  className="bg-black text-white"
                  onClick={() => signOut(auth)}
                >
                  SignOut
                </button>
              ) : (
                <Nav.Link as={Link} to="/signIn">
                  SignIn
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
