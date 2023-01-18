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
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <h3 className="fw-bold text-center my-5">Sign In</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function NavScrollExample() {
  const [modalShow, setModalShow] = React.useState(false);
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
            <Button className="shadow-sm bg" variant="light" onClick={() => setModalShow(true)}>
              Sign In
            </Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            <Button className="shadow-sm bg" variant="light">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
