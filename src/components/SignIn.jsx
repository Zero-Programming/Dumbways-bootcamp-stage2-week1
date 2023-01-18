import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function SignIn(props) {
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
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
            <Form.Text className="text-muted">
              Dont have an account? click <a href="">Here</a>
            </Form.Text>
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
