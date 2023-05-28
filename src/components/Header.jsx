import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <Navbar className="header" bg="custom-color" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Kara Guarraci
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="#about-me"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active"
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#skills"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#interests"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active"
            >
              Interests
            </Nav.Link>
            <Nav.Link
              href="#contact"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
