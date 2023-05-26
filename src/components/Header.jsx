import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="all_nav">
          <Nav className="browse_nav">
            <Nav.Link as={Link} to={"/"} onClick="hide.bs.dropdown">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to={"/skills"} onClick="hide.bs.dropdown">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"} onClick="hide.bs.dropdown">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to={"/interests"} onClick="hide.bs.dropdown">
              Interests
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"} onClick="hide.bs.dropdown">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
