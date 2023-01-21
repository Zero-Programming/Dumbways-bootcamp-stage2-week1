import React, { Link } from "react";
import Col from "react-bootstrap/esm/Col";
import "../styles/style.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import listData from "./Data";
import { useNavigate } from "react-router-dom";

export default function ContentData() {
  const navigate = useNavigate();
  return (
    <>
      <Col className="ms-5 d-flex justify-content-end" sm={9}>
        <div className="bg" style={{ paddingTop: "90px" }}>
          <div className="d-flex warp justify-content-evenly mt-5">
            {listData.map((value, index) => {
              return (
                <Card key={index} className="wc p-2 mb-5  d-flex selector-for-some-widget overflow-hidden">
                  {/* <Link to={"/detail-property/" + index + 1}> */}

                  <span className="position-absolute px-3 py-1 bg-white rounded-2 fs10 mt-2 ms-2">{value.amenities}</span>
                  <Card.Img onClick={() => navigate(`/detail-property/${index + 1}`)} className="pb-1" variant="top" src={require("../assets/img/" + value.image)} />
                  {/* </Link> */}
                  <Card.Body className=" bs m-0 p-0 d-flex flex-column gap-1">
                    <Card.Title className="fs16 fw-bold m-0 p-0">
                      {value.price} / {value.rent}
                    </Card.Title>
                    <Card.Text className="fs10 m-0 p-0 fw-semibold">{value.property.beds + " beds, " + value.property.Bats + " Bats, " + value.property.Area}</Card.Text>
                    <Card.Text className="fs10 m-0 p-0 lh-lg text-secondary fw-semibold">{value.addres}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </Col>
    </>
  );
}
