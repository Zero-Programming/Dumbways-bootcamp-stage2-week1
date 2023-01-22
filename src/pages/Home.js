import React, { useEffect } from "react";

import Filter from "../components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import ContentData from "../components/ContentData";
import NavbarProject from "../components/NavbarProject";

export default function Home(props) {
  useEffect(() => {
    document.body.style.background = "rgba(196, 196, 196, 0.25)";
  });
  return (
    <>
      <NavbarProject userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
      <Row className="justify-content-end">
        <Filter />
        <ContentData />
      </Row>
    </>
  );
}
