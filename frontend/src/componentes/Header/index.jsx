import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Image } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from '../../images/logos-alcaldia.png';

function CollapsibleExample() {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      bg="light"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="www.cali.gov.co">
          <Image
            src={logo1}
            alt="Logo 1"
            width="250"
            height="100"
            className="mr-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="RegistrarPreguntas">Responder</Nav.Link>
            <Nav.Link href="#pricing">Consultar</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Cerrar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
