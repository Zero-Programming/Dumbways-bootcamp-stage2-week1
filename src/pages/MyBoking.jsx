import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProject from "../components/NavbarProject";
import Icon from "../components/Icon.svg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Elipse from "../assets/img/Ellipse 7.png";
import Elipsee from "../assets/img/Ellipse 8.png";
import Line from "../assets/img/Line 9.png";

export default function DetailProperty(props) {
  useEffect(() => {
    document.body.style.background = "tomato";
  });
  return (
    <>
      <NavbarProject userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
      <Container className="myc" style={{ width: "60%", marginTop: "200px" }}>
        <Row style={{}} className="d-flex bg-secondary jcb">
          <Col className="bg" md="auto" lg={4}>
            <img src={Icon} alt="" />
          </Col>
          <Col className=" bg" md="auto" lg={4}>
            <h1 className="text-center p-0 m-0">Booking</h1>
            <p className="text-center p-0 m-0">Saturday, 30 March 2020</p>
          </Col>
        </Row>
        <Row style={{}} className="d-flex bg-secondary jcb align-items-center">
          <Col className="bg" md="auto" lg={4}>
            <h5 className="fw-bold">House Astina</h5>
            <p>Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan</p>
          </Col>
          <Col className=" bg" md="auto" lg={4}>
            <div className="d-flex flex-column ">
              <div className="d-flex  align-items-center gap-4">
                <div>
                  <img src={Elipse} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <span>Check-in</span>
                  <span>30 March 2020</span>
                </div>
                <div className="d-flex flex-column">
                  <span>Amenities</span>
                  <span>Furnished</span>
                </div>
              </div>

              <div className="d-flex ">
                <img style={{ marginLeft: "6px" }} src={Line} alt="" />
              </div>
              <div className="d-flex  align-items-center gap-4">
                <div>
                  <img src={Elipsee} alt="" />
                </div>

                <div className="d-flex flex-column ">
                  <span>Check-in</span>
                  <span>30 March 2020</span>
                </div>
                <div className="ms-3 d-flex flex-column ">
                  <span>Type of Rent</span>
                  <span>Year</span>
                </div>
              </div>
            </div>
          </Col>
          <Col className=" bg" md="auto" lg={4}>
            <input type="file" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
