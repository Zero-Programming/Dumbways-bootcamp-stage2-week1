import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function SignUp(props) {
  const [userSignUp, setUserSignUp] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    useAs: "",
    gendre: "",
    address: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("User", JSON.stringify(userSignUp));
  };

  const handleOnChange = (e) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <h3 className="fw-bold text-center my-5">Sign Up</h3>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="fullName" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Full Name</Form.Label>
            <Form.Control type="text" placeholder="" name="fullName" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userName" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Username</Form.Label>
            <Form.Control type="text" placeholder="" name="userName" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="useAs" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Use As</Form.Label>
            <Form.Select name="useAs" aria-label="Default select example">
              <option>~Select~</option>
              <option value="User">User</option>
              <option value="Owner">Owner</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="gendre" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Gendre</Form.Label>
            <Form.Select name="gendre" aria-label="Default select example">
              <option>~Select~</option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="alamat" onChange={handleOnChange}>
            <Form.Label className="fw-bold">Address</Form.Label>
            <Form.Control className="rs" as="textarea" name="address" style={{ height: "100px" }} />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
