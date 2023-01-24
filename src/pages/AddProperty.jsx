import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarProject from "../components/NavbarProject";
import Container from "react-bootstrap/esm/Container";
import { useEffect } from "react";

function AddProperty() {
  useEffect(() => {
    document.body.style.background = "rgba(196, 196, 196, 0.25)";
  });

  return (
    <>
      <NavbarProject />
      <Container className="w-75 mb-5" style={{ marginTop: "150px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Name Property</Form.Label>
            <Form.Control className="bgad" type="text" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="alamat">
            <Form.Label className="fw-bold">Address</Form.Label>
            <Form.Control className="rs bgad" as="textarea" name="address" style={{ height: "80px" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Price</Form.Label>
            <Form.Control className="bgad" type="text" />
          </Form.Group>

          <Form.Label className="fw-bold">Amenities</Form.Label>
          <Form.Group className="mb-3 d-flex gap-5" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Furnished" />
            <Form.Check type="checkbox" label="Furnished" />
            <Form.Check type="checkbox" label="Furnished" />
            <Form.Check type="checkbox" label="Furnished" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="useAs">
            <Form.Label className="fw-bold">City</Form.Label>
            <Form.Select className="bgad" name="listAs" aria-label="Default select example">
              <option></option>
              <option value="Tenant">Jakarta</option>
              <option value="Owner">Bandung</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="useAs">
            <Form.Label className="fw-bold">Type of Rent</Form.Label>
            <Form.Select className="bgad" name="listAs" aria-label="Default select example">
              <option></option>
              <option value="Tenant">Year</option>
              <option value="Owner">Month</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="useAs">
            <Form.Label className="fw-bold">Bedroom</Form.Label>
            <Form.Select className="bgad" name="listAs" aria-label="Default select example">
              <option></option>
              <option value="Tenant">3</option>
              <option value="Owner">2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="useAs">
            <Form.Label className="fw-bold">Bathroom</Form.Label>
            <Form.Select className="bgad" name="listAs" aria-label="Default select example">
              <option></option>
              <option value="Tenant">1</option>
              <option value="Owner">2</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-center mt-5">
            <Button style={{ padding: "8px 100px" }} variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default AddProperty;
