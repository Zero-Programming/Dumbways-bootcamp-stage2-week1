import React from "react";

import Filter from "../components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import NavScrollExample from "../components/Navbar";
import ContentData from "../components/ContentData";

export default function Home(props) {
  return (
    <>
      <NavScrollExample userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
      <Row className="mx-4 justify-content-end" style={{ paddingTop: "90px" }}>
        <Filter />
        <ContentData />
      </Row>
    </>
  );
}
