import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProject from "../components/NavbarProject";
import Container from "react-bootstrap/esm/Container";
import bathimg from "../assets/img/bathimg.png";
import bedimg from "../assets/img/bedimg.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import Modal from "react-bootstrap/Modal";
import listData from "../components/Data";

function MyBookModal(props) {
  const { id } = useParams();

  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState({
    check_in: "",
    check_out: "",
  });

  const handleOnChange = (e) => {
    setCheckIn({
      ...checkIn,
      [e.target.name]: e.target.value,
    });
  };

  const handle = (e) => {
    // e.preventDefault();
    localStorage.setItem("Date", JSON.stringify(checkIn));
    localStorage.setItem("Data", JSON.stringify(listData[id]));
    localStorage.setItem("DataId", id);
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" style={{ display: "flex", flexDirection: "column" }} controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontWeight: "bold" }}>Check-in</Form.Label>
            <Form.Control type="date" name="check_in" onChange={handleOnChange} />
          </Form.Group>
          <Form.Group className="mb-3" style={{ display: "flex", flexDirection: "column" }} controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontWeight: "bold" }}>Check-Out</Form.Label>
            <Form.Control type="date" name="check_out" onChange={handleOnChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button
          variant="primary"
          onClick={() => {
            handle();
            navigate(`/my-booking/${id}`);
          }}
        >
          Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function DetailProperty(props) {
  useEffect(() => {
    document.body.style.background = "rgba(196, 196, 196, 0.25)";
  });

  const [modalSignIn, setModalSignIn] = React.useState(false);
  const [modalSignUp, setModalSignUp] = React.useState(false);

  const handleSignin = () => {
    setModalSignIn(true);
  };
  const handleSignup = () => {
    setModalSignUp(true);
  };

  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();
  const listData = props.listData;

  return (
    <>
      <NavbarProject userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
      <Container style={{ margin: "200px" }} className="mx-auto px-5 mt-5 pt-5 d-flex flex-column">
        <Row>
          <Col className="mt-5">
            <div className="mb-4">
              <img className="w-100 rounded" style={{ height: "400px", objectFit: "cover" }} src={require("../assets/img/" + listData[id - 1].image)} alt="" />
            </div>
            <div className="mb-5">
              <Row>
                <Col>
                  <img className="w-100" src={require("../assets/img/" + listData[id - 1].image)} alt="" />
                </Col>
                <Col>
                  <img className="w-100" src={require("../assets/img/" + listData[id - 1].image)} alt="" />
                </Col>
                <Col>
                  <img className="w-100" src={require("../assets/img/" + listData[id - 1].image)} alt="" />
                </Col>
              </Row>
            </div>
            <div className="mb-5">
              <h1 className="fw-bold">{listData[id - 1].name}</h1>
            </div>
            <div className="d-flex justify-content-between mb-5">
              <Col sm={4}>
                <h3 className="fw-bold">{listData[id - 1].price + " / " + listData[id - 1].rent}</h3>
                <p>Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan</p>
              </Col>
              <Col className="d-flex" sm={3}>
                <Col>
                  <p className="p-0 m-0">Bedrooms</p>
                  <div className="d-flex gap-2">
                    <span>{listData[id - 1].property.beds}</span>
                    <img src={bedimg} alt="" />
                  </div>
                </Col>
                <Col>
                  <p className="p-0 m-0">Bathrooms</p>
                  <div className="d-flex gap-2">
                    <span>{listData[id - 1].property.Bats}</span>
                    <img src={bathimg} alt="" />
                  </div>
                </Col>
                <Col>
                  <p className="p-0 m-0">Area</p>
                  <div>
                    <span>{listData[id - 1].property.Area}</span>
                  </div>
                </Col>
              </Col>
            </div>
            <div>
              <h4 className="fw-bold">Description</h4>
              <p style={{ textAlign: "justify" }}>{listData[id - 1].description}</p>
            </div>
            <div className="d-flex justify-content-md-end">
              {!localStorage.getItem("UserSignIn") ? (
                <Button className=" mt-5 px-5" onClick={() => setModalSignIn(true)}>
                  Book Now
                </Button>
              ) : (
                <Button className=" mt-5 px-5" onClick={() => setModalShow(true)}>
                  Book Now
                </Button>
              )}

              <MyBookModal show={modalShow} onHide={() => setModalShow(false)} />
              <SignIn openSignup={handleSignup} userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} show={modalSignIn} onHide={() => setModalSignIn(false)} />
              <SignUp openSignin={handleSignin} show={modalSignUp} onHide={() => setModalSignUp(false)} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
