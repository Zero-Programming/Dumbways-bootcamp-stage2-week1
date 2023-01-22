import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import NavbarProject from "../components/NavbarProject";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import imgp from "../assets/img/imgp.png";
import imgp1 from "../assets/img/imgp1.png";
import imgp2 from "../assets/img/imgp2.png";
import imgp3 from "../assets/img/imgp3.png";
import imgp4 from "../assets/img/imgp4.png";
import imgp5 from "../assets/img/imgp5.png";
import imgp6 from "../assets/img/imgp6.png";
import imgp7 from "../assets/img/imgp7.png";
import Button from "react-bootstrap/esm/Button";

export default function Profile(props) {
  useEffect(() => {
    document.body.style.background = "rgba(196, 196, 196, 0.25)";
  });
  return (
    <div className="">
      <NavbarProject userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
      <Container className="">
        <Row className="pp justify-content-between bg-white">
          <Col className="d-flex flex-column gap-3" sm={4}>
            <h3 className="fw-bold ">Personal Info</h3>
            <div className="d-flex align-items-center gap-3">
              <div>
                <img width={40} src={imgp3} alt="" />
              </div>
              <div className="d-flex flex-column">
                <span className="p-0 m-0">Zero</span>
                <span className="fs14 text-secondary">Full Name</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={40} src={imgp2} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0">Zero</span>
                <span className="fs14 text-secondary">Email</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={40} src={imgp6} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0">Zero</span>
                <span className="fs14 text-secondary"> Password</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={40} src={imgp7} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0">Zero</span>
                <span className="fs14 text-secondary">Status</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={40} src={imgp5} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0">Zero</span>
                <span className="fs14 text-secondary">Mobile phone</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={39} src={imgp1} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0">Zero</span>
                <span className="fs14 text-secondary">Full Name</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={40} src={imgp4} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0">Zero</span>
                <span className="fs14 text-secondary">Address</span>
              </div>
            </div>
          </Col>
          <Col className="p-0 d-flex flex-column gap-3" sm={4}>
            <div>
              <img className="w-100 rounded" src={imgp} alt="" />
            </div>
            <div>
              <Button className="w-100">Change Foto Profile</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
