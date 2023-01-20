import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function SignIn(props) {
  let isLogin = props.isLogin;
  const dataString = localStorage.getItem("User");
  const dataUser = JSON.parse(dataString);
  console.log(props);

  const handleOnChange = (e) => {
    props.setUserSignIn({
      ...props.userSignIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(props.userSignIn);

    if (dataUser.userName === props.userSignIn.userName && dataUser.password === props.userSignIn.password) {
      e.preventDefault();
      props.setUserSignIn({
        ...props.userSignIn,
        isLogin: true,
      });
      alert("login succses!");
      console.log(props.setUserSignIn.isLogin);
    } else {
      alert("email or password worng!");
    }
  };

  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <h3 className="fw-bold text-center my-5">Sign In</h3>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label className="fw-bold">Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name="userName" onChange={handleOnChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleOnChange} />
            <Form.Text className="text-muted">
              Dont have an account? click <a href="/">Here</a>
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
