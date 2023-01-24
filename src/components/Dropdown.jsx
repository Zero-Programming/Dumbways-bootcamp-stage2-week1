import React from "react";
import Image from "react-bootstrap/Image";
import fp from "../assets/img/fp.jpg";
import { useNavigate } from "react-router-dom";
import User from "../assets/img/user2.png";
import Cal from "../assets/img/calendar.png";
import Bill from "../assets/img/bill.png";
import Logout from "../assets/img/logout1.png";
import Cabin from "../assets/img/cabin.png";

import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

import Dropdown from "react-bootstrap/Dropdown";

function DropdwonLogin(props) {
  const dataId = JSON.parse(localStorage.getItem("DataId"));
  const status = JSON.parse(localStorage.getItem("UserSignUp"));
  const navigate = useNavigate();

  return (
    <>
      <Dropdown align="end" style={{ color: "white", backgroundColor: "white", border: "white" }} id="dropdown-basic-button" title="Dropdown button">
        <DropdownToggle className="p-0 rounded-circle" style={{ width: "50px", height: "50px" }} variant="white">
          <Image roundedCircle className="si" src={fp} />
        </DropdownToggle>
        <DropdownMenu>
          <Dropdown.Item
            onClick={() => {
              navigate("/profile");
            }}
            className="dropDownNav"
          >
            <img className="pe-2" src={User} alt="" />
            <span style={{ color: "black" }}> Profile</span>
          </Dropdown.Item>
          {status.listAs === "Tenant" ? (
            <>
              <Dropdown.Item
                onClick={() => {
                  navigate(`/my-booking/${dataId}`);
                }}
                className="dropDownNav"
              >
                <img className="pe-2" src={Cal} alt="" />
                <span style={{ color: "black" }}> My Booking</span>{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                onClick={() => {
                  navigate(`/history`);
                }}
                className="dropDownNav"
              >
                <img className="pe-2" src={Bill} alt="" />
                <span style={{ color: "black" }}> History</span>
              </Dropdown.Item>
              <Dropdown.Divider />
            </>
          ) : (
            <>
              <Dropdown.Item
                onClick={() => {
                  navigate(`/add-property/`);
                }}
                className="dropDownNav"
              >
                <img className="pe-2" src={Cabin} alt="" />
                <span style={{ color: "black" }}>Add Property</span>{" "}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate(`/home-owner`);
                }}
                className="dropDownNav"
              >
                <img className="pe-2" src={Bill} alt="" />
                <span style={{ color: "black" }}> History</span>
              </Dropdown.Item>
              <Dropdown.Divider />
            </>
          )}

          <Dropdown.Item
            onClick={() => {
              navigate("/");
              localStorage.removeItem("UserSignIn");
              props.setUserSignIn({
                ...props.userSignIn,
                isLogin: false,
              });
            }}
            className="dropDownNav"
          >
            <img className="pe-2" src={Logout} alt="" />
            <span style={{ color: "black" }}> Logout </span>
          </Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default DropdwonLogin;
// export default VariantsExample;
