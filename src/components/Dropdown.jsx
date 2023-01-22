import React from "react";
import Image from "react-bootstrap/Image";
import fp from "../assets/img/fp.jpg";
import { BsPerson, BsCalendar3 } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import User from "../assets/img/user2.png";
import Cal from "../assets/img/calendar.png";
import Bill from "../assets/img/bill.png";
import Logout from "../assets/img/logout1.png";
import Cabin from "../assets/img/cabin.png";

import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

import Dropdown from "react-bootstrap/Dropdown";

function DropdwonLogin(props) {
  const navigate = useNavigate();
  console.log(props.userSignIn.listAs);
  return (
    <>
      <Dropdown align="end" style={{ color: "white", backgroundColor: "white", border: "white" }} id="dropdown-basic-button" title="Dropdown button">
        <DropdownToggle className="p-0 rounded-circle" style={{ width: "50px", height: "50px" }} variant="white">
          <Image roundedCircle className="si" src={fp} />
        </DropdownToggle>
        <DropdownMenu>
          <Dropdown.Item
            // onClick={() => {
            //   <Link></Link>("/profile");
            // }}
            className="dropDownNav"
          >
            <img className="pe-2" src={User} alt="" />
            <span style={{ color: "black" }}> Profile</span>
          </Dropdown.Item>
          <Dropdown.Item className="dropDownNav">
            {props.userSignIn.listAs === "Tenant" ? (
              <>
                <img className="pe-2" src={Cal} alt="" />
                <span style={{ color: "black" }}> My Booking</span>
              </>
            ) : (
              <>
                <img className="pe-2" src={Cabin} alt="" />
                <span style={{ color: "black" }}>Add Property</span>
              </>
            )}
          </Dropdown.Item>
          <Dropdown.Item className="dropDownNav">
            <img className="pe-2" src={Bill} alt="" />
            <span style={{ color: "black" }}> History</span>
          </Dropdown.Item>
          <Dropdown.Divider />
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
