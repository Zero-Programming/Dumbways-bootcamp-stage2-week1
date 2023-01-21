import React from "react";

import Filter from "../components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import ContentData from "../components/ContentData";
import NavbarProject from "../components/NavbarProject";

export default function Home(props) {
  return (
    <>
      <NavbarProject userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
      <Row className="mx-4 justify-content-end">
        <Filter />
        <ContentData />
      </Row>
    </>
  );
}
