import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./nav.css";
import i1 from "./code_logo.png";

const Navabar = () => {
  return (
    <div class="container">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="/" class="logo"><img class="img-responsive" src={i1}></img>CODE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Form inline>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">Carrer</Nav.Link>
              <Nav.Link href="/contact-us">About Us</Nav.Link>
              <Button variant="outline-success">Contact Us</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navabar;
