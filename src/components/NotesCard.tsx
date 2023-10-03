import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const NotesCard = () => {
  return (
    <Card className="m-2">
      <Card.Body>
        <h5>Notes</h5>
        <br/>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Nav variant="underline" defaultActiveKey="#">
                  <Nav.Item>
                    <Nav.Link href="#">Work Instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#1" disabled>Internal Notes</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#2" disabled>
                      Field Notes
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Preselected Text</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">2381 Stark Hollow Road, Basalt, CO 81620</option>
                <option value="2">1608 Philadelphia Avenue, Salt Lake City, UT, 84111</option>
                <option value="3">4905 Alfred Drive, Brooklyn, NY, 11206</option>
              </Form.Select>
            </Form.Group>
            <Form.Control placeholder="Enter notes here..." as="textarea" rows={3} />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default NotesCard;
