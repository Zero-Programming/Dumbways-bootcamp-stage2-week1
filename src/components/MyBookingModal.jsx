import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function MyBookingModal(props) {
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
    localStorage.setItem("Data", JSON.stringify(props.listData));
    localStorage.setItem("DataId", id);
  };

  // console.log(checkIn);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <h3 className="fw-bold text-center my-5">How long you will stay</h3>
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
          <Button
            onClick={() => {
              handle();
              navigate(`/my-booking/${id}`);
            }}
          >
            Order
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
