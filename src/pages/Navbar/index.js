import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Body } from "./style";
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default function Teste() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark " variant="dark" >
        <Container className="container-fluid ms-5">
          <Navbar.Brand href="">Portfólio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/projetos">Projetos</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
              <NavDropdown title="Participações" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fiec</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.2">FindDaddy</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
