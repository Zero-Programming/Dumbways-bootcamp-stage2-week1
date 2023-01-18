import React from "react";
import Image from "react-bootstrap/Image";
import fp from "../assets/img/fp.jpg";
import Button from "react-bootstrap/esm/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ProfileImg from "../assets/img/user2.png";
import CalenderImg from "../assets/img/calendar.png";
import BillImg from "../assets/img/bill.png";
import LogoutImg from "../assets/img/logout1.png";

export default function Dropdown() {
  return (
    <>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body className="d-flex flex-column gap-3 pe-5 ">
                <div>
                  <img className="pe-3" src={ProfileImg} alt="" />
                  <span className="fw-semibold">Profile</span>
                </div>
                <div>
                  <img className="pe-3" src={CalenderImg} alt="" />
                  <span className="fw-semibold">My Booking</span>
                </div>
                <div>
                  <img className="pe-3" src={BillImg} alt="" />
                  <span className="fw-semibold">History</span>
                  <hr></hr>
                </div>
                <div>
                  <img className="pe-3" src={LogoutImg} lt="" />
                  <span className="fw-semibold">Logout</span>
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <Button className="p-0 rounded-circle" style={{ width: "50px", height: "50px" }} variant="light">
            <Image roundedCircle className="si" src={fp} />
          </Button>
        </OverlayTrigger>
      ))}
    </>
  );
}
