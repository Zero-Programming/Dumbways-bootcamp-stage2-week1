import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { GoCalendar } from "react-icons/go";
import Row from "react-bootstrap/Row";
import "../styles/style.css";
import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

// style={{ widht: "30rem", paddingTop: "100px", zIndex: "10" }}

export default function Filter() {
  const [durValue, setDurValue] = useState("0");
  const [bedValue, setBedValue] = useState("0");
  const [bathValue, setBathValue] = useState("0");

  const dur = [
    { name: "Day", value: "1" },
    { name: "Month", value: "2" },
    { name: "Year", value: "3" },
  ];
  const bed = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5+", value: "5" },
  ];

  const bath = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5+", value: "5" },
  ];

  return (
    <Col sm={3} style={{ height: "100vh" }}>
      <Form className=" d-flex flex-column gap-3" action="">
        <div className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24">Type Of Rent</Form.Label>
          <div className="d-flex gap-3">
            {dur.map((dur, idx) => (
              <ToggleButton
                key={idx}
                id={`dur-${idx}`}
                type="radio"
                variant={durValue === dur.value ? "primary" : "light"}
                name="dur"
                value={dur.value}
                checked={durValue === dur.value}
                onChange={(e) => setDurValue(e.currentTarget.value)}
                className={"w-75 bg"}
              >
                {dur.name}
              </ToggleButton>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24">Date</Form.Label>
          <InputGroup className="">
            <InputGroup.Text id="basic-addon1">
              <GoCalendar />
            </InputGroup.Text>
            <Form.Control className="bg" placeholder="Date" type="date" aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>
        </div>
        <div className="d-flex flex-column gap-2">
          <Form.Label className="fw-bold m-0 fs24">Property Room</Form.Label>
          <div>
            <Form.Label className="text-secondary m-0 fs14 pb-2">badroom</Form.Label>
            <div className="d-flex justify-content-between gap-3">
              {bed.map((bed, idx) => (
                <ToggleButton
                  key={idx}
                  id={`bed-${idx}`}
                  type="radio"
                  variant={bedValue === bed.value ? "primary" : "light"}
                  name="bed"
                  value={bed.value}
                  checked={bedValue === bed.value}
                  onChange={(e) => setBedValue(e.currentTarget.value)}
                  className={"w-100 bg"}
                >
                  {bed.name}
                </ToggleButton>
              ))}
            </div>
          </div>
          <div>
            <Form.Label className="text-secondary m-0 fs14 pb-2">bathroom</Form.Label>
            <div className="d-flex justify-content-between gap-3">
              {bath.map((bath, idx) => (
                <ToggleButton
                  key={idx}
                  id={`bath-${idx}`}
                  type="radio"
                  variant={bathValue === bath.value ? "primary" : "light"}
                  name="bath"
                  value={bath.value}
                  checked={bathValue === bath.value}
                  onChange={(e) => setBathValue(e.currentTarget.value)}
                  className={"w-100 bg"}
                >
                  {bath.name}
                </ToggleButton>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <Form.Label className="fw-bold m-0 fs24"> Amenities</Form.Label>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Furnished
            </label>
            <Form.Check aria-label="option 1" />
          </div>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Pet Allowed
            </label>
            <Form.Check aria-label="option 1" />
          </div>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Shared Accomodation
            </label>
            <Form.Check aria-label="option 1" />
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24"> Budget</Form.Label>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="5">
              Less than IDR.
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="" className="bg" />
            </Col>
          </Form.Group>
        </div>
        <div className="d-flex justify-content-md-end">
          <Button variant="secondary" className="">
            APPLY
          </Button>
        </div>
      </Form>
    </Col>
  );
}
