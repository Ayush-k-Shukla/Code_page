/* eslint-disable no-unused-vars */
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
import "aos/dist/aos.css";
import i1 from "./code_logo.png";

const Navabar = () => {
  return (
    <div class="container">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="/" class="logo">
          <img class="img-responsive" src={i1} alt="logo-img"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" class="link">
              Home
            </Nav.Link>
            <Nav.Link href="/" class="link">
              Carrer
            </Nav.Link>
            <Nav.Link href="/" class="link">
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Form inline>
              <Button variant="outline-success">Contact Us</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navabar;
