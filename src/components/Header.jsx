import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Navbar className="header" bg="custom-color" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Kara Guarraci
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about-me" duration={500} offset={-100}>
                About Me
              </Nav.Link>
              <Nav.Link href="#skills" duration={500} offset={-100}>
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" duration={500} offset={-100}>
                Projects
              </Nav.Link>
              <Nav.Link href="#interests" duration={500} offset={-100}>
                Interests
              </Nav.Link>
              <Nav.Link href="#contact" duration={500} offset={-100}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
