import React from "react";

import Filter from "../components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import NavbarLogin from "../components/NavbarLogin";
import Content from "../components/Content";

export default function HomeLogin() {
  return (
    <>
      <NavbarLogin />
      <Row className="mx-4 justify-content-between" style={{ paddingTop: "100px" }}>
        <Filter />
        <Content />
      </Row>
    </>
  );
}
