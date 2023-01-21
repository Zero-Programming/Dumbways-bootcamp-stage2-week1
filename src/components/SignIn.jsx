import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function SignIn(props) {
  const dataString = localStorage.getItem("UserSignUp");
  const dataUser = JSON.parse(dataString);

  const handleOnChange = (e) => {
    props.setUserSignIn({
      ...props.userSignIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(dataUser);

    if (dataUser.userName === props.userSignIn.userName && dataUser.password === props.userSignIn.password) {
      e.preventDefault();
      props.setUserSignIn({
        ...props.userSignIn,
        isLogin: true,
      });
      alert("login succses!");
    } else {
      alert("email or password worng!");
    }
  };

  const redirectSignup = (e) => {
    props.onHide();
    props.openSignup();
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
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
          <Form.Text className="text-muted">
            Dont have an account? click{" "}
            <span onClick={(e) => redirectSignup()} className="btn btn-link px-1 py-0">
              Here
            </span>
          </Form.Text>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
