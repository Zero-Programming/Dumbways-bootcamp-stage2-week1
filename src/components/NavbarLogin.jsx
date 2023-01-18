import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch } from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Icon.svg";
import "../styles/style.css";
import Dropdown from "./Dropdown";

// export default PopoverPositionedExample;

function NavbarLogin() {
  return (
    <Navbar bg="white" expand="lg" className="fixed-top px-4" style={{ zIndex: "20" }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ marginRight: "31%" }}>
          <img src={logo} alt="" width={120} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <InputGroup style={{ width: "300px" }}>
            <Form.Control type="search" placeholder="Search" className="bg" aria-label="Search" />
            <Button className="bg" variant="outline-secondary">
              <BsSearch />
            </Button>
          </InputGroup>

          <Nav style={{ maxHeight: "100px" }} className="my-2 my-lg-0 gap-3" navbarScroll>
            <Dropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
