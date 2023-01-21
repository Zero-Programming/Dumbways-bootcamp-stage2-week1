import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProject from "../components/NavbarProject";
import Container from "react-bootstrap/esm/Container";
import ImgDp1 from "../assets/img/imgpd1.png";
import ImgDp2 from "../assets/img/imgpd2.png";
import ImgDp3 from "../assets/img/imgpd3.png";
import ImgDp4 from "../assets/img/imgpd4.png";
import bathimg from "../assets/img/bathimg.png";
import bedimg from "../assets/img/bedimg.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

export default function DetailProperty(props) {
  useEffect(() => {
    document.body.style.background = "rgba(196, 196, 196, 0.25)";
  });
  return (
    <>
      <NavbarProject userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
      <Container style={{ margin: "200px" }} className="mx-auto px-5 mt-5 pt-5 d-flex flex-column">
        <Row>
          <Col>
            <div className="mb-4">
              <img className="w-100" src={ImgDp1} alt="" />
            </div>
            <div className="mb-5">
              <Row>
                <Col>
                  <img className="w-100" src={ImgDp2} alt="" />
                </Col>
                <Col>
                  <img className="w-100" src={ImgDp3} alt="" />
                </Col>
                <Col>
                  <img className="w-100" src={ImgDp4} alt="" />
                </Col>
              </Row>
            </div>
            <div className="mb-5">
              <h1 className="fw-bold">House Astina</h1>
            </div>
            <div className="d-flex justify-content-between mb-5">
              <Col sm={4}>
                <h3 className="fw-bold">Rp.9.000.000 / Year</h3>
                <p>Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan</p>
              </Col>
              <Col className="d-flex" sm={3}>
                <Col>
                  <p className="p-0 m-0">Bedrooms</p>
                  <div className="d-flex gap-2">
                    <span>3</span>
                    <img src={bedimg} alt="" />
                  </div>
                </Col>
                <Col>
                  <p className="p-0 m-0">Bedrooms</p>
                  <div className="d-flex gap-2">
                    <span>3</span>
                    <img src={bathimg} alt="" />
                  </div>
                </Col>
                <Col>
                  <p className="p-0 m-0">Bedrooms</p>
                  <div>
                    <span>1800 ft</span>
                  </div>
                </Col>
              </Col>
            </div>
            <div>
              <h4 className="fw-bold">Description</h4>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem sit culpa eligendi illo accusantium rem repudiandae libero architecto, debitis nobis distinctio explicabo aliquid. Quae, est voluptates vero vitae
                obcaecati aliquam impedit consequuntur ipsa eligendi? Ex atque, dolorem ullam consequuntur maxime ipsum nostrum, deleniti quos necessitatibus officiis commodi, delectus eos.
              </p>
            </div>
            <div className="d-flex justify-content-md-end">
              <Button className=" mt-5 px-5">Book Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
